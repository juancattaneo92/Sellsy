import * as CartItemApiUtil from "../util/shopping_cart_util";

export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const RECEIVE_ALL_CART_ITEMS = "RECEIVE_ALL_CART_ITEMS";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";
// export const DELETE_ALL_CART_ITEMS = "DELETE_ALL_CART_ITEMS";

const receiveCartItem = cartItem => {
  return {
    type: RECEIVE_CART_ITEM,
    cartItem
  }
}

const receiveAllCartItems = (cartItems) => {
  return ({
    type: RECEIVE_ALL_CART_ITEMS,
    cartItems
  })
}

const destroyCartItem = (cartItem) => {
  return ({
    type: DELETE_CART_ITEM,
    cartItem
  })
}

// const deleteCartItems = (cartItems) => {
//   return ({
//     type: DELETE_ALL_CART_ITEMS,
//     cartItems
//   })
// }

export const fetchCartItem = (cartItemId) => dispatch => {
  return CartItemAPIUtil.fetchCartItem(cartItemId)
    .then(cartItem => dispatch(receiveCartItem(cartItem)))
  
}

export const fetchAllCartItems = () => (dispatch) => {
  return CartItemApiUtil.fetchAllCartItems()
    .then(cartItems => dispatch(receiveAllCartItems(cartItems)))
}

export const createCartItem = (cartItem) => (dispatch) => {
  return CartItemApiUtil.createCartItem(cartItem)
    .then(cartItem => dispatch(receiveCartItem(cartItem)))
}

export const updateCartItem = (cartItem) => (dispatch) => {
  return CartItemApiUtil.updateCartItem(cartItem)
    .then(cartItem => dispatch(receiveCartItem(cartItem)))
}

export const deleteCartItem = (cartItemId) => (dispatch) => {
  // debugger
  return CartItemApiUtil.deleteCartItem(cartItemId)
    .then( () => dispatch(destroyCartItem(cartItemId)))
}

// export const deleteAllCartItems = () => (dispatch) => {
//   return CartItemApiUtil.deleteAllCartItems()
//     .then((cartItems) => dispatch(deleteCartItems(cartItems)))
// };