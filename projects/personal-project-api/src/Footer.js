import React from 'react'
import insta from './image/instagram-transparent-image-17.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faBeer} from "@fortawesome/free-solid-svg-icons"

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footText">Cheers , Thank you for visting! Visit our Instagram for Social Club <img src={insta} className="insta" alt="instagram logo" style={{width: 50, }}></img> </div>
         <address> Vschool   50 State St, Salt Lake City, UT 84111</address>
        </footer>
    )
}

export default Footer