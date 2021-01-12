import * as UserAPIUtil from "../util/user_api_util";

const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = userId => {
  return {
    type: RECEIVE_USER,
    userId
  }
}

export const fetchUser = (userId) => dispatch => {
  return UserAPIUtil.getUser(userId).then(
    userId => dispatch(receiveUser(userId))
  )
};