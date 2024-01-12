import './App.css';
import Wrapper from "./components/Wrapper";
import React from "react";
import clouds from "./media/clouds.png"
import CurrentWeather from "./components/current-wheather/current-weather";

function App() {
  const hours = new Date().getHours();
  return (
      <>
          <div className={`${hours > 5 && hours < 21 ? 'day' : "night"}`}>
            DEBUG INFO: it's {hours} o'clock now
            <Wrapper/>
            <CurrentWeather/>
          </div>
          <img src={clouds} alt="" className="clouds"/>
      </>

  );
}

export default App;
