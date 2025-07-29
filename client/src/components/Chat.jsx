import React from "react";
import { Link } from "react-router";
import ChatBox from "./ChatBox"
const Chat = () => {
  return (
    <div>
      <Link to="/chat">
        <button className="w-36 py-3 rounded-xl bg-green-500 cursor-pointer text-white mx-auto">
          Chat
        </button>
      </Link>
    </div>
  );
};

export default Chat;
