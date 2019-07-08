import React from 'react'
import NavBar from './Navbar.js'
import Main from './Main.js'
import Footer from './Footer.js'
import {withTheme} from './context/ThemeProvider.js'


const App = (props) => {
    return (
        <div className={`theme theme-${props.theme}`}>
          
            <NavBar/>
            <Main/>
            <Footer/>
        </div>
    )
}


export default withTheme(App)