import React, { Component } from 'react'
import axios from 'axios'
import  {Link}  from 'react-router-dom'
import Gif from './image/beerGrabLoop.gif'


class Search extends Component {
    constructor() {
        super()
        this.state = {
            city: "",
            state: "",
            breweries: [],
            list: []

        }
    }


    getInfo = () => {
        if (!this.state.city)
            alert("Please enter city name")
        axios.get(`https://api.openbrewerydb.org/breweries?by_city=${this.state.city}`)
            .then(res => {
                this.setState({
                    breweries: res.data
                })
            })
            .catch(err => console.log(err))
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value


        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newPub = {
            city: this.state.city,
            state: this.state.state
        }
        this.setState(prevState => ({
            city: "",
            state: "",
            list: [...prevState.list, newPub]
        }))
    }



    render() {

        let filteredBreweries = []
        let mappedBreweries = []



        if (this.state.state !== "") {
            console.log(this.state.state)

            filteredBreweries = this.state.breweries.filter(brewery =>
                brewery.state.toLowerCase() === this.state.state.toLowerCase())


            console.log(filteredBreweries)

            mappedBreweries = filteredBreweries.map(brewery => {

                return (


                    <div className="brewery-card" key={brewery.id}>

                        <a href={brewery.website_url} className="aTag"> {brewery.name}</a>

                        <h2>City: {brewery.city}, {brewery.state}</h2>

                        <Link to={{ pathname: `/LocateMap/${brewery.id}`, state: { ...brewery } }} > Address: {brewery.street} </Link>

                        <h3>Phone: {`(${brewery.phone.substring(0, 3)}) ${brewery.phone.substring(3, 6)} - ${brewery.phone.substring(6, 10)}`}</h3>

                        <h3>Brewery type: {brewery.brewery_type}</h3>
                    </div>
                )
            })

            console.log(mappedBreweries)

        } else {

            mappedBreweries = this.state.breweries.map(brewery => {


                return (

                    <div className="brewery-card" key={brewery.id}>

                        <a href={brewery.website_url} className="aTag"> {brewery.name}</a>

                        <h2>City: {brewery.city}, {brewery.state}</h2>

                        <Link  to={{ pathname: `/LocateMap/${brewery.id}`, state: { ...brewery } }} > <span className="addyLink">Address: {brewery.street}</span> </Link>

                        <h3>Phone: {`(${brewery.phone.substring(0, 3)}) ${brewery.phone.substring(3, 6)} - ${brewery.phone.substring(6, 10)}`}</h3>

                        <h3>Brewery type: {brewery.brewery_type}</h3>
                    </div>
                )
            })
        }




        return (

            <div className="searchContainer" >


                <div className="GifGRAB">
                    <img src={Gif} className="gifBeerGrab" alt="gif Beer Grab" ></img>
                </div>

              
                <div className="searchTitle">
                    <span class="bar">Search</span>
                </div>

                



                <form onSubmit={this.handleSubmit} className="searchBar">
               
                   <div className="inputArea">
                    <input
                        type="text"
                        name="city"
                        onChange={this.handleChange}
                        value={this.state.city}
                        placeholder='Search by City'
                        required
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                this.getInfo()
                            }
                        }}
                    />
 
                    <input
                        type="text"
                        name="state"
                        onChange={this.handleChange}
                        value={this.state.state}
                        placeholder='Search by State'
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                this.getInfo()
                            }
                        }}
                  />
                    
                    </div>

                    <button onClick ={(this.getInfo)}>Click for Search</button>
                </form>


                {mappedBreweries}


            </div>


        )
    }
}

export default Search





