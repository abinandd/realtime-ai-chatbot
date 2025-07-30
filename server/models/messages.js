const mongoose = require("mongoose");
const { Schema } = mongoose;

const MessageSchema = new Schema({
  sender: String,
  message: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Messages", MessageSchema);
