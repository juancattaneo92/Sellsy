import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';


const Header = ({ user, logout, openModal}) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')}>Login</button>
      &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Sign up</button>
    </nav>
  );
  const greeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {user.f_name}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return (
    user ? greeting(user, logout) : sessionLinks()
  );
};


const mSTP = (state) => {
  return {
    id: state.session.id
  };
};

const mDTP = dispatch => {
  return{
  logout: () => dispatch(logout()),
  openModal: (modal) => {
    dispatch(openModal(modal))
  }
}
};

export default connect(mSTP, mDTP)(Header);
