import React, {Component} from 'react'
import axios from "axios"

class App extends Component {
    constructor(){
        super()
        this.set = { }
    }
componentDidMount(){
    axios.get("https://api.openbrewerydb.org")
    .then(res => {console.log(res.data)})
    .catch(err => console.log(err))
}

    render(){
        return(
            <div>

            </div>
        )
    }


}

export default App