import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import NavBar from './NavBar.js';
import { Switch, Route } from 'react-router-dom';
import About from './About.js';
import Footer from './Footer.js'
import New from './New.js'








const App = () => {


    return (

        <div className="container">

            <NavBar />
            <Header />

            <Switch >

                <Route exact path="/" component={Main} />
                <Route path="/About" component={About} />
                <Route path="/New" component={New} />
            </Switch >


            <Footer />





        </div>
    )

}

export default App