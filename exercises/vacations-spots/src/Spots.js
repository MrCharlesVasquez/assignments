import React from "react"

const Spots=(props)=>{

    return (
        <div className="spot">
           <h2>Location:  {props.place}</h2> 
           <p>Price to visit:  $ {props.price}</p>
           <p>Time to go:  {props.timeToGo}</p>

        </div>
    )
}



export default Spots