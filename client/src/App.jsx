import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Chat from "./components/Chat";

const App = () => {
  return (
    <div className="flex flex-col w-full h-screen p-2 justify-between">
      <Header />
      <Body />
      <Chat/>
    </div>
  );
};
export default App;
