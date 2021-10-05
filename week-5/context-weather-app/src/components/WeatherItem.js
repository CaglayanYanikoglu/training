import React from "react";

const WeatherItem = ({ item }) => {
  const dateBuilder = (secs) => {
    let t = new Date(1970, 0, 1);
    t.setUTCSeconds(secs);
    return t;
  };
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = dateBuilder(item.dt).getDate();
  const day = days[dateBuilder(item.dt).getDay()];
  const month = months[dateBuilder(item.dt).getMonth()];
  const celcius = Math.floor(item.temp.day) + " °C";
  const desc = item.weather[0].description;
  const icon_url = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
  return (
    <>
      <div className="dayarea">
        <div className="dayarea-date">
          <span style={{marginRight:5}}>{date}</span>
          <span>{month}</span>
        </div>
        <div className="dayarea-day">{day}</div>
        <div className="dayarea-celcius">{celcius}</div>
        <img className="dayarea-icon" src={icon_url} alt="" />
        <div className="dayarea-desc">{desc}</div>
      </div>
    </>
  );
};

export default WeatherItem;
