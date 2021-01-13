import { combineReducers } from 'redux';
import productsReducer from './products_reducer';
import usersReducer from './users_reducer';
import reviewsReducer from './reviews_reducer';
import categoryReducer from './category_reducer';
import cartItemReducer from './cart_item_reducer';

const entitiesReducer = combineReducers({
  user: usersReducer,
  products: productsReducer,
  reviews: reviewsReducer,
  category: categoryReducer,
  cartItems: cartItemReducer,
});

export default entitiesReducer;