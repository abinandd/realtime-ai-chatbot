import React from "react";
import Chat from "./Chat";
const Body = () => {
  return (
    <div className="bg-[#121317] h-screen flex flex-col justify-center">
      <h1 className="text-5xl text-center text-green-400 ">GemChat AI</h1>
      <p className="p-6 md:px-12 lg:px-14 xl:px-96 text-center text-gray-200">
        🧠 GemChat AI Chat Application A real-time chat application that
        allows users to interact with an AI assistant powered by OpenAI or
        Gemini
      </p>
      <p className="text-gray-200 text-center">Powerd By Gemini API</p>
      <div className="flex justify-center mt-10">
        <Chat />
      </div>
    </div>
  );
};

export default Body;
