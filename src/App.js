import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm.js";
import SignupForm from "./components/SignupForm.js";
import welcomeForm from "./components/welcomeForm.js";

function App() {
  return (<Router>
    <div className="App">
      
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={LoginForm} />
            <Route path="/sign-in" component={LoginForm} />
            <Route path="/welcome" component={welcomeForm} />
            <Route path="/sign-up" component={SignupForm} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;