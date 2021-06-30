import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6 city-column">
          <h1>{props.data.city} </h1>
          <p className="date">
            <FormatDate date={props.data.date} />
          </p>
        </div>
        <div className="col-6 temperature-column">
          <div className="img-temp">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="icon"
              className="weather-icon"
            />
            <span className="city-temp">
              {Math.round(props.data.temperature)}°C{" "}
            </span>
          </div>

          <ul className="weather-conditions">
            <li className="weather-description">{props.data.description}</li>
            <li> Windspeed: {Math.round(props.data.windspeed)} m/s</li>
            <li>Humidity: {props.data.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
