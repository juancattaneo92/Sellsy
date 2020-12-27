import { connect } from 'react-redux';
import CartItems from './cart_items';
import { fetchCartItem, fetchAllCartItems, deleteCartItem, createCartItem } from '../../actions/shopping_cart_actions';

const mapStateToProps = state => {
  return ({
    userCartItems: state.entities.cartItems,
    curentUserId: state.session.user.id,
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAllCartItems: () => dispatch(fetchAllCartItems()),
    fetchCartItem: cartItem => dispatch(fetchCartItem(cartItem)),
    createCartItem: cartItem => dispatch(createCartItem(cartItem)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);