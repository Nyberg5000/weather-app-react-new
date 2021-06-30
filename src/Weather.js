import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormatDate from "./FormatDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ load: false });
  function handleResponse(response) {
    setWeatherData({
      load: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      windspeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }
  if (weatherData.load) {
    return (
      <div className="Weather">
        <div className="weather-wrapper">
          <form id="city-search" className="mb-3">
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  id="city-name"
                  className="form-control"
                  placeholder="Enter name of city"
                  autoFocus="on"
                  autoComplete="off"
                />
              </div>
              <div className="col-4">
                <input
                  type="submit"
                  id="search-button"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-6 city-column">
              <h1>{weatherData.city} </h1>
              <p id="date">
                <FormatDate date={weatherData.date} />
              </p>
            </div>
            <div className="col-6 temperature-column">
              <div className="img-temp">
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt="icon"
                  id="weather-icon"
                />
                <span id="city-temp">15°C</span>
              </div>

              <ul className="weather-conditions">
                <li className="weather-description" id="description">
                  Partly sunny{weatherData.description}
                </li>
                <li> Windspeed: {weatherData.windspeed} m/s</li>
                <li>Humidity: {weatherData.humidity}</li>
              </ul>
            </div>
          </div>
        </div>
        <p>
          Coded by Tammi Nyberg.{" "}
          <a
            href="https://github.com/Nyberg5000/weather-app-react-new"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced on GitHub
          </a>
        </p>
      </div>
    );
  } else {
    const apiKey = "6564272724482451c8ea4a6b9bde60dd";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading temperature...";
  }
}
