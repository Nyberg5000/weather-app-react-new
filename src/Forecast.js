import axios from "axios";
import React, { useState } from "react";
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
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="Forecast-day">Mon</div>
            <div className="Forecast-icon">☀</div>
            <span className="Forecast-min-temp">5° </span>
            <span className="Forecast-max-temp">
              20° {forecast[0].temp.max}{" "}
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `6564272724482451c8ea4a6b9bde60dd`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let url = `api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return null;
  }
}
