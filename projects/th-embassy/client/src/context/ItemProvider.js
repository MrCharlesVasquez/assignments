import React, { Component } from 'react'
import axios from 'axios'

const ItemContext = React.createContext()
const itemAxios = axios.create();

itemAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})


class itemProvider extends Component{
    constructor(){
        super()
        this.state ={
            apparel: [],
        }
    }
getApparel = () => {
    itemAxios.get("/api/apparel")
    .then(res => {
        console.log(res.data)
        this.setState({
            apparel: res.data
        })
    })
    .catch(err => console.log(err))
}


    render(){
        console.log(this.state.apparel)
        return(
            <div>
            <ItemContext.Provider value={{getApparel: this.getApparel, ...this.state}}>
                
                {this.props.children}
            </ItemContext.Provider>
            </div>
        )
    }
    
}

export default itemProvider

export const withItem = C => props => (
    <ItemContext.Consumer>
        {value => <C {...value}{...props} />}
    </ItemContext.Consumer>
)