import actions from '../actions';

const initialState = {
    data: null,
    error: null,
    loading: false
}

export const catReducer = (state=initialState, action) => {
  if (action.type === actions.FETCH_CAT_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }

  if (action.type === actions.FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      data: action.cat,
      loading: false
    });
  }

  if (action.type === actions.FETCH_CAT_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }

  if (action.type === actions.ADOPT_CAT_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }

  if (action.type === actions.ADOPT_CAT_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }

  return state;
}