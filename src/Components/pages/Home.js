import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button';
import './home.css'
import Cards from './Cards'

const Home = ()=>{

   return(
      <div className="home-container">
      {/* <video src="/videos/video.mp4" autoPlay loop muted></video> */}
       <h1>SCHOOL'S FOOTBALL NOW HERE</h1>
       <p>What are you wacthing for? </p>
       <div className="home-btns">
          <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTEG</Button>
       </div>
       <div className="home-cards">
          <Cards />
       </div>
      </div>
   )
}
export default Home;