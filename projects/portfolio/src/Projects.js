import React from 'react'
import Vice from './image/Vice.png'
import Brewery from './image/Brewery.png'
import Mario from './image/Mario.png'
import Dj from './image/DjReact.png'



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

                                <div className="project4">
                                    <a href="https://Dj-React-app-cv.surge.sh"> <img src={Dj} className="Dj" alt="DjReact" /></a>
                                </div>

                                <p className="D">DJ React
                                You are a DJ, and are learning to code. All DJ's love buttons that turn squares different colors.
                                Requirements: Your DJ color board will use smaller buttons to make your grid of four squares change colors.
                                This is a great time to practice CSS Grids. Create four squares in a two by two grid that will change color depending on where you are as a DJ.
                                A master DJ will use 8 buttons.
                                Every level of advancement will use previous levels of requirements, and add to them.
                                You will have a parent component that will contain the four squares. This parent component's state will maintain a array of colors.
                                </p>
                            </div>


                        </div >


                    <section className="proSection">

                    </section>

                    <div className="wrapper"></div >
            </div >
        </div>
    )
}

export default Projects