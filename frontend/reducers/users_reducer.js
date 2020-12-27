import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PRODUCT 
} from '../actions/product_actions';
// import { RECEIVE_CART_ITEMS 
// } from '../actions/shopping_cart_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user
      return newState
    case RECEIVE_PRODUCT:
      return Object.assign({}, oldState, action.payload.users)
    // case RECEIVE_CART_ITEMS:
    //   return Object.assign({}, oldState, action.payload.users)
    default:
      return oldState;
  }
};

export default usersReducer;
