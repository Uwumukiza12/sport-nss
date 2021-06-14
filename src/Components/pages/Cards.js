import React from 'react'
import CardItem from './CardItem';
import './cards.css'

function Cards() {
   return (
      <div className="cards">
         <h4>Check out the Best sports Images</h4>
         <div className="cards-container">
            <div className="cards-wrap">
               <ul className="cards-items">
                  <CardItem 
                  src='images/image1.jpg'
                  text='Explore the sport of Rwandan schools wherever you are!'
                  label='Stadium'
                  path='/Football'
                  />
               
                   <CardItem 
                  src='images/image5.jpg'
                  text='Explore the sport of Rwandan schools wherever you are!'
                  label='Others'
                  path='/Basketball'
                  />
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Cards
