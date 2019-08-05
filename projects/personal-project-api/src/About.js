import React from 'react'
import logo from "./image/BreweryFinderLogo2.png"



const About = (props) => {

    return (


        <div className="AboutContainer" >

            <div className="BrewLogoInput">
                <img src={logo} className="BrewLogo" alt="logo"></img>
            </div>

            <div className="About1" >
                <h1 className="aboutText">Thank You for visiting Brewery Finder.</h1>
                <h1 className="aboutText2">This website was made as a Personal Project for  Vschool.</h1>
            </div>
        </div>

    )
}

export default About