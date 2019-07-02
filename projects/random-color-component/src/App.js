import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
    constructor() {
        super()
        this.state = {
            colors: []
        }
    }
    componentDidMount = () => {
        axios.get("http://www.colr.org/json/colors/random/7")
            .then(res => this.setState({
                colors: res.data.colors
            }))
            .catch(err => console.log(err))
    }

    render() {
        const mappedColors = this.state.colors.map((crayon, i) => {

            let colorName = ""

            try {
                colorName = crayon.tags[0].name
            } catch {
                //keep going
            }
            console.log(crayon.hex)
            console.log(colorName)



            return (
                <div key={i}>

                    <h1 style={{ backgroundColor: `#${crayon.hex}`, height: 125, display: "flex", flexDirection: "column", justifyContent: "center" }}  > {colorName} </h1>
                </div>
            )
        })
        return (
            <div style={{ textAlign: "center", color: "black" }}>
                <h1 style={{ color: "orange" }}>7 Random Magical Colors</h1>
                {mappedColors}
            </div>
        )
    }
}

export default App