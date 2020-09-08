import React, {Component} from 'react';
import './login.css';
import {Redirect} from 'react-router-dom';


export default class SignUp extends Component{
    constructor(){
        super()
        this.state = {
          username: "",
          password: "",
          email: "",
          roles: [
            {
              name: "Servicemanager",
              useful: true
            },
            {
              name: "Admin",
              useful: false
            }
          ],
          checked: {}

        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    
      }
      onChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
      filterHandler = event => {
        const { name } = event.target;
        this.setState(previousState => {
          const checked = { ...previousState.checked };
          checked[name] = !checked[name];
          return { checked };
        });
      };
      submitForm = (event) => {
        alert('A form was submitted: ' + this.state);
        console.log(this.state.roles);
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
          }).then(function(response) {
            console.log(response)
            return response.json();
          });
    
        event.preventDefault();
    }
    
      render() {
        const { roles, checked } = this.state;

        let filteredRoles = roles.filter(role => checked[role.name]);
        filteredRoles = filteredRoles.length === 0 ? roles : filteredRoles;
    
        return (
          <div>
          <form onSubmit= {this.submitForm}  className="loginForm">
            <label>Username: </label>
            <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} /> <br/><br/>
            <label>Email: </label>
            <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.onChange} /><br/><br/>
            <label>Password: </label>
            <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} /> <br/><br/>
                      <input
            type="checkbox"
            name="Servicemanager"
            value={checked["Servicemanager"]}
            onClick={this.filterHandler}
          />  Servicemanager <br/>
          <input
            type="checkbox"
            name="Admin"
            value={checked["Admin"]}
            onClick={this.filterHandler}
          /> Admin

            <input type="submit" name="submit" value="Signup" className="button3" onClick={this.onSubmit} />
          </form>
          </div>
        )
      }
    }
    