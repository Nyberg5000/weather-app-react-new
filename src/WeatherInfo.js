import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6 city-column">
          <h1>{props.data.city} </h1>
          <div className="date">
            <p>
              <FormatDate date={props.data.date} />
            </p>
          </div>
        </div>
        <div className="col-6 temperature-column">
          <div className="img-temp">
            <WeatherIcon code={props.data.weather[0].icon} />
            <WeatherTemperature celsius={props.data.temperature} />
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
