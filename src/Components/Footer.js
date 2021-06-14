import React from 'react';
import {Link} from 'react-router-dom'
import './footer.css'

function Footer() {
   return (
      <div>
         <div className="foote-container">
            <div className="footer-row">
               <h5>Contact us</h5>
               <ul className="contacts">

                  <li><Link className="foot-item">facebook</Link></li>
                  <li><Link className="foot-item" >Whatsapp</Link></li>
                  <li><Link className="foot-item" >Whatsapp</Link></li>
                  <li><Link className="foot-item">Twetter</Link></li>
                  <li><Link className="foot-item">Instagram</Link></li>
                  <li><Link className="foot-item">example@gmail.com</Link></li>
               </ul>
            </div>
            <div className="footer-row">
               <h5>our Team</h5>
               
            </div>
            <div className="footer-row">
               <h5>Our partners</h5>
               
            </div>
         </div>
      </div>
   )
}

export default Footer
