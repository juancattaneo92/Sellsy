import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';


const Header = ({ user, logout, openModal}) => {

  const sessionLinks = () => (
    <div>
    <nav className="login-signup">
      {/* <Link to="/" className="header-link"><h1 className="logo">Sellsy</h1></Link> */}
      <button onClick={() => openModal('login')}>Login</button>
    </nav>
    </div >
  );
  const greeting = (user, logout) => (
    <hgroup className="header-group">
      {/* <Link to="/" className="header-link"><h1 className="logo">Sellsy</h1></Link> */}
      <button className="header-button" onClick={logout}>Log Out</button>
      <h2 className="header-name">Welcome Back, {user.f_name}!</h2>
    </hgroup>
  );

  return (
    <div className="header-main">
      <Link to="/" className="header-link"><h1 className="logo">Sellsy</h1></Link>
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
