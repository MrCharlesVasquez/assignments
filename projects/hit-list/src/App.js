
import React, { Component } from 'react'
import axios from 'axios'
import "./style.css"

class App extends Component {
    constructor() {
        super()
        this.state = {
            hitlist: []
        }
    }
    componentDidMount = () => {
        axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json")
            .then(res => this.setState({ hitlist: res.data }))
            .catch(err => console.log(err))
    }
    render() {
        const mappedList = this.state.hitlist.map((target, i) => {
            return (
                <div className="container" key={i}>

                    <div className="image" style={{ backgroundImage: `url(${target.image})` }}  >

                        <h1> {target.name} </h1>

                    </div>
                </div>
            )
        })
        return (
            <div>
                <h1 className="header">The Corleone Famiglia  <span style ={{textDecorationLine: `line-through`,color:`red`}} > "HIT LIST"</span></h1>
                <div className="list">

                    {mappedList}
                </div >
            </div>
        )
    }

}


export default App