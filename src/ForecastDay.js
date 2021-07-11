import React from "react";

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
      <div className="Forecast-icon"> {props.code.icon} </div>
      <span className="Forecast-min-temp">
        {Math.round(props.data.temp.min)}°{" "}
      </span>
      <span className="Forecast-max-temp">
        {Math.round(props.data.temp.max)}°{" "}
      </span>
    </div>
  );
}
