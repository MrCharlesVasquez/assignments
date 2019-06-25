import React from "react"

function Box(props){
    
    return(
    <div className={`${props.boxClass}`}>
        <h1>{props.name}</h1>
        <h2>{props.title}</h2>
      

    </div>
 )
}

export default Box