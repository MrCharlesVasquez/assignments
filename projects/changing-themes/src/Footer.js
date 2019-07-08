import React from 'react'
import {withTheme} from './context/ThemeProvider.js'

const Footer = (props) => {
    return(
        <div className={`foot foot-${props.theme}`}>
            
            <footer>Footer stuff</footer>
        </div>
    )
}


export default withTheme(Footer)