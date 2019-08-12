import React from "react"
import { Link } from "react-router-dom"

const NavBar = props => {
    const { logout, token } = props
    return (
        <nav>
            {token && <button onClick={logout}> Logout </button>}
            
            <Link id="Home" className="menu-item" to="/"> Home </Link>
            <Link id="profile" className="menu-item" to="/ShopPage"> Shop </Link>
            <Link id="budget" className="menu-item" to="/checkout"> Checkout </Link>
        </nav>
    )
}

export default NavBar