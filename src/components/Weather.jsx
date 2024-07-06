import { CiSearch } from "../index";
import {
  Footer,
  Header,
  TempSection,
  Highlights,
  WeatherForcast,
} from "../index";
import axios from "axios";

import { useState } from "react";

const Weather = () => {
  const [WeatherApi, setWeatherApi] = useState("");
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState("");
  const [mainUnit, setMainUnit] = useState(false);

  const handleClick = async () => {
    const key = "8fb608a91319f73e50a1afd9538b4535";

    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${key}`
    );

    const data = response.data;
    setWeatherApi(data);

    /// getData 5 days forcast weather
    const dailyForecasts = [];
    let currentDate = null;

    for (let forecast of data.list) {
      const forecastDate = new Date(forecast.dt_txt).toLocaleDateString();
      if (currentDate !== forecastDate) {
        dailyForecasts.push(forecast);
        currentDate = forecastDate;
      }
      if (dailyForecasts.length === 6) break;
      setForecasts(dailyForecasts);
    }
  };
  const activeUnit = () => {
    setMainUnit((prevUnit) => !prevUnit);
  };

  return (
    <>
      <div className="container ">
        <Header weather={WeatherApi} unit={mainUnit} active={activeUnit} />
        <section className="search__section">
          <input
            onChange={(e) => setLocation(e.target.value)}
            className="search__location"
            type="text"
            placeholder="Enter city..."
            value={location}
          />
          <button onClick={handleClick} className="search__btn">
            <CiSearch className="search__icon" />
          </button>
        </section>
        {WeatherApi && (
          <>
            <TempSection temp={WeatherApi} unit={mainUnit} />
            <Highlights highlights={forecasts} />
            <div className="weather_forcasts_container">
              {forecasts.map((forcast, index) => {
                return (
                  <WeatherForcast
                    className="col-1 bg-danger"
                    style={{ backgroundColor: "red" }}
                    key={index}
                    temp={forcast.main.temp}
                    srcImg={forcast.weather[0].icon}
                    description={forcast.weather[0].description}
                    unit={mainUnit}
                  />
                );
              })}
            </div>
          </>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Weather;
