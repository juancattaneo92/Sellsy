import { combineReducers } from 'redux';
import productsReducer from './products_reducer';
import usersReducer from './users_reducer';
import reviewsReducer from './reviews_reducer'

const entitiesReducer = combineReducers({
  user: usersReducer,
  products: productsReducer,
  reviews: reviewsReducer,
});

export default entitiesReducer;