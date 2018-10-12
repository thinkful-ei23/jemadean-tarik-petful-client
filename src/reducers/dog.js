import catData from '../dogData.json';
import actions from '../actions';

const initialState = {
    data: catData[0],
    error: null,
    loading: false
}

export const dogReducer = (state=initialState, action) => {
  if (action.type === actions.FETCH_DOG_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }

  if (action.type === actions.FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      data: action.dog,
      loading: false
    });
  }

  if (action.type === actions.FETCH_DOG_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }

  if (action.type === actions.ADOPT_DOG_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }

  if (action.type === actions.FETCH_DOG_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }

  return state;
}