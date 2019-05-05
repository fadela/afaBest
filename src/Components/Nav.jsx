import React, { Component } from 'react';  
import { Link } from 'react-router-dom';


class Nav extends Component {
    state = {  }
    render() { 
        return ( 

          <div>

                <ul>
                 <li> 
                   <Link to="imageupload1"> ImgUp1 </Link>
                 </li>
                 <li>
                   <Link to="imageupload2"> ImgUp2 </Link>
                 </li>
               </ul>
                         
          </div>
                   
         );
    }
}
 
export default Nav;