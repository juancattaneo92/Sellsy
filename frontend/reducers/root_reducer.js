import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui.reducer';
import usersReducer from './users_reducer';

const rootReducer = combineReducers({
  errors: errorsReducer,
  entities: entitiesReducer,
  session: sessionReducer,
  ui: uiReducer,
});

export default rootReducer;
