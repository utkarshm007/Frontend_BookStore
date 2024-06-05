import {
  ADD_TO_CART,
  ADD_TO_CART_FAIL,
  CART_ITEM_FAIL,
  CART_ITEM_REQUEST,
  CART_ITEM_SUCCESS,
  REMOVE_ITEM_FROM_CART_FAIL,
  REMOVE_ITEM_FROM_CART_SUCCESS,
  SAVE_SHIPPING_INFO,
  UPDATE_CART_FAIL,
  UPDATE_CART_SUCCESS,
} from "../Constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload || [],
      };

    case CART_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        cartItems: action.payload,
        error: null,
      };

    case UPDATE_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload || [],
      };

    case CART_ITEM_SUCCESS: {
      return {
        ...state,
        loading: false,
        cartItems: action.payload || [],
        error: null,
      };
    }

    case ADD_TO_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case REMOVE_ITEM_FROM_CART_SUCCESS:
      return {
        ...state,
        cartItems:
          state.cartItems || [].filter((i) => i.product !== action.payload),
        error: null,
      };
    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: {
          ...state.shippingInfo,
          ...action.payload,
        },
      };

    case UPDATE_CART_FAIL:
    case REMOVE_ITEM_FROM_CART_FAIL:
    case CART_ITEM_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
