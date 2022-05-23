import LoadingScreen from "../modules/LoadingScreen";
import StatusIcon from "../modules/StatusIcon";
import PostResData from '../modules/PostResData';
import ServerHandler from "./ServerHandler"
import Weather from "./Weather"

import { useState, useEffect, useRef } from 'react';
function DashboardView(props) {
 
   if(!props.checksData){
     console.log("no props");
    return <div><LoadingScreen></LoadingScreen></div>
 }

 const [serverData, setServerData] = useState([]); // Set rowData to Array of Objects, one Object per Row
 
 useEffect(() => {
setServerData(props.checksData)
}, [props]);


    return (
      <div className="dashboard-container">
      <div className="weather-container">
         <Weather/>
         </div>
      <div className="calendar-container"></div>
      <div className="server-container"> {serverData.map((server)=><ServerHandler data={server}/>)}</div>
      </div>  
      )
   }
    
    export default DashboardView;
    