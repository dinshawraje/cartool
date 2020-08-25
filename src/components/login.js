import React, {Component} from 'react';
import './login.css';
import {Redirect} from 'react-router-dom'


export default class Login extends Component{
    constructor(){
        super()
        this.state = {
          username: "",
          password: "",
          loggedIn: false
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    
      }
      onChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
      submitForm(e) {
        e.preventDefault();
        const {username, password} = this.state;
        if((username === "rachita" && password === "12345678") || (username==="singhalr" && password==="Micro")){
          const token = Math.random().toString(36).substr(2);
          localStorage.setItem("token", token);
          this.setState({
            loggedIn: true
          })
        }
      }
      render() {
        if(this.state.loggedIn) {
          return <Redirect to= {{
                pathname: '/serviceinfo',
                state: { username: this.state.username }
            }}/>
        }
        return (
          <div>
            <h1 className="greetingstyle1">Please Log In</h1>
          <form onSubmit= {this.submitForm}>
            <label>Username: </label>
            <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} /> <br/><br/>
            <label>Password: </label>
            <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
    
            <input type="submit" name="submit" value="Login" className="button3" onClick={this.onSubmit} />
          </form>
          </div>
        )
      }
    }
    