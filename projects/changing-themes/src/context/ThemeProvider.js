import React, {Component} from 'react'

const ThemeContext = React.createContext ();
const {Provider, Consumer} = ThemeContext;

class ThemeProvider extends Component{
    constructor(){
        super()
        this.state ={
            theme: "light"
        }
    }
changeTheme = () => {
    this.setState(prevState => ({
        theme: prevState.theme === "light" ? "dark" :"light"
    }))
}
    render(){
        console.log(this.props.children)
        return(
            <div>
                <Provider value={{
                        theme:this.state.theme,
                        changeTheme: this.changeTheme
                    }}>
                        {this.props.children}
                </Provider>
                
            </div>
        )
   
    }

}

export const withTheme = C => props => (
    <Consumer>
        {value => <C {...value} {...props}/>}
    </Consumer>
)

export default ThemeProvider 