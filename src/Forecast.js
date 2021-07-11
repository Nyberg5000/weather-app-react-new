import Axios from "axios";
import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response.data);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (oneDayForecast, index) {
            if (index < 5)
              return (
                <div className="col">
                  <ForecastDay data={oneDayForecast} />
                </div>
              );
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "6564272724482451c8ea4a6b9bde60dd";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    Axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
