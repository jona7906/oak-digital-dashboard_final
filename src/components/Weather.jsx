import React, { useEffect, useState } from "react";

export default function Weather() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&appid=9fef0470f56e191928685ef0d4859eef`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        // function getTemperature(){
        //   let degree = result.main.temp;
        //   return degree;
        // }
        let weatherDesc = result.weather[0];
        console.log("Weather Description:", weatherDesc.main);
      });
    }
    fetchData();
  }, [lat,long])
  
  return (
    <div className="Weather">
      <div className="degrees"></div>
    </div>
  );
}


// Den rigtige fetch med skjult URL/API - "process not defined" ERROR
// ${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}