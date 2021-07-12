import React from "react";

export default function WeatherIcon(props) {
  console.log(props);
  return (
    <div className="Weather-icon">
      <img
        src={`https://openweathermap.org/img/wn/${props.code}@2x.png`}
        alt={props.code.description}
      />
    </div>
  );
}
