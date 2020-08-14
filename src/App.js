import React from 'react';
import './App.css';
import Login from './components/login';
import ServiceInfo from './components/serviceinfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/serviceinfo" component={ServiceInfo}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
