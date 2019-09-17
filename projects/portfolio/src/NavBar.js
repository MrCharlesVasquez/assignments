import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (



        <div id="nav">

            <Link id="navAbout" to="/About"> About </Link>

            <Link id="navProjects" to="/Projects"> Projects </Link>
        </div>
    )
}

export default Navbar