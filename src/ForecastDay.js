import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }
  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <div className="Forecast-icon">
        {" "}
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <span className="Forecast-min-temp">
        {Math.round(props.data.temp.min)}°{" "}
      </span>
      <span className="Forecast-max-temp">
        {Math.round(props.data.temp.max)}°{" "}
      </span>
    </div>
  );
}
