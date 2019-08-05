import React, { Component } from 'react'
import  AuthForm from './AuthForm.js'

class Auth extends Component {
    constructor(){
        super()
        this.state ={
            username= "",
            password="",
            isToggled: false
        }
    }
toggler = () => this.setState(preState => ({ isToggled: ! preState.isToggled }))

    handleSignup = e => {
        e.preventDefault()
        const userCredentials ={
            username: this.state.username,
            password: this.state.password
        }

    }

    handleLogin = e => {

    }

    render(){
        return(
            <div>
                { !this.state.isToggled ? 
                <>
                <AuthForm
                username={this.state.username}
                password={this.state.password}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                btnText="Sign Up" 
                />
                <p>Need to login?</p>
                    <p>
                </>
            :

                <> 
                <AuthForm
                username={this.state.username}
                password={this.state.password}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                btnText="Login" />
                <p></p>
                </>

                }
            </div>
        )
    }

}