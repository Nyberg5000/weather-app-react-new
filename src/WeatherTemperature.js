import { func } from "prop-types";
import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="Weather-temperature">
        <span className="city-temp">
          {Math.round(props.celsius)}°C|
          <a href="/" onClick={convertFahrenheit}>
            °F
          </a>{" "}
        </span>
      </span>
    );
  } else {
    return (
      <span className="Weather-temperature">
        <span className="city-temp">
          {Math.round(fahrenheit())}
          <a href="/" onClick={convertCelsius}>
            °C
          </a>
          |°F{" "}
        </span>
      </span>
    );
  }
}
