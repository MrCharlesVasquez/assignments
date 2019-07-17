import React from 'react'
import logo from './image/BreweryFinderLogo03-01.svg'
import logo3 from './image/glassInHand.jpeg'
import logo4 from './image/gifMugCheers.gif'




const Home = () => {

    document.title = "Brewery Finder";

    return (
       
        <div className="HomeContainer" >

            



            <div className="Home3" >
                <img src={logo3} className="imgTag3" alt="Beer Glass in Hand"></img>
            </div>
           

            <div className="Home2" >
                <img src={logo4} className="imgTag2" alt="gif Mug Cheers " ></img>
            </div> 

            <div className="Home1" >
                <img src={logo} className="imgTag" alt="Brewery Finder logo"></img>
            </div>

            <div className="Home4" >
                <h3 className="imgTag4">Visit Local Breweries  </h3>
            </div>
            
            
        </div>
    )
}

export default Home