import React from "react";
import { Link } from "react-router";
import ChatBox from "./ChatBox"
const Chat = () => {
  return (
    <div>
      <Link to="/chat">
        <button className="w-10 py-1 bg-blue-400 cursor-pointer text-white mx-auto">
          Chat
        </button>
      </Link>
    </div>
  );
};

export default Chat;
