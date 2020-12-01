import { connect } from 'react-redux';
import { fetchAllCartItems, 
         createCartItem, 
         deleteCartItem,
         updateCartItem,
         deletedCartItem  }
from '../../actions/shopping_cart_actions';
import CartItems from './cart_items';
import {fetchProduct, fetchProducts} from '../../actions/product_actions';

const mSTP = (state) => {
  return {
    userCartItems: Object.values(state.entities.cartItems),
    currentUserId: state.session.id,
  };
}

const mDTP = (dispatch) => {
  return {
    fetchAllCartItems: () => dispatch(fetchAllCartItems()),
    createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
    deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId)),
    deletedCartItem: (id) => dispatch(deletedCartItem(id)),
    updateCartItem: (data, id) => dispatch(updateCartItem(data, id)),
    fetchProducts: () => dispatch(fetchProducts()),
    fetchProduct: (productId) => dispatch(fetchProduct(productId))
};
}

export default connect(mSTP, mDTP)(CartItems);