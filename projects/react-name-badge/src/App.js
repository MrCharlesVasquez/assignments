import React, { Component } from 'react'
import Badge from "./Badge.js"
import Forms from "./Forms.js"
import "./style.css"


class App extends Component {
    constructor() {
        super()
        this.state = {
            fName: "",
            lName: "",
            placeOfBirth: "",
            email: "",
            phone: "",
            favFood: "",
            about: "",
            array: []

        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    handleSubmit = e => {
        e.preventDefault()
        // Capture the user's input, and save them in an object
        const newPerson = {
            fName: this.state.fName,
            lName: this.state.lName,
            placeOfBirth: this.state.placeOfBirth,
            email: this.state.email,
            phone: this.state.phone,
            favFood: this.state.favFood,
            about: this.state.about
        }
        // update state to save that data and refresh the form
        this.setState(prevState => ({
            fName: "",
            lName: "",
            placeOfBirth: "",
            email: "",
            phone: "",
            favFood: "",
            about: "",
            array: [...prevState.array, newPerson]

        }))


    }





    render() {

        //.map has to be done in render (workspace)

        const mappedNewPeople = this.state.array.map((info, i) => {
            return (
                <div className="container">
                     <div className="mapDiv" key={i}> 
                         <h1>Name: {info.fName} {info.lName}</h1>
                    
                        
                            <p>Email: {info.email}</p>
                            <p>Phone number: {info.phone}</p>
                            <p>Favorite food: {info.favFood}</p>
                            <p>About: {info.about}</p>
                    </div>
                </div>                                
            )

        })


        return (
            <div className="appDiv">

                <Forms
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}

                />



                <div>{mappedNewPeople}</div>

            </div>

        )

    }
}





export default App