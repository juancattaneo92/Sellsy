import React from 'react';
import {  Route, Switch, Link, Redirect} from 'react-router-dom';
import signupFormContainer from './session_form/signup_form_container'
import loginFormContainer from './session_form/login_form_container'
import Modal from './modal/modal'
import Header from './header/header'

const App = () => (
  <div>
    <Modal />
    <header>
      <Link to="/" className="header-link">
        <h1>Sellsy</h1>
      </Link>
    </header>
    <Header/>
    <Switch>
        {/* <Route path="/login" component={loginFormContainer} />
        <Route path="/signup" component={signupFormContainer}/> */}
        <Redirect to="/"/>
    </Switch>
  </div>
);

export default App;