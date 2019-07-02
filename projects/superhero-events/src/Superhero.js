import React from 'react'

const Superhero = props => {


    return (

       
        <div className="character">
           
            <h1>{props.name}</h1>
            <h2>{props.show}</h2>
            <button style = {{ backgroundImage : `url(${props.imageName})`}}onClick={() => props.shout(props.catchPhrase)}>   </button>
            <p>Click me to alert my catch phrase</p>
        </div>
     
    )
}

export default Superhero