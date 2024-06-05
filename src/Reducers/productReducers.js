import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
  GET_BRAND_FAIL,
  GET_BRAND_DETAILS_REQUEST,
  GET_CATEGORY_DETAILS_REQUEST,
  GET_CATEGORY_DETAILS_SUCCESS,
  GET_BRAND_DETAILS_SUCCESS,
  GET_BRAND_DETAILS_FAIL,
  GET_CATEGORY_DETAILS_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  GET_REVIEW_DETAILS_SUCCESS,
  GET_REVIEW_DETAILS_REQUEST,
  GET_REVIEW_DETAILS_FAIL,
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAILURE,
} from "../Constants/productConstant";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return { loading: true, products: [] };

    case ALL_PRODUCT_SUCCESS:
      return { loading: false, products: action.payload.data };

    case ALL_PRODUCT_FAIL:
      return { loading: false, error: action.payload };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload.data,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
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

export const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
    case GET_CATEGORY_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload,
      };
    case GET_CATEGORY_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload,
      };
    case GET_CATEGORY_FAIL:
    case GET_CATEGORY_DETAILS_FAIL:
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

export const brandReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BRAND_REQUEST:
    case GET_BRAND_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        brand: action.payload,
      };
    case GET_BRAND_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        brandDetails: action.payload,
      };
    case GET_BRAND_FAIL:
    case GET_BRAND_DETAILS_FAIL:
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

export const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_REVIEW_REQUEST:
    case GET_REVIEW_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_REVIEW_SUCCESS:
    case GET_REVIEW_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        review: action.payload,
      };
    case NEW_REVIEW_FAIL:
    case GET_REVIEW_DETAILS_FAIL:
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

export const searchProductReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        searchProduct: action.payload,
      };
    case SEARCH_PRODUCTS_FAILURE:
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
