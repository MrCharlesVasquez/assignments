import React from 'react'
import Bloglist from './ Bloglist'
import Title from './Title'
import SubTitle from './SubTitle'
import Author from "./Author"


    const App = () => {
        const blogs = [
            {
                title: "Man must explore, and this is exploration at its greatest",
                subTitle: "Problems look mighty small from 150 miles up",
                author: "Start Bootstrap",
                date: "September 24, 2019"
            },{
                title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
                subTitle: "",
                author: "Start Bootstrap",
                date: "September 18, 2019"
            },{
                title: "Science has not yet mastered prophecy",
                subTitle: "We predict too much for the next year and yet far too little for the next ten.",
                author: "Start Bootstrap",
                date: "August 24, 2019"
            },{
                title: "Failure is not an option",
                subTitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
                author: "Start Bootstrap",
                date: "July 8, 2019"
            }
        ]
    
    
    const mappedBlog = blogs.map((blog, i) => <Bloglist key = {i} 
                                                        title = {blog.title} 
                                                        subTitle = {blog.subTitle}
                                                        author = {blog.author}
                                                        date = {blog.date}/>)
    
    

    return(
        <div className="container" >
           <div className="containerInner">
            <h1 className="img" style={{ backgroundImage: `url("https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg")`}} >Clean Blog Post</h1>
               
                </div> 
                <Bloglist />
                <Title />
                <SubTitle />
                <Author />
        {mappedBlog}
   
        </div>

    )
}
export default App