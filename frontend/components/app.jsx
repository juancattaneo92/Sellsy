import React from 'react';
import {  Route, Switch, Link, Redirect} from 'react-router-dom';
import signupFormContainer from './session_form/signup_form_container'
import loginFormContainer from './session_form/login_form_container'
import Modal from './modal/modal'
import Header from './header/header'

const App = () => (
  <div>
    <Modal />
    <Header/>
    <Switch>  <Redirect to="/"/>  </Switch>
  </div>
);

export default App; 