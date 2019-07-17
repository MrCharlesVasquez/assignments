import React from 'react'
import Title from './Title'


const Bloglist = (props) => {
    


    return (
        <div>
           
            
            <Title />
          
       <h1 className="title">{props.title}</h1> 
       <h2 className="subTitle">{props.subTitle}</h2>
       <footer>Posted by {props.author} on {props.date}</footer>
        </div>
    )
}
export default Bloglist