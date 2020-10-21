import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';


const Header = ({ user, logout, openModal}) => {

  const logginIn = () => (
    <div className="header-button">
      <button className="header-button1" onClick={() => openModal('login')}>Sign in</button>
    </div>
  );
  const loggingOut = (user, logout) => (
    <div className="parent-welcome">
      <div className="header-button"> 
        <button className="header-button1" onClick={logout}>Sign out</button>
      </div>
    </div>
  );

  return (
    <div className="header-main">
      <div className="header-box">
        <Link to="/" className="header-link"><div className="logo">Sellsy</div></Link>
        <div>
          <input type="text" className="search-bar"></input>
        </div>   
        <div className="session-but">
        {user ? loggingOut(user, logout) : logginIn()}
        </div>
        <div className="shopping-cart">
          {/* <span style="font-sspanze:24px" className="fa">&#xf07a;</span> */}
        Cart</div>
      
      </div>
    </div>
  );
};


const mSTP = (state) => {
  return {
    user: state.session.user
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
