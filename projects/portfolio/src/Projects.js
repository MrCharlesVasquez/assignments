import React from 'react'
import Vice from './image/Vice.png'
import Brewery from './image/Brewery.png'
import Mario from './image/Mario.png'


const Projects = () => {
    return (
        <div>
            <div className="projectWrapper">

                <h1 className="header1">Projects</h1>

                <div className="parallax-img2">

                    <div className="projectContainer">

                        <div className="project1">
                            <img src={Vice} className="Vice" alt="Vice" />

                        </div>

                        <div className="project2">
                            <img src={Brewery} className="Brewery" alt="Brewery" />

                        </div>

                        <div className="project3">
                            <img src={Mario} className="Mario" alt="Mario" />

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