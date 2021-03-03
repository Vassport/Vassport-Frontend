import { auth } from '../firebase/firebase.utils';

// action types
const SINGIN_SUCCESS = 'users/signin-success';
const SIGNIN_FAILURE = 'users/signin-failure';

// action creators
const signInSuccess = user => {
  return {
    type: SINGIN_SUCCESS,
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

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGIN_SUCCESS:
      return {
        user: action.payload.user,
      };
    case SIGNIN_FAILURE:
      return {
        user: null,
      };
    default:
  }
  return state;
};

export default userReducer;
