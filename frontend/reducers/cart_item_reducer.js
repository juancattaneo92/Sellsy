import { RECEIVE_CART_ITEM,
         RECEIVE_ALL_CART_ITEMS, 
         DELETE_CART_ITEM, 
         DELETE_ALL_CART_ITEMS } from '../actions/shopping_cart_actions';

const cartItemReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CART_ITEM:
      newState[action.cartItem.id] = action.cartItem
      return newState;
        //  return action.cartItem
    case RECEIVE_ALL_CART_ITEMS:
      // return Object.assign([], action.cartItems);
      // debugger
      return action.cartItems;
    case DELETE_CART_ITEM:
      delete newState[action.cartItem.id];
      return newState;
    case DELETE_ALL_CART_ITEMS:
      return action.cartItems
    default:
      return state
  }
}

export default cartItemReducer;
