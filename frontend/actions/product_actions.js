import * as ProductAPIUtil from '../util/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
// export const RECEIVE_SEARCH_PRODUCTS = 'RECEIVE_SEARCH_PRODUCTS';


export const receiveAllProducts = (products) => {
  return {
    type: RECEIVE_ALL_PRODUCTS,
    products
  }
};
export const receiveProduct = (payload) => {
  return {
    type: RECEIVE_PRODUCT,
    payload,
  }
};

// export const receiveSearchProducts = () => {
//   return {
//     type: RECEIVE_SEARCH_PRODUCTS,

//   }
// }

export const fetchProducts = () => dispatch => {
  return ProductAPIUtil.fetchProducts().then(
   result => {
     dispatch(receiveAllProducts(result))
   });
};

export const fetchProduct = (productId) => dispatch => {
  return ProductAPIUtil.fetchProduct(productId).then(
    result => dispatch(receiveProduct(result)))
};

export const getSearchProducts = (query) => dispatch => {
  return ProductAPIUtil.getSearchProducts(query)
    .then(products => {
      return dispatch(receiveAllProducts(products))
    },
      error => dispatch(receiveErrors(error.responseJSON))
    )
}