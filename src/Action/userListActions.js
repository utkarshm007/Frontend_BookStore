// actions/userListActions.js
import axios from 'axios';

export const FETCH_USER_LIST_REQUEST = 'FETCH_USER_LIST_REQUEST';
export const FETCH_USER_LIST_SUCCESS = 'FETCH_USER_LIST_SUCCESS';
export const FETCH_USER_LIST_FAILURE = 'FETCH_USER_LIST_FAILURE';

export const fetchUserList = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USER_LIST_REQUEST });
    try {
      const response = await axios.get('http://localhost:3001/api/admin/users');
      dispatch({ type: FETCH_USER_LIST_SUCCESS, payload: response.data.data });
    } catch (error) {
      dispatch({ type: FETCH_USER_LIST_FAILURE, error: error.message });
    }
  };
};
