
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


      console.log(server);
    function changeBottomBox(status){
        let boxImg = {};
        
        if(status === "up"){

          boxImg = {
             backgroundImage: `url("/assets/wave.svg")`,
            /*   backgroundSize: `${server.lastresponsetime/10}vw`,
              backgroundRepeat: "no-repeat", */
          }

        return boxImg
      }  
     

    
      
      if(status === "paused"){

        boxImg = {
           backgroundImage: `url("/assets/paused-wave.svg")`
        }

      return boxImg
    }

      if(status === "down"){
        
        boxImg = {
           backgroundImage: `url("/assets/down-wave.svg")`
        }

      return boxImg
    }


      }
      //    if(server.lastresponsetime <= 200) {
      //    this.style.color = "green";
      // } 
      //    else if(server.lastresponsetime < 1000 && server.lastresponsetime > 200) {
      //    this.style.color = "yellow";
      // } 
      //    else if(server.lastresponsetime >= 1000){
      //    this.style.color = "red";
      // }

      function responseTimeHandler(res, status){
      if(status === "up"){
      return <h2> {res} ms</h2>;
      }if(status === "down"){
        return <img src="/assets/down-icon.svg" alt="" />;
      }
      if(status === "paused"){
        return <img src="/assets/pause-icon.svg" alt="" />;
      }
      }
  return (
   <article className="server" id={server.id}>
     <div className="res-animation-wrapper">
        <ResAnimation restime={server.lastresponsetime} status={server.status}></ResAnimation> 
     </div>
     <div className="data-wrapper">
     <h2 className="server-created" data-field="created">{<GetDate timeCreated={server.created}></GetDate>}</h2>
     <h2 className="server-resolution" data-field="resolution">{server.resolution}</h2>
    
    
     
     <div className="server-lastresponsetime" data-field="response">{responseTimeHandler(server.lastresponsetime, server.status)}</div>
     
     <div className="bottom-box" style={changeBottomBox(server.status)}>
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

