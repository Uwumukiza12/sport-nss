import React , {useState} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import { maxWidth } from '@material-ui/system';
function TeamsAndTournem() {
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const toggle = ()=> setDropdownOpen(prevState => !prevState);
   return (
      <div>
         <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
               General School's Teams
            </DropdownToggle>
            <DropdownMenu
            modifiers= { {
               setMaxHeight : {
                  enabled:true,
                  order: 890,
                  fn: data =>{
                     return{
                        ...data,
                        styles:{
                        ...data.styles,
                        overflow:"auto",
                        maxHeight:"100px",
                        maxWidth:"230px"
                        }
                     }
                  }
            }
               
               }
            }
            >
               <DropdownItem header>Girls and Boys school teams</DropdownItem>
               <DropdownItem>Girls Teams and TeamsAndTournements</DropdownItem>
               <DropdownItem>Boys Teams and TeamsAndTournements</DropdownItem>
            </DropdownMenu>
         </Dropdown>
      </div>
   )
}

export default TeamsAndTournem
