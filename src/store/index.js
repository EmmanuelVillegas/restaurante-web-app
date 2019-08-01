import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Myddlewares
import thunk from 'redux-thunk';

// Firebase
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { firebase, rrfConfig } from '../config/firebase';

import rootReducer from './reducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase),
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);

export default store;
