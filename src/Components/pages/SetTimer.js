import React, {useEffect, useState} from 'react'

function SetTimer() {
   const calculateTimeleft = ()=>{
      let year = new Date().getFullYear();
      const difference = +new Date(`${year}-10-1`)- +new Date();
      let timeLeft = {};
      if(difference>0){
         timeLeft = {
            days: Math.floor(difference / (1000*60*60*24)),
            hours: Math.floor((difference / (1000*60*60*24))%24),
            minutes: Math.floor((difference / 1000/60) %60),
            seconds:Math.floor((difference / 1000)%60)
         };
      }
      return timeLeft;
   };
   const [timeLeft, setTimeLeft] = useState(calculateTimeleft());
   const [year] = useState(new Date().getFullYear());

   useEffect(()=>{
      setTimeout(()=>{
         setTimeLeft(calculateTimeleft());
      }, 1000);
   });
   const timerComponets= [];
   Object.keys(timeLeft).forEach((interval)=>{
      if(!timeLeft[interval]){
         return;
      }
      timerComponets.push(
         <span>
            {timeLeft[interval]} {interval} {" "}
         </span>
      );
   });
   return (
      <div>
         <h1>{year}</h1>
         <h2> {timerComponets.length ? timerComponets : <span>Time is up</span> } </h2>
      </div>
   )
}

export default SetTimer
