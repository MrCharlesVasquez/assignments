import React from 'react'
import ReactDom from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import './style.css'

ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter> 
    , document.getElementById('root'));