import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

// action types
const SIGNIN_SUCCESS = 'users/signin-success';
const SIGNIN_FAILURE = 'users/signin-failure';

const SIGNUP_SUCCESS = 'users/signup-success';
const SIGNUP_FAILURE = 'users/signup-failure';

const SIGNOUT = 'users/signout';

// action creators
const signInSuccess = user => {
  return {
    type: SIGNIN_SUCCESS,
    payload: {
      user,
    },
  };
};

const signInFailure = () => {
  return {
    type: SIGNIN_FAILURE,
  };
};

export const signIn = (email, password) => async dispatch => {
  // firebase logic
  try {
    const user = await auth.signInWithEmailAndPassword(email, password);
    console.log(user);
    dispatch(signInSuccess(email));
  } catch {
    dispatch(signInFailure());
  }
};

const signUpSuccess = user => {
  return {
    type: SIGNUP_SUCCESS,
    payload: {
      user,
    },
  };
};

const signUpFailure = () => {
  return {
    type: SIGNUP_FAILURE,
  };
};

export const signUp = (email, password) => async dispatch => {
  // firebase logic
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await createUserProfileDocument(user);
    dispatch(signUpSuccess(email));
  } catch (err) {
    console.log(err.message);
    dispatch(signUpFailure());
  }
};

export const checkLogin = () => async dispatch => {
  const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    console.log('auth:', userAuth);
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        console.log({
          user: {
            id: snapShot.id,
            ...snapShot.data(),
          },
        });
        dispatch(signInSuccess(snapShot.data().email));
      });
      console.log('existUser:', userAuth.email);
      dispatch(signInSuccess(userAuth.email));
    }
    dispatch(signInFailure());
  });
  return () => unsubscribeFromAuth();
};

export const signOut = () => {
  return {
    type: SIGNOUT,
  };
};

const initialState = {
  user: null,
  isProfile: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isProfile: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isProfile: true,
      };
    case SIGNIN_FAILURE:
    case SIGNUP_FAILURE:
    case SIGNOUT:
      return {
        ...state,
        user: null,
      };
    default:
  }
  return state;
};

export default userReducer;
