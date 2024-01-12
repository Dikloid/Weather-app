import React from 'react';
import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather-container">
            <div className="top">
                <p className="title">Chelyabinsk</p>
                <p className="description">Sunny</p>
            </div>
            <img alt="weather" className="weather-icon" src=""/>
        </div>
    );
};

export default CurrentWeather;