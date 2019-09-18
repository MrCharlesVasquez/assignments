import React from 'react';
import Header from './Header.js';
import NavBar from './NavBar.js';
import { Switch, Route } from 'react-router-dom';
import About from './About.js';
import Footer from './Footer.js'
import Projects from './Projects.js'









const App = () => {


    return (

        <div className="container">

            <NavBar />
            <Header />

            <Switch >

                <Route path="/About" component={About} />
                <Route path="/Projects" component={Projects} />
                <Route path="/" component={About} />
            </Switch >


            <Footer />





        </div>
    )

}

export default App