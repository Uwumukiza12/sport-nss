import React, {useState} from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import Button from '../../Button';
import './Navbar.css';

function Navbar() {
   const [click, setClick] = useState(false)

   const handleClick = ()=>setClick(!click); 
   const [button,  setButton] = useState(true)
   const closeMobileMenu= ()=> setClick(false);

   const showButton = ()=>{
      if (window.innerWidth <= 960){
         setButton(false)
      } else { setButton(true)}
   }
   window.addEventListener('resize', showButton)
   return (
      <>
      <Router>
            <nav className="nav-bar">
               <div className="navbar-container">
                  <Link to='/' className='nav-logo'>
                     NSS-IS  <i  className="fas fa-futbol" />
                     
                  </Link>
      
                     <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                     </div>
                     <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                           <Link to='/' className="nav-link" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                           <Link to='/CenterstOfTeams' className="nav-link" onClick={closeMobileMenu}>Centers</Link>
                        </li>
                        <li className="nav-item">
                           <Link to='/Chat' className="nav-link" onClick={closeMobileMenu}>Chat with us</Link>
                        </li>
                     </ul>
                  {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}

               </div>
            </nav>
            </Router>
      </>
   )
}

export default Navbar
