import {
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_SUCCESS,
} from "../Constants/productConstant";
import {
  CLEAR_ERRORS,
  EDIT_USER_ADDRESS_FAIL,
  EDIT_USER_ADDRESS_REQUEST,
  EDIT_USER_ADDRESS_RESET,
  EDIT_USER_ADDRESS_SUCCESS,
  LOAD_USER_ADDRESS_FAIL,
  LOAD_USER_ADDRESS_REQUEST,
  LOAD_USER_ADDRESS_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  OTP_VERIFICATION_FAIL,
  OTP_VERIFICATION_REQUEST,
  OTP_VERIFICATION_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  SEND_OTP_FAIL,
  SEND_OTP_REQUEST,
  SEND_OTP_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  ADDRESS_DELETE_SUCCESS,
  ADDRESS_DELETE_FAIL,
  USER_UPDATE_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPLOAD_USER_IMAGE_FAIL,
  UPLOAD_USER_IMAGE_REQUEST,
  UPLOAD_USER_IMAGE_SUCCESS,
  ADD_USER_ADDRESS_SUCCESS,
  ADD_USER_ADDRESS_FAIL,
  ADD_USER_ADDRESS_REQUEST,
  CONTECT_REQUEST_REQUEST,
  CONTECT_REQUEST_SUCCESS,
  CONTECT_REQUEST_FAIL,
  GET_USER_ADDRESS_REQUEST,
  GET_USER_ADDRESS_SUCCESS,
  GET_USER_ADDRESS_FAIL,
} from "../Constants/userConstants";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { userDetails: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
        isAuthenticated: true,
      };
    case USER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const userProfileDataReducer = (state = { address: {} }, action) => {
  switch (action.type) {
    case LOAD_USER_ADDRESS_REQUEST:
    case EDIT_USER_ADDRESS_REQUEST:
    case USER_UPDATE_REQUEST:
      case GET_USER_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOAD_USER_ADDRESS_SUCCESS:
    case EDIT_USER_ADDRESS_SUCCESS:
    case ADDRESS_DELETE_SUCCESS:
    case UPDATE_USER_SUCCESS:
    case ADD_USER_ADDRESS_SUCCESS:
      case GET_USER_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        address: action.payload,
        isFetched: true,
        isUpdated: true,
      };
    case LOAD_USER_ADDRESS_FAIL:
    case EDIT_USER_ADDRESS_FAIL:
    case ADDRESS_DELETE_FAIL:
    case UPDATE_USER_FAIL:
    case ADD_USER_ADDRESS_FAIL:
      case GET_USER_ADDRESS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case EDIT_USER_ADDRESS_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const userAddressDataReducer = (state = { address: {} }, action) => {
  switch (action.type) {
    case ADD_USER_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_USER_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        address: action.payload,
      };

    case ADD_USER_ADDRESS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const userImageUploadReducer = (state = {}, action) => {
  switch (action.type) {
    case UPLOAD_USER_IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_USER_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        userImage: action.payload,
      };
    case UPLOAD_USER_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const otpLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case SEND_OTP_REQUEST:
    case OTP_VERIFICATION_REQUEST:
      return {
        loading: true,
      };
    case SEND_OTP_SUCCESS:
    case OTP_VERIFICATION_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case SEND_OTP_FAIL:
    case OTP_VERIFICATION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const contactRequestReduces = (state = {}, action) => {
  switch (action.type) {
    case CONTECT_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CONTECT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        contact: action.payload,
      };

    case CONTECT_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
