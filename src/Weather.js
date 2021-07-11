import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ load: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      load: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      windspeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      coordinates: response.data.coord,
    });
  }

  function search() {
    let apiKey = `6564272724482451c8ea4a6b9bde60dd`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityUpdate(event) {
    setCity(event.target.value);
  }

  if (weatherData.load) {
    return (
      <div className="Weather">
        <div className="weather-wrapper">
          <form className="mb-3" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Enter name of city"
                  autoFocus="on"
                  autoComplete="off"
                  onChange={handleCityUpdate}
                />
              </div>
              <div className="col-4">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <Forecast coordinates={weatherData.coordinates} />
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
    search();
    return "loading temperature...";
  }
}
