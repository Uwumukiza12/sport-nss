import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Teams from "./Teams"
import "./foot.css"
import Teamedata from './Teamedata';
import SetTimer from '../SetTimer';
import TeamsAndTournem from './TeamsAndTournem'
// import CenterstOfTeams from '../CenterstOfTeams';

const teams = [{
  id: 1,
  teamname: "Rambura-fille-FC",
  teamschool: "GS-Rambura Fille",
  date: "11.March.2012",
  reminder: true,
  players: [
    {
    id: 2,
    name: 'Leo Messi',
    kitNo: "1"
  },
    {
    id: 1,
    name: 'Jimi Gatete',
    kitNo: "1"
  },
    {
    id: 3,
    name: 'Ronaldo',
    kitNo: "1"
  }
  ]
},
{
  id: 2,
  teamname: "Rambura-garcon-FC",
  teamschool: "GS-Rambura Garcon",
  date: "11.March.2021",
  reminder: true,
  players: [
    {
    id: 2,
    name: 'Ngolo Kante',
    kitNo: "1"
  },
    {
    id: 1,
    name: 'Louis Suarez',
    kitNo: "1"
  },
    {
    id: 3,
    name: 'Pogba Boum',
    kitNo: "1"
  }
  ]
},
{
  id: 3,
  teamname: "St-Raphael-sports Association",
  teamschool: "GS St Raphael",
  date: "11.March.2021",
  reminder: true,
  players: [
    {
    id: 2,
    name: 'Sanhez',
    kitNo: "1"
  },
    {
    id: 1,
    name: 'Hazard',
    kitNo: "1"
  },
    {
    id: 3,
    name: 'Kalim Benzema',
    kitNo: "1"
  }
  ]
},]


const Football = () => {
  const [count, setCount] = useState(0);
  const [currentTeam, setCurrentTeam] = useState(null);

 useEffect(()=>{
   setCurrentTeam(teams[0]);
 },[])

 const handleChangeState = (id)=>{
    const current = teams.filter(team=>team.id == id);
    setCurrentTeam(current[0]);
 }
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  

  return (
    <Router>
      <div className="foot-container">
        <div className="foot-row-1">
          <h1>Top tournments</h1>
          <TeamsAndTournem />
        </div>
        <div className="foot-row-2">
          <h1>fixtures</h1>
          <div className="foot-row-2-col">
            <Teams 
            handleChangeState={handleChangeState}
            teams={teams} />
          </div>

        </div>
        <div className="foot-row-3">
          <div className="foot-row-3-col">
            <h1>Team Details</h1>
           {currentTeam && <Teamedata 
            teamData={currentTeam}
            />}
          </div>
          <hr />
          <div className="foot-row-3-col">
            <h1>FEATURED MATCH</h1>
            <div className="match">
              <div className="team1">
                <h5>St Aloys</h5>
                <p><button onClick={handleIncrement}>+</button> <strong>{count}</strong> </p>
              </div>
              <div className="timer">
                <SetTimer />
              </div>
              <div className="team2">
                <h5>St Andrew</h5>
                <p><button onClick={handleIncrement}>+</button> <strong>{count}</strong> </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="foot-row-3-col">
            <h1>TOP PLAYERS</h1>
            <div className="players-list">
              {teams.map((player) => (
                <div className="player-1">
                  <p>{player.name}</p>
                  {/* <p>{player.kitNo}</p>
                  <p>{player.status}</p>
                  <p>{player.team}</p> <hr /> */}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </Router>
  )

}
export default Football;