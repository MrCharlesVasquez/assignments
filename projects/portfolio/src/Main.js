import React from 'react'
import Image from './image/DSC01326.jpg'


const Main = () =>{
    return(
        <div className="infoBlock">
            <div className="whiteFill" >
            <div className="profilePic" >
                            <img src={Image} className="profileImgTag" alt="Profile Pic"></img>
                        </div> 
                <p className="mainInfo">Main: The life of Charles.</p>
          
            </div>
           

        </div>
    )
}

export default Main