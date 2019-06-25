import React from 'react'

const Pet = props => {


    return(
        <div className="pets">
         <p>{props.petsName}</p>
         <p>{props.petsBreed}</p>
            
        </div>
    )

}

export default Pet