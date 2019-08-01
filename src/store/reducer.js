import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

// Reducers
import authReducer from './auth/reducer';

const reducers = combineReducers({
  firebase: firebaseReducer,
  auth: authReducer
});

export default reducers;
