
import LoadingScreen from "../modules/LoadingScreen";
/* import InnerCirkel from 'react-svg-loader!/assets/inner-cirkel.svg';
 */function ResAnimation(props) {
    
    if(!props){
        console.log("no props");
       return <div></div>
    }


 
/* console.log(event) */
  return (
   <div className="res-animation">

        <div className="outer-cirkel" >{/* <img src="./assets/outer-cirkel.svg" alt="" /> */}</div>
        
        <div className="inner-cirkel">{/* <img src="./assets/inner-cirkel.svg" alt="" /> */}</div>
    
   </div>
  )
}

export default ResAnimation;

