import Constants from './Constants';

const initialState = {
  error: null,
  loading: false
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case Constants.AUTH_START: {
      return { ...state, loading: true, error: null };
    }

    case Constants.AUTH_END: {
      return { ...state, loading: false };
    }

    case Constants.AUTH_FAIL: {
      return { ...state, error: payload };
    }

    case Constants.AUTH_SUCCESS: {
      return { ...state, error: false };
    }

    default:
      return state;
  }
}
