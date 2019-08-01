import Constants from './Constants';

// Register
export const signUp = data => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = await getFirebase();
  const firestore = await getFirestore();
  dispatch({ type: Constants.AUTH_START });
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);

    // verify email
    // var user = firebase.auth().currentUser;
    // await user.sendEmailVerification();

    console.log({ userID: res.user.uid });

    await firestore
      .collection('users')
      .doc(res.user.uid)
      .set({
        firstName: data.firstName,
        lastName: data.lastName
      });

    dispatch({ type: Constants.AUTH_SUCCESS });
  } catch (err) {
    dispatch({ type: Constants.AUTH_FAIL, payload: err.message });
  }
  dispatch({ type: Constants.AUTH_END });
};

// Login
export const signIn = data => async (dispatch, getState, { getFirebase }) => {
  const firebase = await getFirebase();
  dispatch({ type: Constants.AUTH_START });
  try {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    dispatch({ type: Constants.AUTH_SUCCESS });
  } catch (err) {
    dispatch({ type: Constants.AUTH_FAIL, payload: err.message });
  }
  dispatch({ type: Constants.AUTH_END });
};

// Logout
export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = await getFirebase();

  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.error(err);
  }
};
