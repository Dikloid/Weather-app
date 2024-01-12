import './App.css';
import Wrapper from "./components/Wrapper";
import React from "react";
import clouds from "./media/clouds.png"

function App() {
  const hours = new Date().getHours();
  return (
      <>
          <div className={`${hours > 5 && hours < 21 ? 'day' : "night"}`}>
            <Wrapper/>
          </div>
          <img src={clouds} alt="" className="clouds"/>
      </>

  );
}

export default App;
