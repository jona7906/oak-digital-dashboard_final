import dataHandler from "./modules/dataHandler"
import { useState, useEffect, useRef } from 'react';
import "./styles/App.scss"

import DashboardView from './components/DashboardView';

import Header from './components/Header';



function App() {
 
  const [fullData, setData] = useState([]);
    useEffect(() => {
      const updateData = async () => {
        const response = await fetch ("https://oak-digital-proxy-server.herokuapp.com")
        const data = await response.json()
        setData(data)
      }
      updateData()
      const interval = setInterval(updateData, 5000);
      return () => clearInterval(interval);
    }, []);


    let checksHandled = [];
    if(fullData.checks){
      
            let serverChecks = [...fullData.checks];

      checksHandled = [...dataHandler(serverChecks)];
     
  }


  return (
    <div className="App">
      
      <Header/>
      <DashboardView checksData={checksHandled}></DashboardView>
    
    </div>
  )
}

export default App
