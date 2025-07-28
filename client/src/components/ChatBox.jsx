import React, { useState } from "react";
import Logo from "../assets/send-icon.png"
const ChatBox = () => {
  const [input, setInput] = useState("");
  const [message,setMessage] =useState("")

  const handleMessage=(e)=>{
    //implement enter to send
    e.preventDefault()
    setMessage(input);
  }
  return (
    <div className="flex flex-col h-screen w-full bg-gray-200">

      {/* Chat messages area */}
      <div className="flex-1 border m-2 overflow-y-auto">
        
      </div>

      {/* Input at the bottom */}
      <div className="px-4 pb-6">
        <form className="flex items-center  rounded-full pl-2 pr-1 py-1 bg-white">
          <input
            type="text"
            className="flex-1 outline-none p-4"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className=" text-white px-1 py-1 rounded-full bg-gray-200 cursor-pointer"
            onClick={handleMessage}
          >
            <img src={Logo} alt="send" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
