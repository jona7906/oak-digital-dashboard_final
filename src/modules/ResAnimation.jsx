
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
function styleAnimation(restime){
const res = restime;
let spinningAnima = {};

if(res<700){

  spinningAnima = {
    animation: `spinning ${res/1000}s infinite linear reverse`,
    background: `conic-gradient(from 40deg, rgb(72,202,149, 0.279), rgb(106, 106, 106) ${1*res/10}%)`,
  }
return spinningAnima;
} if(res>=700 && res<1000){
  spinningAnima = {
    animation: `spinning ${res/1000}s infinite linear reverse`,
    background: `conic-gradient(from 40deg, rgb(230,227,82, 0.279), rgb(106, 106, 106) ${1*res/10}%)`,
  }
  return spinningAnima;
}else {
  spinningAnima = {
    animation: `spinning ${res/1000}s infinite linear reverse`,
    background: `conic-gradient(from 40deg, rgb(251,105,91, 0.279), rgb(106, 106, 106) ${1*res/10}%)`,
  }
  return spinningAnima;
}


 }
/* 
 style={{animation: `spinning ${resData/1000}s infinite linear reverse`,
      background:`conic-gradient(from 40deg, rgb(72,202,149, 0.279), rgb(106, 106, 106) ${1*resData/10}%)`}} */

  return (
   <div className="res-animation">

        <div className="outer-cirkel" style={styleAnimation(resData)}>{/* <img src="./assets/outer-cirkel.svg" alt="" /> */}</div>
        
        <div className="inner-cirkel">{/* <img src="./assets/inner-cirkel.svg" alt="" /> */}</div>

        {/* <div className="background-circle"></div>  */}
    
   </div>
  )
}

export default ResAnimation;

