import React from 'react';
import {Link} from 'react-router-dom';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

function Button(Children, type, onClick, buttonStyle, buttonSize) {
   const checkButtonStyle= STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
   const checkButtonSize= STYLES.includes(buttonSize) ? buttonSize : SIZES[0] 
   return (
      <div>
         <Link to='/SignIn' className="btn-mobile">
            <button className={`btn ${checkButtonSize} ${checkButtonStyle  }` }
            onClick={onClick}
            type={type}>
                  <div Children={[]}></div>
            </button>
         </Link>
      </div>
   )
}

export default Button;
