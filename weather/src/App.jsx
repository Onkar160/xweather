import styles from "./App.module.css";
import { useState } from "react";
import WeatherCard from "./components/weatherCard/WeatherCard";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [isLoading, setLoading] = useState(false);
  const key = "a424d59c8ab740f897175959253010";

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    setWeatherData(null);
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data.current);
        setWeatherData(data.current);
        setLoading(false);
      })
      .catch((error) => {
        // console.log(error);
        setLoading(false);
        alert("Error: ", error);
      });
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={fetchWeather}>
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleInput}
            required
          />
          <button type="submit">Search</button>
        </form>
        <div className={styles["weather-cards"]}>
          {isLoading ? (
            <p className={styles.loading}>Loading data...</p>
          ) : weatherData ? (
            <>
              <WeatherCard
                heading={"Temperature"}
                para={`${weatherData.temp_c}°C`}
              />
              <WeatherCard
                heading={"Humidity"}
                para={`${weatherData.humidity}%`}
              />
              <WeatherCard
                heading={"Condition"}
                para={`${weatherData.condition.text}`}
              />
              <WeatherCard
                heading={"Wind Speed"}
                para={`${weatherData.wind_kph} kph`}
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
