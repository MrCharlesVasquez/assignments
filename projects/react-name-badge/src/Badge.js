import React from 'react'


const Badge = props => {




    return (
        <div className="badgeDivs">
            <h1> First Name:{props.fName} {props.lName}</h1>
            <p> {props.email} {props.phone} {props.placeOfBirth}  {props.favFood}</p>

            
        </div>
    )

}
export default Badge