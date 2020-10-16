import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';


const Header = ({ user, logout, openModal}) => {

  const sessionLinks = () => (
    <div className="header-button">
      <button className="header-button1" onClick={() => openModal('login')}>Sign in</button>
    </div>
  );
  const greeting = (user, logout) => (
    <div className="parent-welcome">
      <div className="header-button"> 
        {/* <Link to="/" className="header-link"><h1 className="logo">Sellsy</h1></Link> */}
        <button className="header-button1" onClick={logout}>Sign out</button>
      </div>
      <div className="header-welcome">
        <h2>Welcome Back, {user.f_name}!</h2>
        </div>
    </div>
  );

  return (
    <div className="header-main">
      <Link to="/" className="header-link"><div className="logo">Sellsy</div></Link>
        <div className="session-but">
            { user ? greeting(user, logout) : sessionLinks()}
        </div>
      </div>
  );
};


const mSTP = (state) => {
  return {
    user: state.session.id
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
