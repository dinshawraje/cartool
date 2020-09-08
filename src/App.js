import React from 'react';
import './App.css';
import Login from './components/login';
import ServiceInfo from './components/serviceinfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailsForm from './components/details';
import Logout from './components/logout';
import SignUp from './components/signup'

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>

        <Route path="/logout" component={Logout} />
        <Route exact path="/serviceinfo" component={ServiceInfo}/>
        <Route exact path="/details" component={DetailsForm}/>
        <Route exact path="/logout" component={Logout}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
