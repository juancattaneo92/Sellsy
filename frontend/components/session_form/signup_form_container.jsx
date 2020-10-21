import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SignupForm from './signup_form';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Register',
    navLink: <Link to="/login">Log In</Link>,
  };
};

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button onClick={ () => dispatch(openModal('login'))}>Login</button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(SignupForm);