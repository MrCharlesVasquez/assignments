import React from "react"
import { Route, Redirect } from "react-router-dom"

const ProtectedRoute = props => {

    const { token, path, redirectTo, component: C, ...rest} = props

    return(
        token 
        ? 
        <Route path={path} render={rProps => <C {...rest}{...rProps}/>}/>
        :
        <Redirect to={redirectTo}/>
    )
}

export default ProtectedRoute