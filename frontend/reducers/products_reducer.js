import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT,
} from '../actions/product_actions';

const productsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      newState = action.products;
      return newState;
    case RECEIVE_PRODUCT:
      // debugger
      return action.payload.products;
    default:
      return oldState;
  }
};

export default productsReducer;