import { connect } from 'react-redux';
import CartIndex from './cart_index';
import { fetchCartItem, fetchAllCartItems, deleteCartItem, createCartItem, updateCartItem } from '../../actions/shopping_cart_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => {
  if (!state.session.currentUser){
    return null;
  }
  return ({
    userCartItems: state.entities.cartItems,
    curentUserId: state.session.currentUser.id,
    productsArr: Object.values(state.entities.cartItems)
  })
};

const mDTP = dispatch => {
  return ({
    fetchAllCartItems: () => dispatch(fetchAllCartItems()),
    fetchCartItem: cartItem => dispatch(fetchCartItem(cartItem)),
    createCartItem: cartItem => dispatch(createCartItem(cartItem)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
    updateCartItem: cartItem => dispatch(updateCartItem(cartItem)),
    openModal: (modal) => {
      dispatch(openModal(modal))
    },
  })
};

export default connect(mSTP, mDTP)(CartIndex);