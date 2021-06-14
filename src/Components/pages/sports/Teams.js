import React, {useState, useEffect} from 'react';
import "./teams.css"
import {Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Teamedata from './Teamedata';
import Odds from "./Odds"

function Teams({teams, handleChangeState}) {
   // const onClick = event => {
   //    console.log(event.target.dataset.teamname)
   //  }
   
   const champions = [
      {
         id:1,
         team1: "Rambura fille",
         team2:"st Raphael"
      },
      {
         id:2,
         team3: " AS st Raphael ",
         team4:"st Aloys FC"
      }
   ]

   return (
      <>
     
      <div className="container">
         <div className="row">
           
            <div className="vl"></div>
            <div className="t-list">
         {teams.map((team) =>( <h4 onClick={()=>handleChangeState(team.id)} className="teams-list" key={team.id}>
         <div className="team-logo" >
               <img src="../logo512.png" alt="t-Logo" className="t-img"/>
         </div>
             {team.teamname} <p>{team.teamschool} <hr/> 
             </p></h4>
         ))}
         </div>
         </div>
         <div className="row-1">
         <div className="live-all">
               <p>All Matches</p>
               <p>Live Matches</p>
               <div className="switch-odds">
               <Odds />
               </div>
            </div>
            <hr/>
         <Link className='distr-link'> <h4> District Tournment</h4> </Link>
         {champions.map((champ) =>(<div> 
            <hr/>
            <p>{champ.team3}</p>
            <p>{champ.team4}</p>
            <Link to="/Teamedata">Teamdetails</Link>
            </div>
         ))}
            <hr Color="red"/>
         <div className="row-1-1">
         <h4> Provencial Tournment</h4> 
         {champions.map((champ) =>(<div> 
            <hr/>
            <p>{champ.team1}</p>
            <p>{champ.team2}</p>
            </div>
         ))}
         </div>
         </div>
         </div>
        
      </>
   )
}

export default Teams
