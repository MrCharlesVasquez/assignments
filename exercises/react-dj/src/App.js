import React, { Component } from 'react'
import Box from './Box.js'



class App extends Component {
    constructor() {
        super()
        this.state = {
            box1Color: 'white',
            box2Color: 'white',
            box3Color: 'white',
            box4Color: 'white',
            boxShape: '50px 10px 50px 10px',
            boxClass: 'standard'

        }
     }

     whiteAndBlack = () => {
       this.setState({
           box1Color: this.state.box1Color ==="white" ? "black": "white",
           box2Color: this.state.box1Color ==="white" ? "black": "white",
           box3Color: this.state.box1Color ==="white" ? "black": "white",
           box4Color: this.state.box1Color ==="white" ? "black": "white",
       })
     }

    purple =() => {
        this.setState ({
            box1Color: this.state.box1Color ==="white" ? "purple": "white", box2Color: this.state.box2Color ==="white" ? "purple": "white"
        })
    }
    blue1 = ()=> {
        this.setState ({
            box3Color: this.state.box3Color ==="blue" ? "white": "blue"
        })
    }

    blue2 = ()=>{
        this.setState({
            box4Color: this.state.box4Color ==="blue" ? "white": "blue"
        })
        
    }

    circleBtn = () =>{
        this.setState({
            boxShape: this.state.boxShape === "50px 10px 50px 10px" ? "500px": "50px 10px 50px 10px"
        })
    }

    invisible = () =>{
        this.setState({
            boxClass: this.state.boxClass === "standard" ? "houdini" : "standard"
        })
    }

    hypnosis = () =>{
        this.setState({
            boxClass: this.state.boxClass === "standard" ? "hypnosis" : "standard"
        })
    }   

    buttonShrink = () =>{
        this.setState({
            boxClass: this.state.boxClass === "standard" ? "buttonShrink" : "standard"
        })
    }

    render() {

         return (
            <div className="outerContainer">
                <h1>DJ REACT BOX</h1>
                
                <div className="boxContainer">
                    
                    <Box color={this.state.box1Color} style = {this.state.boxShape} className = {this.state.boxClass}/>
                    <Box color={this.state.box2Color} style = {this.state.boxShape} className = {this.state.boxClass}/>
                    <Box color={this.state.box3Color} style = {this.state.boxShape} className = {this.state.boxClass}/>
                    <Box color={this.state.box4Color} style = {this.state.boxShape} className = {this.state.boxClass}/>

                </div >
            <div className="innerContainer">
                <button onClick={this.whiteAndBlack}>White  <span> Black</span></button>
                <button className="PurpB" onClick={this.purple}> <span className="purple"> Purple</span></button>
                <button className="blue1" onClick={this.blue1}> <span className="Blu">Blue3</span></button>
                <button className="blue2" onClick={this.blue2}> <span className="Ble">Blue4</span></button>
                <button onClick={this.circleBtn}> o </button>
                <button onClick={this.invisible}> Invisibility </button>
                <button onClick={this.hypnosis}>hypnosis</button>
                <button onClick={this.buttonShrink}>Button Shrink</button>
               </div>
            </div>
        )
    }



}


export default App