import React, {Component} from 'react';
import ServiceInfo from './serviceinfo';

class Login extends Component{
    constructor(props){
        super(props);
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
        this.setState({
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
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
            forms = null;
        }
        else{
            
            button = <LoginButton className="buttonstyle" onClick={this.handleLoginClick}/>;
            forms = <Forms userName = {userName} passWord = {passWord} onUserChange = {this.handleUsername} onPassChange = {this.handlePassword}/>;
        }
    
    return(
        <div>
            <Greeting isLoggedIn = {isLoggedIn} userName={userName}/>
            {forms}
            <div className="buttonstyle">
            {button}
            </div>
        </div>
    );
    }
}


function UserGreeting(props){
    return <div>
        <h1>Welcome {props.userName}!</h1>
        <ServiceInfo UserName = {props.userName}/>
    </div>
}

function GuestGreeting(props){
    return <h1>Please Log In</h1>
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
    return( <div>
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
function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting userName={props.userName}/>
    }
    return <GuestGreeting userName={props.userName}/>
}

function LoginButton(props){
    return(
        <button onClick = {props.onClick}>Login</button>
    );
}

function LogoutButton(props){
    return(
       <button onClick = {props.onClick}>Logout</button>
    );
}

export default Login;