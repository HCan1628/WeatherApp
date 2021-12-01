import React from "react";

function HavaDurumu(props) {
  const { weather } = props;

  if (!weather) {
    return <p>Yükleniyor....</p>;
  }
  return (
    <div>
      <h3>{weather.name.toUpperCase()}</h3>
      <h4>
        {weather.weather
          .map((data) => data.description)
          .join(",")
          .toUpperCase()}
      </h4>
      <p>{Math.floor(weather.main.temp)} °C</p>
      <p>{new Date(weather.dt * 1000).toLocaleString()}</p>
    </div>
  );
}

export default HavaDurumu;
