
import LoadingScreen from "../modules/LoadingScreen";
import ResAnimation from "../modules/ResAnimation"
import { useState, useEffect, useRef } from 'react';
import GetDate from "../modules/GetDate"
/* import Wave from ".assets/wave.svg" */


function ServerHandler(props) {
    
    if(!props.data){
        console.log("no props");
       return <div><LoadingScreen></LoadingScreen></div>
    }
       const [server, setServer] = useState({}); // Set rowData to Array of Objects, one Object per Row
 
       useEffect(() => {
      setServer(props.data)
      }, [props]);

      //    if(server.lastresponsetime <= 200) {
      //    this.style.color = "green";
      // } 
      //    else if(server.lastresponsetime < 1000 || server.lastresponsetime > 200) {
      //    this.style.color = "yellow";
      // } 
      //    else if(server.lastresponsetime >= 1000){
      //    this.style.color = "red";
      // }
      

  return (
   <article className="server" id={server.id}>
     <div className="res-animation-wrapper">
        <ResAnimation restime={server.lastresponsetime}></ResAnimation> 
     </div>
     <div className="data-wrapper">
     <h2 className="server-created" data-field="created">{<GetDate timeCreated={server.created}></GetDate>}</h2>
     <h2 className="server-resolution" data-field="resolution">{server.resolution}</h2>
    
    
     
     <h2 className="server-lastresponsetime" data-field="response">{server.lastresponsetime} ms</h2>
     
     <div className="bottom-box">{/* <Wave></Wave> */}
  {/*    <svg xmlns="http://www.w3.org/2000/svg" width="1148" height="361" viewBox="0 0 1148 361">
      <g id="Artboard_1" data-name="Artboard - 1" clip-path="url(#clip-Artboard_1)">
      <path id="Path_1" data-name="Path 1" d="M1665,455.539s-38.575-38.107-84.614-58.114-99.54-21.913-99.54-21.913-61.009-.888-111.815,20.23-87.983,66.692-87.983,66.692-37.914,44.347-83.767,68.607-104.8,24.967-104.8,24.967-55.993.423-102.855-22.134-82.268-68.488-82.268-68.488-36.637-43.205-86.573-66.069-113.767-23.979-113.767-23.979-56.306.231-103.806,20.432-86.193,60.372-86.193,60.372v261.6H1665Z" transform="translate(-517 -357)" fill="#48ca95"/>
  </g>
</svg> */}
     </div>
     
    <h2 className="server-status" data-field="status">{server.status}</h2>
    
    <h2 className="server-name" data-field="site">{server.name}</h2>
    <h2 className="server-hostname" data-field="host">{server.hostname}</h2>
    <h2 className="server-type" data-field="type">{server.type}</h2>
   
   </div>
   </article>
  )
}

export default ServerHandler;

