import React from 'react'
import { Link , withRouter } from 'react-router-dom'

const Navbar = props => {
    return(
        <nav>
            <Link to= "/">          Home      </Link>
            <Link to= "/about">     About     </Link>
            <Link to= "/services">  Services  </Link>
       
        </nav>

    )
}


export default withRouter (Navbar)