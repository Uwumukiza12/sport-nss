import React from 'react'

function Teamedata({teamData}) {
  

   return (
      <div>
          {teamData.players.map((player) =>( <h4 className="teams-list" key={player.id}>
          {player.name} <br />
          {player.kitNo}
          </h4>
          ))}
      </div>
   )
}

export default Teamedata
