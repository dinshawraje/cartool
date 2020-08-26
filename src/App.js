import React from 'react';
import './App.css';
import Login from './components/login';
import ServiceInfo from './components/serviceinfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailsForm from './components/details';
import Logout from './components/Logout';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/logout" component={Logout} />
        <Route exact path="/serviceinfo" component={ServiceInfo}/>
        <Route exact path="/details" component={DetailsForm}/>
        <Route exact path="/Logout" component={Logout}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
