import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar.js';
import Search from './Search.js';
import About from './About.js';
import Home from './Home.js';
import LocateMap from './LocateMap.js';
import Footer from './Footer.js'
import './style.css'

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }


    render() {
        return (
            <div >
                
                <NavBar />
               
                    <Switch >
                    
                        <Route exact path="/" component={Home} />
                        <Route path="/About" component={About}/>
                        <Route path="/Search" component={Search} />
                        <Route path="/LocateMap" component={LocateMap}/>
                
                    </Switch>
                
                <Footer />

            </div>
        )
    }


}

export default App