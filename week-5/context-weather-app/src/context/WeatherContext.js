import { createContext, useContext, useState, useEffect } from "react";
import { AxiosBase } from "../config/AxiosBase";
const API_KEY = process.env.REACT_APP_API_KEY;
export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [currentCity, setCurrentCity] = useState({
    name: "Istanbul",
    lat: 41.00527,
    long: 28.97696,
    image:
      "https://www.dreamofholiday.com/userFiles/bolgeler/950205793_1588435982.jpg",
  });

  useEffect(() => {
    AxiosBase.get(
      `/onecall?lat=${currentCity.lat}&lon=${currentCity.long}&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.data)
      .then((data) => setData(data));
  }, [currentCity]);

  const values = {
    data,
    setData,
    currentCity,
    setCurrentCity,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
