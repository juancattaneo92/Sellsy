import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT,
} from '../actions/product_actions';
// import { RECEIVE_CART_ITEM, 
//         RECEIVE_CART_ITEM_PRODUCTS 
// } from '../actions/shopping_cart_actions'
// import { RECEIVE_CURRENT_USER } from '../actions/session_actions'

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      newState = action.products;
      return newState;
      case RECEIVE_PRODUCT:
        return action.payload.products;
      // case RECEIVE_CART_ITEM_PRODUCTS:
      //   return Object.assign({}, state, action.payload.products)
      // case RECEIVE_CURRENT_USER:
      //   return Object.assign({}, state, action.payload.products)
    default:
      return state;
  }
};

export default productsReducer;