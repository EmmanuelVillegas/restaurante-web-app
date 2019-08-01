import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Firebase config
const config = {
  apiKey: 'AIzaSyCibaFQ4npWCasFGu5Gb4soSA6ZncM2HCs',
  authDomain: 'drestobar-22a03.firebaseapp.com',
  databaseURL: 'https://drestobar-22a03.firebaseio.com',
  projectId: 'drestobar-22a03',
  storageBucket: 'drestobar-22a03.appspot.com',
  messagingSenderId: '176366748105',
  appId: '1:176366748105:web:bb13cd9a786dd523'
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  attachAuthIsReady: true // attaches auth is ready promise to store
};

firebase.initializeApp(config);
firebase.firestore();

export { firebase, rrfConfig };
