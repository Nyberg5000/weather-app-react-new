import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <h1>Copenhagen</h1>
            <p id="date">Friday 15:14</p>
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
                Partly sunny
              </li>
              <li>
                {" "}
                Windspeed: <span id="wind"> 10 </span> m/s
              </li>
              <li>
                Humidity: <span id="humidity"> 60</span>%{" "}
              </li>
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
}
