import * as ProductAPIUtil from '../util/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

export const receiveAllProducts = (products) => {
  return {
    type: RECEIVE_ALL_PRODUCTS,
    products
  }
};

export const receiveProduct = (product) => {
  return {
    type: RECEIVE_PRODUCT,
    product
  }
};


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