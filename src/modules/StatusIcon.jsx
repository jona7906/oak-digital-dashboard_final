import "../styles/App.scss"
import React from "react";
import * as ReactDOM from 'react-dom/client';

function StatusIcon(props) {
  function findStatus(){
    if(props.status === "up"){
     return "../images/server-up-icon.svg"
      } else if(props.status === "paused"){
        return "../images/pause.svg"
      } else{
        return "../images/server-down-icon.svg"
          }
        }

      return (

        <div className="statusIcon"><img src={findStatus()} /></div>
      );
   
  }
  
  export default StatusIcon;
  