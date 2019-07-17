import React from 'react'
import {Link} from 'react-router-dom'



const NavBar = props =>{
    return(

        <nav className="NavBar" id="mySidenav">
            <Link id="navHome" to="/"> Home </Link>
            <Link id="navAbout" to="/About"> About </Link>
            <Link id="navSearch" to="/Search"> Search Brewery</Link>
            <Link id="navLM" to="/LocateMap"> Map Locator</Link>
        </nav>

       
    )

}

export default NavBar