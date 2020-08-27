import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Logout extends Component {
    constructor() {
        super() 
        localStorage.removeItem("token");     
    }
    render() {
        return (
            <div>
                <h1>You are logout</h1>
                <Link to ="/">Login</Link>
            </div>
        )
    }
}
