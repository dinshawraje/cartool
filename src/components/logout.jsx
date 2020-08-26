import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Logout.css'

export default class Logout extends Component {
    constructor() {
        super() 
        localStorage.removeItem("token");        
    }
    render() {
        return (
            <div>
                <h1 className="logoutHead">You have been logged out!</h1>
                <Link to ="/" className="loginbutton">Login</Link>
            </div>
        )
    }
}
