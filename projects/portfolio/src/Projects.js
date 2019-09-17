import React from 'react'
import Vice from './image/Vice.png'
import Brewery from './image/Brewery.png'
import Mario from './image/Mario.png'
import Vr from './image/VR.png'


const Projects = () => {
    return (
        <div>
            <div className="projectWrapper">

                <h1 className="header1">
                    Projects
                </h1>

                <div className="parallax-img2">

                    <div className="projectContainer">

                        <div className="project1">
                            {/* <div className="V"><img src= {Vr} className="Vr" alt="VR lgog" /></div>  */}
                            <a href="https://vicesnrewards.herokuapp.com"><img src={Vice} className="Vice" alt="Vice" /></a>
                        </div>

                            <p className="V"> This was is Full-Stack group project. The task was to building a full-stack application, we needed to build the API, server, and front-end React app.
                                Here were the requirements:
                                Backend: Must use express, mongoose and morgan dependencies
                                must create your own API.
                                You must create at least one mongoose model to store in a mongodb database.
                                Frontend: Must use create-react-app, axios and react-router-dom dependencies
                                Must have at least 3 routes (pages/views)
                                Must include as many as the CRUD methods as your app needs.
                                Use Tools and techniques such as React Context, HOC's and Render Props to practice keeping your code DRY and reusable. 
                            </p>

                        <div className="project2">
                            <a href="http://breweryfinderlocal.surge.sh"><img src={Brewery} className="Brewery" alt="Brewery" /></a>
                        </div>

                            <p className="B">This was a personal project app using 3rd party API and React.The site must integrate with an online API. 
                                Use the axios library to make client-side HTTP requests.Your site must have at least 3 views (pages) using React Router.
                                Use Context, render-props, and Higher Order Component's where needed to help with writing DRY ('Don't Repeat Yourself') code.
                                Was asked to use lifecycle methods like componentDidMount for managing HTTP requests.
                            </p>

                        <div className="project3">
                            <a href="https://mario-pest-control-cv.surge.sh"> <img src={Mario} className="Mario" alt="Mario" /></a>
                        </div>

                            <p className="M">This Static Website external uses CSS stylesheets and JavaScript files. 
                                Princess Peach has a huge infestation of Goombas, Bob-ombs, and Cheep-cheeps, and has commissioned Mario to take care of her pest problem. 
                                Mario did the job, but he is having trouble keep track of how many he has caught.
                                Mario asked you to build him a website that keeps track of how many baddies he caught for Princess Peach so he can send her a bill.
                            </p>
                    </div>


                        </div >


                            <section className="proSection">
                            hello
                         </section>

                        <div className="wrapper">

                </div >
            </div >
        </div>
    )
}

export default Projects