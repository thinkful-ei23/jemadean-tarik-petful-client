import {API_BASE_URL} from '../config';

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = (cat) => ({
  type: FETCH_CAT_SUCCESS,
  cat
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = (error) => ({
  type: FETCH_CAT_ERROR,
  error
});

export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  fetch(`${API_BASE_URL}/api/cat`, {
    method: 'GET'
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(data => {
    console.log('async cat data', data)
    dispatch(fetchCatSuccess(data));
  })
  .catch(err => {
    dispatch(fetchCatError(err));
  });
};

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST
});

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = (error) => ({
  type: ADOPT_CAT_ERROR,
  error
});

export const adoptCat = () => dispatch => {
  dispatch(adoptCatRequest());
  fetch(`${API_BASE_URL}/api/cat`, {
    method: 'DELETE'
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    dispatch(fetchCat());
  })
  .catch(err => {
    dispatch(adoptCatError(err));
  });
};

