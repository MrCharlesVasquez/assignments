import React from 'react'
import Title from './Title'


const Bloglist = (props) => {


    return (
        <div>
            <Title />
          
       <h1>{props.title}</h1> 
       <h2>{props.subTitle}</h2>
       <footer>Posted by {props.author} on {props.date}</footer>
        </div>
    )
}
export default Bloglist