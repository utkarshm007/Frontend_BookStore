import {
  CLEAR_ERROR,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_PAYMENT_FAIL,
  CREATE_ORDER_PAYMENT_REQUEST,
  CREATE_ORDER_PAYMENT_SUCCESS,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ONE_ORDER_DETAILS_FAIL,
  GET_ONE_ORDER_DETAILS_REQUEST,
  GET_ONE_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAIL,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
} from "../Constants/orderConstants";

export const orderCheckReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
    case CREATE_ORDER_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ORDER_SUCCESS:
    case CREATE_ORDER_PAYMENT_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case CREATE_ORDER_FAIL:
    case CREATE_ORDER_PAYMENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const orderDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        orderDetails: action.payload,
      };
    case GET_ORDER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const getOneOrderDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ONE_ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ONE_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        oneOrderDetails: action.payload,
      };
    case GET_ONE_ORDER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
