import { connect } from 'react-redux';
import React from 'react';
import { fetchProduct } from '../../actions/product_actions';
import ProductShow from './product_show';
import { openModal, closeModal } from "../../actions/modal_actions";
import {requestReviews} from "../../actions/review_actions";

const mSTP = (state, ownProps) => {
  return {
   product: state.entities.products[ownProps.match.params.productId],
   reviews: Object.values(state.entities.reviews),
   userId: state.session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    requestReviews: productId => dispatch(requestReviews(productId)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(ProductShow);