import React from 'react'
import Vice from './image/Vice.png'
import Brewery from './image/Brewery.png'
import Mario from './image/Mario.png'
import Vr from  './image/VR.png'


const Projects = () => {
    return (
        <div>
            <div className="projectWrapper">

                <h1 className="header1">Projects</h1>

                <div className="parallax-img2">

                    <div className="projectContainer">

                        <div className="project1">
                           {/* <div className="V"><img src= {Vr} className="Vr" alt="VR lgog" /></div>  */}
                            <a href="https://vicesnrewards.herokuapp.com"><img src={Vice} className="Vice" alt="Vice" /></a>

                        </div>

                        <div className="project2">
                        <a href="http://breweryfinderlocal.surge.sh"><img src={Brewery} className="Brewery" alt="Brewery" /></a>

                        </div>

                        <div className="project3">
                           <a href="https://mario-pest-control-cv.surge.sh"> <img src={Mario} className="Mario" alt="Mario" /></a>

                        </div>

                    </div>
                </div >
                <section>
                    hello
                </section>

                <div className="wrapper">

                </div >
            </div >
            </div>
            )
        }
        
export default Projects