import {  
      RECEIVE_CART_ITEM, 
      RECEIVE_CART_ITEMS, 
      REMOVE_CART_ITEM,
      REMOVE_ALL_CART_ITEMS, }
from '../actions/shopping_cart_actions';

const cartReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {

    case RECEIVE_CART_ITEMS:
      return action.cartItems  
    case RECEIVE_CART_ITEM:
      newState[action.cartItem.id] = action.cartItem
      return newState
    case REMOVE_CART_ITEM:
      delete newState[action.id]
      return action.allCartItems
    case REMOVE_ALL_CART_ITEMS:
      return {}
    default:
      return state
  }
}
export default cartReducer;