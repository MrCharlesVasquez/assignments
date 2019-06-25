import React from "react"
import Spots from "./Spots.js"

const App=(props) => {
    let vacationSpots = [
        
        { place: "Meridian, Idaho", price: 40,      timeToGo: "Spring" },
        
        { place: "Cancun",          price: 900,     timeToGo: "Winter" },
        
        { place: "China",           price: 1200,    timeToGo: "Fall" },
        
        { place: "Russia",          price: 1100,    timeToGo: "Summer"},
        
        { place: "Lebanon",         price: 400,     timeToGo: "Spring"}
      ]

    const mappedSpots = vacationSpots.map((spots,i) => < Spots 
                                                key = {i}
                                                place = {spots.place}
                                                price = {spots.price}
                                                timeToGo = {spots.timeToGo}/>
                                            )
    return(
        <div>
            <h1> Vacations Spots </h1>
            {mappedSpots}
        </div>
    )
}


export default App