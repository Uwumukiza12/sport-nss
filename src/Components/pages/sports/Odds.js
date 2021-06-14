import React, {useState} from 'react'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function Odds() {
   const [checked , setChecked] = useState(false);
   const toggleChecked = ()=>{
      setChecked((prev)=> !prev);
   };
   return (
     <FormGroup>
        <FormControlLabel
        control={
           <Switch size="medium" checked={checked} onChange={toggleChecked}></Switch>
        }>

        </FormControlLabel>
     </FormGroup>
   )
}

export default Odds
