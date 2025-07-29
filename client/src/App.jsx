import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";


const App = () => {
  return (
    <div className="flex flex-col w-full h-screen  justify-between font-inter">
      <Header />
      <Body />
    </div>
  );
};
export default App;
