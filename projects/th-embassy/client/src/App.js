import React, { Component } from "react"
import Auth from "./components/Auth"
import NavBar from "./components/NavBar.js"
import { Switch, Route, Redirect } from "react-router-dom"
import { withUser } from "./context/UserProvider.js"
import ShopPage from "./components/ShopPage.js"
import ProtectedRoute from "./shared/ProtectedRoute.js"
import Home from "./components/Home.js"
import Checkout from "./components/Checkout.js"


class App extends Component {

    render() {
        const { token, logout, user } = this.props

        return (
            <div>
                {token && <NavBar token={token} logout={logout} />}
                <Switch>

                    <Route
                        exact path="/"
                        render={rProps => !token
                            ?
                            <Auth {...rProps} />
                            :
                            <Redirect to="/home" />
                        } />

                    <ProtectedRoute
                        token={token}
                        path="/ShopPage"
                        redirectTo="/"
                        component={ShopPage}
                        user={user}
                    />

                    <ProtectedRoute
                        token={token}
                        path="/home"
                        redirectTo="/"
                        component={Home}
                        user={user}
                    />


                    <ProtectedRoute
                        token={token}
                        path="/Checkout"
                        redirectTo="/"
                        component={Checkout}
                        user={user}
                    />


                </Switch>
            </div>
        )
    }
}
export default withUser(App)