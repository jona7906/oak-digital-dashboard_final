
import "../styles/App.scss"
import CalendarData from "../modules/CalendarData";
import {useEffect, useState} from "react"
 

function Calendar(props){
/*     const calendar = [...CalendarData()];
 console.log(calendar[0]["Big room"].bookings[0].date);
 console.log(calendar[0]["Big room"].bookings[0].day);
 console.log(calendar[0]["Big room"].bookings[0].info);
     */
/*  const [day, setDay] = useState(0); */
/* 
 console.log(calendar[0]["Small Room"].bookings[0].date);
 console.log(calendar[0]["Small Room"].bookings[0].day);
 console.log(calendar[0]["Small Room"].bookings[0].info);  */

 let calendar = CalendarData()

 let calendarAnimation = {
    animation: `slideIn 2s 1 ease-in foward`
    
   /*  background: `conic-gradient(from 180deg, rgb(251,105,91), rgb(251,105,90, 0.279) 100%)` */,   
 }
 return(
     <div className="calendar-wrapper">
     <div style={calendarAnimation} className="todaysDate">
         <h1>{calendar[0]["Big room"].bookings[props.calendarDay].day} {calendar[0]["Big room"].bookings[props.calendarDay].date}</h1>
         </div>
     
        <div className="calendar-booking"> 
        <div className="bigRoom">
            <h2>Big Room</h2>
            <div className="schedule">
      {calendar[0]["Big room"].bookings[props.calendarDay].info.map((booking)=>
        <div className="booking">
        <h3>{booking.time}: {booking.company} | {booking.note}</h3>
        </div>
    )}
        </div>
        </div>
        
        <div className="smallRoom">
        <h2>Small Room</h2>
        <div className="schedule">
      {calendar[1]["Small Room"].bookings[props.calendarDay].info.map((booking)=>
        <div className="booking">
        <h3>{booking.time}: {booking.company} | {booking.note}</h3>
        </div>
    )}
        </div>
        </div>

        <div className="kitchen">
        <h2>Kitchen</h2>
        <div className="schedule">
      {calendar[2]["Kitchen"].bookings[props.calendarDay].info.map((booking)=>
        <div className="booking">
        <h3>{booking.time}: {booking.company} | {booking.note}</h3>
        </div>
    )}
        </div>
        </div>

        </div>
     
         
        </div>
    )
    }

export default Calendar;