import React, {useState, useEffect} from 'react'


function CenterstOfTeams() {
   const [data, setData]  = useState([]);
   useEffect(()=>{
      getData();
      },[]);
   const getData=()=>{
      fetch('./data.json', {
         headers:{
            'content-Type':'application/json',
            'Accept': 'application/json'
         }
      })
      .then((response)=>{
         console.log(response)
         return response.json();
      })
      .then((data)=>{
            setData(data)
      })
   }
   return (
      <div>
         {data? data: data.map((item)=><p>{item.centers} </p>)}
      </div>
   )
}

export default CenterstOfTeams
