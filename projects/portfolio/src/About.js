import React from 'react'
import image from './image/C.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faAdobe, faCss3Alt, faBehanceSquare, faGithub, faInstagram, faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { faFile } from '@fortawesome/free-solid-svg-icons'




const About = () => {
    return (


        <div className="wrapper">

            <h1 className="header1">Charles Vasquez</h1>

            <div className="parallax-img">



                <div className="profile" >
                    <img src={image} className="imgProfile" alt="Charles"></img>
                </div>
                <h2 className="name">Graphic Artist / Web Developer</h2>

                <div className="skillsGrid">
                    <h2 className="titleSkill"> Skills:</h2>
                    <ol className="skills1">  <FontAwesomeIcon icon={faAdobe} /> Adobe</ol>
                    <ol className="skills1">  <FontAwesomeIcon icon={faHtml5} /> HTML5</ol>
                    <ol className="skills2">  <FontAwesomeIcon icon={faJs} /> Javascript</ol>
                    <ol className="skills3">  <FontAwesomeIcon icon={faReact} /> React</ol>
                    <ol className="skills4">  <FontAwesomeIcon icon={faCss3Alt} /> CSS3</ol>
                </div>

                <div className="linkContainer">
                    <h2 className="linkSkill"> Links:</h2>
                    <a href="https://github.com/"> <ol className="links">  <FontAwesomeIcon icon={faGithub} /> Github</ol></a>
                    <a href="https://www.behance.net/applestem8aa84"> <ol className="links">  <FontAwesomeIcon icon={faBehanceSquare} /> Behance</ol></a>
                    <a href="https://drive.google.com/file/d/1LZ2FptvPpwzk_QsybB6g0rGQukSJCosM/view?usp=sharing"> <ol className="links"><FontAwesomeIcon icon={faFile} /> Resume</ol></a>
                    <a href="https://www.instagram.com/th.embassy_us/"> <ol className="links"><FontAwesomeIcon icon={faInstagram} /> Instagram</ol></a>
                </div>

            </div >
            <section className="pContainer">
                <p><h2>Freelancer & Design Consultant</h2> <br />
                    Consulted for Pig & A Jelly Jar. Designed the exterior & interior wall murals for their Holladay location	.
	            Consulted and assisted in local start up brands. <br />Assisted in creating brand identity, product design, and marketing materials.
                </p>

                <p><h2>Education</h2><br />
                    Vschool : Salt Lake City, UT - FullStack Bootcamp 2019<br />
                    State of Utah Real Estate License and Certification 2018<br />
                    University of Utah , Graphic Design 2004
                </p>

            </section>

            <div className="wrapper">
            </div>
        </div>

    )
}

export default About