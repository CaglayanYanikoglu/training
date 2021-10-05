import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import WeatherItem from "./WeatherItem";
import Content from "./Content";
const Weather = () => {
  const { data } = useContext(WeatherContext);

  return (
    <div className="container">
      <Content />
      <div className="daycontainer">
        {data !== null &&
          data.daily.map((item, index) => (
            <WeatherItem key={index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Weather;
