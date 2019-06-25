import React from "react"
import Navbar from "./Navbar.js"
import Main from "./Main.js"
import Header from "./Header.js"
import Footer from "./Footer.js"
import Box from "./Box.js"


import "./style.css"


function App(){
    return (
        <div className="container">
            <Navbar />
            <Main />
            <Header />
            <Box />
            <Footer />


        </div>
    )
}

export default App