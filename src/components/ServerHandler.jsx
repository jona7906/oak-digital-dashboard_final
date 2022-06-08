
import LoadingScreen from "../modules/LoadingScreen";
import ResAnimation from "../modules/ResAnimation"
import { useState, useEffect, useRef } from 'react';
import GetDate from "../modules/GetDate"
import Warning from "./Warning"

function ServerHandler(props) {
  
 

    if(!props.data){
        console.log("no props");
       return <div><LoadingScreen></LoadingScreen></div>
    }
       const [server, setServer] = useState({}); // Set rowData to Array of Objects, one Object per Row

       const [serverWarning, setWarning] = useState(""); // Set rowData to Array of Objects, one Object per Row

      /*  let serverWarning = "none"; */
       
        useEffect(() => {
          if(server.status != props.data.status){
            console.log("not same status")
            if(props.data.status === "down"){
              setWarning("warning") 
            }
          };
        },[props.data.status])
        /*   if(server.status != props.data.status){
            
            if(props.data.status === "down"){
            console.log("its down maan")
            setWarning("warning")  
          }   
         
          }, [props.data.status]) */
          
       
       

       useEffect(() => {
      setServer(props.data)
      }, [props]);

     

     /*  console.log(server); */
    function changeBottomBox(status){
        let boxImg = {};
        
        if(status === "up"){

          boxImg = {
          
             backgroundImage: `url("/assets/wave.svg")`,
        
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

function displayWarning(){
  if(serverWarning === "warning")
  {
  return <div className="warning-wrapper"><Warning warningStatus={serverWarning}></Warning></div>
  }else{return false}}

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
  {/*  {displayWarning()} */}
   </div>
   </article>
  )
}

export default ServerHandler;

