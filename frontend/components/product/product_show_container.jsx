import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct, fetchProducts } from '../../actions/product_actions';
import ProductShow from './product_show';
import { openModal, closeModal } from "../../actions/modal_actions";
import { requestReviews } from "../../actions/review_actions";
import { fetchAllCartItems, updateCartItem, createCartItem } from '../../actions/shopping_cart_actions';

const mSTP = (state, ownProps) => {
  return {
   product: state.entities.products[ownProps.match.params.productId],
   reviews: Object.values(state.entities.reviews),
   user: state.session.user,
   cartItems: Object.values(state.entities.cartItems),
   userCartItems: state.entities.cartItems,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    requestReviews: productId => dispatch(requestReviews(productId)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchAllCartItems: () => dispatch(fetchAllCartItems()),
    createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
    updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem))
  };
};

export default connect(mSTP, mDTP)(ProductShow);