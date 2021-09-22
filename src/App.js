import React from "react";
import "./App.css";
import Body from "./Body";
import Title from "./Title";

const App = () => {
  return (
    <div className="app">
      <div className="app_top">
        {/* Title Component */}
        <Title />
      </div>
      <div className="app_bottom">
        {/* Body Component */}
        <Body />
      </div>
    </div>
  );
};

export default App;
