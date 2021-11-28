//*api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
import React, { useEffect, useState } from "react";
import { usePosition } from "use-position";

import axios from "axios";
import HavaDurumu from "./components/HavaDurumu";

const App = () => {
  const [weather, setWeather] = useState();

  const { latitude, longitude } = usePosition();

  const getweatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];
    // console.log(lang);
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`
      );
      setWeather(data);
    } catch {
      alert("Veri alınırken hata oluştu.");
    }
  };

  useEffect(() => {
    latitude && longitude && getweatherData(latitude, longitude);
  }, [latitude, longitude]);
  //   console.log(latitude, longitude, weather);

  return (
    <div>
      <h2>Hava Durumu</h2>
      <HavaDurumu weather={weather} />
    </div>
  );
};

export default App;
