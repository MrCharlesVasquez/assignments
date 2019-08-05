import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () =>{

    return(


        
        <div className="NavBar" id="mySidenav">
            <Link id="navMain" to="/"> Main </Link>
          
            <Link id="navAbout" to="/About"> About </Link>
        </div>
    )
}

export default Navbar