import React, { useState, useEffect } from "react";
import Logo from "../assets/send-icon.png";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  // Listen for server messages
  useEffect(() => {
    socket.on("server", (data) => {
      setChat((prevChat) => [...prevChat, { sender: "ai", text: data }]);
    });
    
    return () => {
      socket.off("server");
    };
  }, []);

  // Handle message send
  const handleMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      socket.emit("client", input);
      setChat((prevChat) => [...prevChat, { sender: "user", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-200">
      <div className="flex-1 border m-2 overflow-y-auto p-4 space-y-2 flex flex-col">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl shadow max-w-[75%] ${
              msg.sender === "user"
                ? "bg-blue-200 self-end text-right"
                : "bg-white self-start text-left"
            }`}
          >
            <span className="text-sm">
              {msg.sender === "user" ? " You" : "AI"}
            </span>
            <div className="text-base">{msg.text}</div>
          </div>
        ))}
      </div>

      <div className="px-4 pb-6">
        <form
          className="flex items-center rounded-full pl-2 pr-1 py-1 bg-white"
          onSubmit={handleMessage}
        >
          <input
            type="text"
            className="flex-1 outline-none p-4"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="px-2 py-1 rounded-full bg-gray-200 cursor-pointer"
          >
            <img src={Logo} alt="send" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
