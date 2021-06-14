import React from 'react';
import {Link} from "react-router-dom";
import './sports.css'

function SportsHeader() {
   return (
      <div className="sport-menu">

         <ul className="sport-menu-bar">
            <li className="sports-item">
               <Link to='/Football' className="sports-item-link">FootBall</Link>
            </li>

            <li className="sports-item">
               <Link to="/Basketball" className="sports-item-link">BasketBall</Link>
            </li>

            <li className="sports-item">
               <Link className="sports-item-link">HandBall</Link>
            </li>
            <li className="sports-item">
               <Link className="sports-item-link">VolleyBall</Link>
            </li>

            <li className="sports-item">
               <Link className="sports-item-link">Athletism</Link>
            </li>

            <li className="sports-item">
               <Link className="sports-item-link">PingPong</Link>
            </li>

            <li className="sports-item">
               <Link className="sports-item-link">Kung-fu-Karatte</Link>
            </li>

         </ul>
         
      </div>
   )
}

export default SportsHeader
