// reducers/userListReducer.js
import { FETCH_USER_LIST_REQUEST, FETCH_USER_LIST_SUCCESS, FETCH_USER_LIST_FAILURE } from '../Action/userListActions';

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_LIST_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: '',
      };
    case FETCH_USER_LIST_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export default userListReducer;
