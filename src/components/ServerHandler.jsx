
import LoadingScreen from "../modules/LoadingScreen";
import ResAnimation from "../modules/ResAnimation"
import { useState, useEffect, useRef } from 'react';
import GetDate from "../modules/GetDate"
function ServerHandler(props) {
    
    if(!props.data){
        console.log("no props");
       return <div><LoadingScreen></LoadingScreen></div>
    }
       const [server, setServer] = useState({}); // Set rowData to Array of Objects, one Object per Row
 
       useEffect(() => {
      setServer(props.data)
      }, [props]);

/* console.log(event) */
  return (
   <article className="server" id={server.id}>
     <div className="res-animation-wrapper">
       <ResAnimation></ResAnimation>
     </div>
     <h2 className="server-lastresponsetime" data-field="response">{server.lastresponsetime} ms</h2>
   
    <h2 className="server-status" data-field="status">{server.status}</h2>
    <h2 className="server-name" data-field="site">{server.name}</h2>
    <h2 className="server-hostname" data-field="host">{server.hostname}</h2>
    <h2 className="server-type" data-field="type">{server.type}</h2>
    <h2 className="server-resolution" data-field="resolution">{server.resolution}</h2>
    <h2 className="server-resolution" data-field="created">{<GetDate timeCreated={server.created}></GetDate>}</h2>

   </article>
  )
}

export default ServerHandler;

