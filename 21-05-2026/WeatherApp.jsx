import React, { useState } from "react";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    // Step 1: Get coordinates
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;

    const geoResponse = await fetch(geoUrl);
    const geoData = await geoResponse.json();

    if (!geoData.results) {
      alert("City not found");
      return;
    }

    const latitude = geoData.results[0].latitude;
    const longitude = geoData.results[0].longitude;

    // Step 2: Get weather
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    setWeather(weatherData.current_weather);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 className="text-2xl mb-3 font-bold">Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border border-black p-1 mb-3"
      />

      <button onClick={getWeather} className="bg-blue-400 p-2 rounded-xl text-white ml-1 mb-3">Search</button>

      {weather && (
        <div>
          <h2 className="font-bold">Temperature: {weather.temperature}°C</h2>
          <p className="font-bold">Wind Speed: {weather.windspeed} km/h</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;