import React from 'react'

const Author = (props) => {

    return(
        <div>
               <footer>Posted by {props.author} on {props.date}</footer>
        </div>
    )
}

export default Author