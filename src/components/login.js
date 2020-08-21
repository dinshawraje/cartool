import React, {Component} from 'react';
import './login.css';


class Login extends Component{
    constructor(){
        super();
        this.state = {isLoggedIn:false, username : '',
        password : '',opened:true};
       
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }
 
    handleLoginClick()
    {   const {opened} = this.state;
        this.setState({
            isLoggedIn:true,
            opened: !opened
        });
        this.props.history.push({
            pathname: '/serviceinfo',
            state: { username: this.state.username }
          });
    }

    handleLogoutClick()
    {   const {opened} = this.state;
        this.setState({
            isLoggedIn:false,
            opened: !opened
        });
    }
    
    handleUsername(username){
               this.setState({
                   username:username
               });
            }

    handlePassword(password){
        this.setState(
            {
            password:password
        });
    }
    render()
    {
        const isLoggedIn = this.state.isLoggedIn;
        const { opened } = this.state;
        const userName = this.state.username;
        const passWord = this.state.password;
        let button;
        let forms;

        if(isLoggedIn && !opened){
            forms = null;
        }
        else{
            
            button = <LoginButton onClick={this.handleLoginClick}/>;
            forms = <Forms userName = {userName} passWord = {passWord} onUserChange = {this.handleUsername} onPassChange = {this.handlePassword}/>;
        }
    
    return(
        <div className="headerStyle">
            <h1 className="greetingstyle1">Please Log In</h1>
            {forms}
            <div className="buttonstyle">
            {button}
            </div>
        </div>
    );
    }
}  

class Forms extends Component{

    constructor(props){
    super(props);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
}
handleUsername(e){
   this.props.onUserChange(e.target.value);
}

handlePassword(e){
    this.props.onPassChange(e.target.value);
}
render(){
    return( <div style={{marginLeft:10+'em'}}>
                  <form>
                     <label>Username: </label>
                     <input type="text" value={this.props.userName} onChange={this.handleUsername}/>
                     <br/><br/>
                     <label>Password:&nbsp;&nbsp;</label>
                     <input type="password" value={this.props.passWord} onChange={this.handlePassword}/>
                  </form>
          </div>
    );
    }
}

function LoginButton(props){
    return(
        <button className="button3" onClick = {props.onClick}>Login</button>
    );
}


export default Login;