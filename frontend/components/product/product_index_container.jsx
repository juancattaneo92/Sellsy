import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import ProductIndex from './product_index';
import { requestReviews } from "../../actions/review_actions"

const mSTP = (state) => {
  return {
    products: Object.values(state.entities.products),
    user: state.session.user,
    reviews: Object.values(state.entities.reviews)
  };
};

const mDTP = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    requestReviews: productId => dispatch(requestReviews(productId))
  };
};

export default connect(mSTP, mDTP)(ProductIndex);