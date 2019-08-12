import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () =>{

    return(


        
        <div className="NavBar" id="mySidenav">
            <Link id="navMain" to="/"> Main </Link>
            <Link id="navThembassy" to="/TH.EMBASSY">TH.EMBASSY</Link>
            <Link id="navAbout" to="/Projects"> Projects </Link>
        </div>
    )
}

export default Navbar