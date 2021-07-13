import React from "react";
import "./Weather.css";

export default function WeatherIcon(props) {
  return (
    <div className="Weather-icon">
      <img
        src={`https://openweathermap.org/img/wn/${props.code}@2x.png`}
        alt={props.code.description}
      />
    </div>
  );
}
