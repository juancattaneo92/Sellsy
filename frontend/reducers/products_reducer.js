import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT,
} from '../actions/product_actions';

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      newState = action.products;
      return newState;
      case RECEIVE_PRODUCT:
        return action.payload.products;
    default:
      return state;
  }
};

export default productsReducer;