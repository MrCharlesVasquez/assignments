import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App.js"
import UserProvider from "./context/UserProvider.js"
import ItemProvider from "./context/ItemProvider.js"



ReactDOM.render(
    <BrowserRouter>
            <UserProvider>
        <ItemProvider>
                <App />
        </ItemProvider>
            </UserProvider>
    </BrowserRouter>
    , document.getElementById("root"))