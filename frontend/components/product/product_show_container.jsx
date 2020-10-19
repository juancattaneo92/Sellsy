import { connect } from 'react-redux';
import React from 'react';
import { fetchProduct } from '../../actions/product_actions';
import ProductShow from './product_show';

const mSTP = (state, ownProps) => {
  return {
   product: state.products[ownProps.match.params.productId]
  };
};

const mDTP = (dispatch) => {
  return {
    fetchProduct: (productId) => dispatch(fetchProduct(productId))
  };
};

export default connect(mSTP, mDTP)(ProductShow);