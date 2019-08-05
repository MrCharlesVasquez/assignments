import React, {Component} from 'react';
import axios from 'axios';


const BountyContext = React.createContext ();
const {Provider, Consumer} = BountyContext;

class BountyProvider extends Component{
    constructor(){
        super()
        this.state ={
            firstName:"",
            lastName:"",
            living:true,
            bountyAmount:0,
            type:"",
            
            bounties:[]
        }
    }
componentDidMount(){
    axios.get("/bounty/")
    .then(res =>{
        console.log(res.data)
        this.setState({
            bounties:res.data
        }) 
    })
    .catch(err => console.log(err))
}
    render(){
        return(
            <div>
            <Provider>

            </Provider>
            </div>
        )
    }
}
export const withCRUD = C => (
    <Consumer>
        {value => <C {...value} />}
    </Consumer>
)

export default BountyProvider