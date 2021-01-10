import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = user => {
  return{
    type: RECEIVE_CURRENT_USER,
    user
}};


export const receiveSessionErrors = errors => {
  return{
  type: RECEIVE_SESSION_ERRORS,
  errors
}};

export const logoutCurrentUser = () => {
  return{
  type: LOGOUT_CURRENT_USER,
}};

export const signup = (user) => dispatch => {
  return SessionAPIUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)), 
    error => dispatch(receiveSessionErrors(error.responseJSON)))
};

export const login = (user) => dispatch => {
  return SessionAPIUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)), 
    error => dispatch(receiveSessionErrors(error.responseJSON)))
  };

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(
    (result) => dispatch(logoutCurrentUser()))
  };

export const clearErrors = () => dispatch => dispatch(removeErrors())