import React from 'react';
import {  Route, Switch, Link} from 'react-router-dom';
import signupFormContainer from './session_form/signup_form_container'
import loginFormContainer from './session_form/login_form_container'

export default () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Welcome to Sellsy</h1>
      </Link>
    </header>
    <Switch>
        <Route path="/" component={signupFormContainer}/>
        <Route path="/login" component={loginFormContainer} />
    </Switch>
  </div>
);