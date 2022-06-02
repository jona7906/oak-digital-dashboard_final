import LoadingScreen from "../modules/LoadingScreen";
import ServerHandler from "./ServerHandler"
import Weather from "./Weather"
import Calendar from "./Calendar"

import { useState, useEffect, useRef } from 'react';
function DashboardView(props) {
 
   if(!props.checksData){
     console.log("no props");
    return <div><LoadingScreen></LoadingScreen></div>
 }

 const [serverData, setServerData] = useState([]); // Set rowData to Array of Objects, one Object per Row
 
 useEffect(() => {
setServerData(props.checksData)
}, [props.checksData]);


   const [day, setDay] = useState(0);
    useEffect(() => {
      const updateDay = () => {
     if(day<5){
        setDay(day + 1)
      }else{setDay(0)}
      }
   
      const interval = setInterval(updateDay, 1000);
      return () => clearInterval(interval);
    }, [props]);

    return (
      <div className="dashboard-container">
      <div className="weather-container">
         <Weather/>
         </div>
      <div className="calendar-container">
         <Calendar calendarDay={day}/>
         </div>
      <div className="server-container"> {serverData.map((server)=><ServerHandler data={server}/>)}</div>
      </div>  
      )
   }
    
    export default DashboardView;
    