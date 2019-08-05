import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from './components/Auth';
import Profile from "./components/Profile";
import { withUser } from "./context/UserProvider.js"


const App = (props) => {

    const { token, user, logout } = props
    return (
        <div>
            <Switch>
                <Route exact path="/" render={rProps => ! tokern ? 
                                                    <Auth { ... rProps}/> :
                                                    <Redirect to="/profile"/>}
                                                    }/>
                <Route path="/profile" render={rProps =>}
            </Switch>
        </div>
    )

}

export default withUser(App)