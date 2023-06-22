import { combineReducers } from 'redux';
import { animalsReducer } from './animalsReducer';
import { usersReducer } from './usersReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  animals: animalsReducer,
  users: usersReducer,
  auth: authReducer,
});

export default rootReducer;
