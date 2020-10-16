import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

// const _nullUser = Object.freeze({
//   user: null
// });
const modalReducer = (state = null, action) =>{
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}

export default modalReducer;