
import LoadingScreen from "../modules/LoadingScreen";
import {useState, useEffect} from "react"
/* import InnerCirkel from 'react-svg-loader!/assets/inner-cirkel.svg';
 */function ResAnimation(props) {
    
    if(!props){
        console.log("no props");
       return <div></div>
    }

    /* console.log(props.restime) */

    const [resData, setResData] = useState(""); 
    useEffect(() => {
   setResData(props.restime)
   }, [props]);

 /* 
 console.log(resData)  */
  return (
   <div className="res-animation">

        <div className="outer-cirkel" style={{animation: `spinning ${resData/1000}s infinite linear reverse`,
      background:`conic-gradient(from 40deg, rgb(72,202,149, 0.279), rgb(106, 106, 106) ${1*resData/10}%)`}}>{/* <img src="./assets/outer-cirkel.svg" alt="" /> */}</div>
        
        <div className="inner-cirkel">{/* <img src="./assets/inner-cirkel.svg" alt="" /> */}</div>

        {/* <div className="background-circle"></div>  */}
    
   </div>
  )
}

export default ResAnimation;

