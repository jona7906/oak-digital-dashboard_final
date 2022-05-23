 import React, { useEffect, useState } from "react";

 export default function Weather(){
    useEffect(()=>{
        const script = document.createElement('script');
        script.src = "https://srv2.weatherwidget.org/js/?id=ww_93705570411b1";
        script.async = true;
        document.body.appendChild(script);
        return ()=>{
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div id="ww_93705570411b1" v='1.20' loc='id' a='{"t":"horizontal","lang":"da","ids":["wl1596"],"cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","sl_sot":"celsius","sl_ics":"one_a","font":"Arial","el_phw":3}'>Weather Data Source: <a href="https://wetterlabs.de/wetter_kopenhagen/" id="ww_93705570411b1_u" target="_blank">Wetter Kopenhagen</a></div>
    )
 }

// export default function Weather() {
//   const [lat, setLat] = useState([]);
//   const [long, setLong] = useState([]);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       navigator.geolocation.getCurrentPosition( function(position) {
//         setLat(position.coords.latitude);
//         setLong(position.coords.longitude);
//       });

//       await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&appid=9fef0470f56e191928685ef0d4859eef`)
//         .then((res) => res.json())
//         .then((result) => {
//           setData(result);
//           /* console.log(result); */
          
//         });
//       };
//       fetchData();
//     }, [lat, long]);

//     if(data.length>1){
//       console.log(data)
//     }

//   return (
//       <h3 className="degrees">{((!data ? "no data yet" : ()=>data.main.temp))}</h3>
//   );
// }

// Den rigtige fetch med skjult URL/API - "process not defined" ERROR
// ${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}