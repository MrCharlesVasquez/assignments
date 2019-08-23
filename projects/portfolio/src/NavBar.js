import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (



        <div className="NavBar" id="mySidenav">
            <Link id="navAbout" to="/About"> About </Link>
            <Link id="navMain" to="/"> Main </Link>
            {/* <Link id="navThembassy" to="/TH.EMBASSY">TH.EMBASSY</Link> */}
            <Link id="navProjects" to="/Projects"> Projects </Link>
        </div>
    )
}

export default Navbar