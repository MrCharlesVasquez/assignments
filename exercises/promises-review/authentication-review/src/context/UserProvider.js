import React, { Component } from 'react';
import axios from 'axios'


const UserContext = React.createContext()

class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user)) || {},
            token: localStorage.getItem("token") || "",
            errMsg: ""
        }
    }

    signup = credentials =>{
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data 
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                this.setState({ user, token })
            })
            .catch( err => this.handleAuthErr(err.response.data.errMsg))

    }
    login = credentials =>{
        axios.post("/auth/login", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            this.setState({ user, token })
        })
        .catch(err => this.handleAuthErr(err.response.data.errMsg))
}

logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    this.setState({ user: {}, token: "" })
}

handleAuthErr = (errMsg) => {
    this.setState({ errMsg })
}


    render(){
        return(
            <UserContext.Provider
                value={{
                    // stuff
                    user: this.state.user,
                    token: this.state.token,
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout
                }}>
                { this.props.children }
            </UserContext.Provider>
            
        )

    }
}

export default UserProvider

export const withUser = C => props => (
    <UserContext.Consumer>
        { value => <C {...value} {...props}/> }
    </UserContext.Consumer>
)