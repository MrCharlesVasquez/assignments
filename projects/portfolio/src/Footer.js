import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from "@fortawesome/free-brands-svg-icons"
import { faAddressCard, faMobileAlt,faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    return (

        <div className="footer"> 
        <div>
        <ol className="footList"><FontAwesomeIcon icon={faAddressCard} />  Contact info:</ol>
        <ol className="footList"><FontAwesomeIcon icon={faEnvelopeSquare} />  Charles@mvrealtorsslc.com</ol>
        <ol className="footList"><FontAwesomeIcon icon={faMobileAlt} /> (801) 870.0868</ol>
        </div>
        </div>
    )
}
export default Footer