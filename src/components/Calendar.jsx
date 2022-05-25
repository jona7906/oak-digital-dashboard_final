import React from "react";
import "../styles/App.scss"
import CalendarData from "../modules/CalendarData";

 

function Calendar(){
    const calendar = [...CalendarData()];
 console.log(calendar[0]["Big room"].bookings[0]["monday"]);
    
 return(
        <div className="calendar-booking"> <h1>Calendar</h1>
        {calendar[0]["Big room"].bookings[0]["monday"].map((booking)=>
        <div className="booking">
      {console.log(booking.company)}
         <h2>COMPANY: {booking.company}</h2>
         {console.log(booking.note)}
            <h2> {booking.note}</h2>
            {console.log(booking.time)}
         <h2>TIME: {booking.time}</h2>
         
         </div>
 )}
           
        </div>
        )
    }

export default Calendar;