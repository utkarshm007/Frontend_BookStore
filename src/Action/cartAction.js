import axios from "axios";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEMS,
  SAVE_SHIPPING_INFO,
  REMOVE_ITEM_FROM_CART_FAIL,
  REMOVE_ITEM_FROM_CART_SUCCESS,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAIL,
  CART_ITEM_REQUEST,
  CART_ITEM_SUCCESS,
  CART_ITEM_FAIL,
  ADD_TO_CART_FAIL,
} from "../Constants/cartConstants";
import { CLEAR_ERRORS } from "../Constants/productConstant";
import { baseURL } from "./baseUrl";


export const addItemsToCart =
  (userId, productId, quantity, size) => async (dispatch, getState) => {
    try {
      dispatch({ type: ADD_TO_CART });
      // const requestData = { userId, productId, quantity, size };
      const jwtToken = localStorage.getItem("JWTToken");

      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwtToken}` // Set the Bearer token here
        }
      }; 
      // const config = { headers: { "Content-Type": "application/json" } };
      const data = await axios.post(
        `${baseURL}/cart`,
        userId, productId, quantity, size, config,
      );

      // console.log("cartaction38",data)

      dispatch({
        type: ADD_TO_CART,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_TO_CART_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const removeItemsToCart =
  (userId, productId) => async (dispatch, getState) => {
    try {
      const res = await axios.delete(
        `${baseURL}/cart/item/${userId}`,
        { data: { productId } }
      );
      dispatch({ type: REMOVE_ITEM_FROM_CART_SUCCESS, payload: productId });
    } catch (error) {
      dispatch({
        type: REMOVE_ITEM_FROM_CART_FAIL,
        payload: error.message,
      });
    }
  };

export const getCartItems = (userId) => async (dispatch) => {
  try {
    dispatch({ type: CART_ITEM_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const data = await axios.get(
      `${baseURL}/cart/${userId}`,
      config
    );
    // console.log(data);
    dispatch({ type: CART_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CART_ITEM_FAIL, payload: error.message });
  }
};

export const updateCart =
  (userId, productId, quantity) => async (dispatch, getState) => {
    try {
      const data = await axios.put(`${baseURL}/cart/${userId}`, {
        productId,
        quantity,
      });
      dispatch({ type: UPDATE_CART_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UPDATE_CART_FAIL,
        payload: error.message,
      });
    }
  };

export const saveShippingInfo = (data) => async (dispatch, getState) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
