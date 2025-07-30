require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const app = express();
const main = require("./gemini");
const connectdb = require("./config/db");
const Messages = require("./models/messages");
app.use(cors());

const server = createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", async (socket) => {
  const allMessages = await Messages.find({});
  socket.emit("server", allMessages);

  socket.on("client", async (data) => {
    try {
      // Save user message
      const userMsg = new Messages({ sender: "user", message: data });
      await userMsg.save();

      // Get AI reply
      const reply = await main(data);
      const gemReply = new Messages({ sender: "ai", message: reply });
      await gemReply.save();

      const allMessages = await Messages.find({});
      socket.emit("server", allMessages);
    } catch (err) {
      socket.emit("server", "Server error occurred.");
    }
  });

  socket.on("disconnect", () => {});
});

// Connect DB and start server
connectdb()
  .then(() => {
    console.log(" DB connected");
    server.listen(3000, () => {
      console.log("server running...");
    });
  })
  .catch((err) => {
    console.error("connection failed:", err);
  });
