import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () =>{

    return(
        <div className="nav">
            <Link id="navHome" to="/"> Home </Link>
            <Link id="navMain" to="/Main"> Main </Link>
            <Link id="navAbout" to="/About"> About </Link>
        </div>
    )
}

export default Navbar