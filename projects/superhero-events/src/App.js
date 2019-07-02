import React, { Component } from 'react'
import data from './data.json'
import Superhero from './Superhero.js';


class App extends Component {
    constructor() {
        super()
        this.state = {

        }

    }

    shout = (catchPhrase) => {
        alert(catchPhrase)
    }



    render() {
        const heroes = data.map((hero, i) => {
            return <Superhero key={i}
                name={hero.name}
                show={hero.show}
                catchPhrase={hero.catchPhrase}
                imageName={hero.imageName}
                shout={this.shout} />
        })
        return (
                <div>
            <h1 className="header">SUEDO HEROES</h1>
            <div className="container">
                
                {heroes}


            </div>
            </div>
        )
    }
}



export default App