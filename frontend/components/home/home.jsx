import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { signout } from '../actions/session_actions';

const Home = () => {
  <div>
    <h1>Sellsy</h1>
  </div>
}


const mSTP = (state) => {
  return {
    user: state.session.user
  };
};
const mDTP = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
  };
};
export default connect(mSTP, mDTP)(Home);















