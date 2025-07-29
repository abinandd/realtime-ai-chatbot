const express = require("express");
const { createServer } = require("http");
const socketIO = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const main = require("./gemini");

const server = createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("client", (data) => {
    //store to db
    main(data).then((reply) => {
      console.log(reply);
      socket.emit("server", reply);
      //store to db
      //read data from db
      //send using emit
    });
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
