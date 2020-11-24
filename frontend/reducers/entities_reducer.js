import { combineReducers } from 'redux';
import productsReducer from './products_reducer';
import usersReducer from './users_reducer';
import reviewsReducer from './reviews_reducer';
import categoriesReducer from './categories_reducer';

const entitiesReducer = combineReducers({
  user: usersReducer,
  products: productsReducer,
  reviews: reviewsReducer,
  categories: categoriesReducer,
});

export default entitiesReducer;