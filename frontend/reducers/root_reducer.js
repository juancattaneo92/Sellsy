import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui.reducer';

const rootReducer = combineReducers({
  errors: errorsReducer,
  entitites: entitiesReducer,
  session: sessionReducer,
  ui: uiReducer,
});

export default rootReducer;
