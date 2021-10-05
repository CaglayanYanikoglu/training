import React, { useContext, useState } from "react";
import WeatherContext from "../context/WeatherContext";
const Content = () => {
  const { currentCity, setCurrentCity } = useContext(WeatherContext);
  const [value, setValue] = useState("");
  const handleChange = (city) => {
    if (city === "Ankara") {
      setValue(city);
      setCurrentCity({
        name: "Ankara",
        lat: 36.88414,
        long: 30.70563,
        image:
          "https://images.unsplash.com/photo-1611034542458-85aace78c787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
      });
    } else if (city === "Izmir") {
      setValue(city);
      setCurrentCity({
        name: "Izmir",
        lat: 38.41885,
        long: 27.12872,
        image:
          "https://images.unsplash.com/photo-1583062482441-aa1124142248?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
      });
    } else if (city === "Adana") {
      setValue(city);
      setCurrentCity({
        name: "Adana",
        lat: 37.0,
        long: 35.3213333,
        image:
          "https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//GezilecekYer/20190111110947922_THK%20ORHAN%20OZGULBAS%20ADANA%20Seyhan%20Nehri%20Taskopru%20logolu.jpg?format=jpg&quality=50",
      });
    } else {
      setValue(city);
      setCurrentCity({
        name: "Istanbul",
        lat: 41.00527,
        long: 28.97696,
        image:
          "https://www.dreamofholiday.com/userFiles/bolgeler/950205793_1588435982.jpg",
      });
    }
  };

  return (
    <div className="content">
      <img className="content-image" src={currentCity.image} alt="" />
      <div className="content-body">
        <div className="content-body-title">
          {currentCity.name} 8 days weather forecast
        </div>
        <select
          className="content-select"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="Istanbul">Istanbul</option>
          <option value="Ankara">Ankara</option>
          <option value="Izmir">Izmir</option>
          <option value="Adana">Adana</option>
        </select>
      </div>
    </div>
  );
};

export default Content;
