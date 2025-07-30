import React, { useState, useContext } from "react";
import { Link } from "react-router";

const Chat = () => {
  // const { setIsOpen ,isOpen } = useContext(Value);
  // console.log(isOpen)
  return (
    <div>
      <Link to="/chat">
        <button
          className="w-36 py-3 rounded-xl bg-green-500 cursor-pointer text-white mx-auto hover:bg-green-600"
          // onClick={() => setIsOpen(!isOpen)}
        >
          Chat
        </button>
      </Link>
    </div>
  );
};

export default Chat;
