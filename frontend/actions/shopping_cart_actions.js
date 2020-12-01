import * as CartAPIUtil from '../util/shopping_cart_util';

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const REMOVE_ALL_CART_ITEMS = 'REMOVE_ALL_CART_ITEMS';
export const DELETED_CART_ITEM = 'DELETED_CART_ITEM';


export const receiveCartItems = (cartItems) => {
  return {
    type: RECEIVE_CART_ITEMS,
    // cartItems: result.cartItems,
    // products
    cartItems
}};

export const receiveCartItem = (cartItem) => {
  return {
  type: RECEIVE_CART_ITEM,
  cartItem
}};


export const removeCartItem = (cartItemId, allCartItems) => {
  return {
  type: REMOVE_CART_ITEM,
  cartItemId,
  allCartItems
}};

export const deletedCartItem = (id) => {
  return {
    type: DELETED_CART_ITEM,
    id
  }};

export const removeAllItems = () => {
  return{
    type: REMOVE_ALL_CART_ITEMS,
  }};

export const fetchAllCartItems = () => dispatch => {
  return CartAPIUtil.fetchAllCartItems()
    .then(cartItems => dispatch(receiveCartItems(cartItems)))
}

export const fetchCartItem = (cartItemId) => dispatch => {
  return CartAPIUtil.fetchCartItem(cartItemId)
    .then(cartItem => dispatch(receiveCartItem(cartItem)))
}

export const createCartItem = (cartItem) => dispatch => {
  return CartAPIUtil.createCartItem(cartItem)
    .then(cartItem => dispatch(receiveCartItem(cartItem)))
}
export const updateCartItem = (data, id) => dispatch => {
  return CartAPIUtil.updateCartItem(data, id)
    .then((cartItem) => dispatch(receiveCartItem(cartItem)))
}

export const deleteCartItem = (cartItemId) => dispatch => {
  return CartAPIUtil.deleteCartItem(cartItemId)
    // .then(() => CartAPIUtil.fetchAllCartItems())
    .then((allCartItems) => dispatch(removeCartItem(cartItemId, allCartItems)))
}