import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct, fetchProducts } from '../../actions/product_actions';
import ProductShow from './product_show';
import { openModal, closeModal } from "../../actions/modal_actions";
import { requestReviews } from "../../actions/review_actions";
import { fetchAllCartItems, createCartItem , updateCartItem} from "../../actions/shopping_cart_actions";


const mSTP = (state, ownProps) => {
  return {
   product: state.entities.products[ownProps.match.params.productId],
   reviews: Object.values(state.entities.reviews),
   userId: state.session.id,
   userCartItems: Object.values(state.entities.cartItems)
  };
};

const mDTP = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    requestReviews: productId => dispatch(requestReviews(productId)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    updateCartItem: (data, item) => dispatch(updateCartItem(data, item)),
    createCartItem: (product) => dispatch(createCartItem(product)),
    fetchAllCartItems: () => dispatch(fetchAllCartItems()),
  };
};

export default connect(mSTP, mDTP)(ProductShow);