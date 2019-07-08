import React from 'react'
import {withTheme} from './context/ThemeProvider'

const Navbar = (props) => {
    return(
        <div className={`navBar navBar-${props.theme}`}>
            <a href ="Home" className={`a a-${props.theme}`}>Home</a>
            <a href ="About" className={`a a-${props.theme}`}>About</a>
            <a href ="Contact" className={`a a-${props.theme}`}>Contact</a>

        </div>
    )
}

export default withTheme(Navbar)