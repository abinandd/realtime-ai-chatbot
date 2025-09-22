import React, { useState, useEffect, useRef, useContext } from "react";
import send from "../assets/send.svg";
import { io } from "socket.io-client";

const socket = io("https://realtime-ai-chatbot.onrender.com");

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottom = useRef(null);

  //automatic scrolling
  useEffect(() => {
    bottom.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  //  Handle socket messages
  useEffect(() => {
    socket.on("server", (data) => {
      setChat(data);
      setLoading(false);
    });
    // Cleanup
    return () => {
      socket.off("server");
    };
  }, []);

  //  Handle message send
  const handleMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setChat((prevChat) => [...prevChat, { sender: "user", message: input }]);
      socket.emit("client", input);
      setLoading(true);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#121317] px-0 md:px-30 lg:px-46 xl:px-88 ">
      <div className="flex-1 m-2 p-4 space-y-2 flex flex-col overflow-hidden">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`px-4 py-1 rounded-xl shadow max-w-[75%] ${
              msg.sender === "user"
                ? "bg-green-600 text-gray-100 self-end text-right"
                : "bg-[#1E2020] text-white self-start text-left"
            }`}
          >
            <div>{msg.message}</div>
            <div
              className={`text-xs xl:text-sm ${
                msg.sender === "user" ? "text-gray-300" : "text-gray-200"
              }`}
            >
              {msg?.timestamp
                ? new Date(msg.timestamp).toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })
                : "Just now"}
            </div>
          </div>
        ))}
        {loading && (
          <div className="self-start text-left bouncing-dots bg-[#1E2020] px-4 py-2 rounded-xl shadow">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <div ref={bottom} />
      </div>

      {/* input area */}
      <div className="mx-4 mb-6">
        <form
          className="flex items-center rounded-full p-2.5 pl-4 pr-2 border-white bg-[#1E2020]"
          onSubmit={handleMessage}
        >
          <input
            type="text"
            className="flex-1 outline-none placeholder:text-[#B3B3B3] caret-green-500 text-[#E6E6E6]"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-full bg-gray-200 cursor-pointer"
          >
            <img className="w-7" src={send} alt="send" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
