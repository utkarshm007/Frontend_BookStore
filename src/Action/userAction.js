import { CLEAR_ERRORS } from "../Constants/productConstant";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  LOAD_USER_ADDRESS_REQUEST,
  LOAD_USER_ADDRESS_SUCCESS,
  LOAD_USER_ADDRESS_FAIL,
  LOGOUT_SUCCESS,
  EDIT_USER_ADDRESS_REQUEST,
  EDIT_USER_ADDRESS_SUCCESS,
  EDIT_USER_ADDRESS_FAIL,
  SEND_OTP_REQUEST,
  SEND_OTP_SUCCESS,
  SEND_OTP_FAIL,
  OTP_VERIFICATION_REQUEST,
  OTP_VERIFICATION_SUCCESS,
  OTP_VERIFICATION_FAIL,
  ADDRESS_DELETE_SUCCESS,
  ADDRESS_DELETE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  UPLOAD_USER_IMAGE_FAIL,
  UPLOAD_USER_IMAGE_SUCCESS,
  UPLOAD_USER_IMAGE_REQUEST,
  ADD_USER_ADDRESS_SUCCESS,
  ADD_USER_ADDRESS_FAIL,
  ADD_USER_ADDRESS_REQUEST,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,
  CONTECT_REQUEST_REQUEST,
  CONTECT_REQUEST_SUCCESS,
  CONTECT_REQUEST_FAIL,
  GET_USER_ADDRESS_REQUEST,
  GET_USER_ADDRESS_SUCCESS,
  GET_USER_ADDRESS_FAIL,
} from "../Constants/userConstants";

import axios from "axios";
import { baseURL } from "./baseUrl";



export const login = (userData, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `${baseURL}/login`,
      { userData, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    if (data.status === true) {
      // console.log(data);
      localStorage.setItem("JWTToken", data.jwtToken);
      localStorage.setItem("id", data.data._id);
      localStorage.setItem("name", data.data.name);
      localStorage.setItem("email", data.data.email);
      localStorage.setItem("contact", data.data.contact);
      localStorage.setItem("gender", data.data.gender);

    }
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const config = { headers: { "Content-type": "application/json" } };
    const { data } = await axios.post(`${baseURL}/users`, userData, config);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};





export const uploadeUserImage = (formData, userId) => async (dispatch) => {
  try {
    dispatch({ type: UPLOAD_USER_IMAGE_REQUEST });
    // const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `${baseURL}/users-image/${userId}`,
      formData
      // config
    );

    dispatch({ type: UPLOAD_USER_IMAGE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPLOAD_USER_IMAGE_FAIL, payload: error.response.data.message });
  }
};

export const loadUser = (userId) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const config = { headers: { "Content-type": "application/json" } };
    const { data } = await axios.get(`${baseURL}/users/${userId}`, config);
    dispatch({ type: LOAD_USER_SUCCESS, payload: data });
    // console.log(data);
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updateUser = (userId, data) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });
    // const config = { headers: { "Content-type": "application/json" } };
    const { res } = await axios.put(
      `${baseURL}/users/${userId}`, data
      // config
    );
    dispatch({ type: USER_UPDATE_SUCCESS, payload: res });
    // console.log(data);
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getUserDetails = (userId) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const { data } = await axios.get(`${baseURL}/users/${userId}`);
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message });
  }
};

export const getUserAddress = (userId) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_ADDRESS_REQUEST });
    // const config = { headers: { "Content-type": "application/json" } };
    const { data } = await axios.get(`${baseURL}/users-address/${userId}`);
    dispatch({ type: LOAD_USER_ADDRESS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LOAD_USER_ADDRESS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getUserAddressDetails = (addressId) => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_ADDRESS_REQUEST });
    // const config = { headers: { "Content-type": "application/json" } };
    const { data } = await axios.get(`${baseURL}/users-address/${addressId}`);
    dispatch({ type: GET_USER_ADDRESS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_USER_ADDRESS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const addUserAddress = (updatedAddressData, jwtToken) => async (dispatch) => {
  try {
    dispatch({ type: ADD_USER_ADDRESS_REQUEST });
    const config = { headers: { Authorization: `Bearer ${jwtToken}`, "Content-type": "application/json" } };
    const { data } = await axios.post(`${baseURL}/users-address`, updatedAddressData, config);
    dispatch({ type: ADD_USER_ADDRESS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_USER_ADDRESS_FAIL,
      payload: error.message,
    });
  }
};

export const deleteAddress = (addressId) => async (dispatch) => {
  try {
    const data = await axios.delete(`${baseURL}/users-address/${addressId}`);
    dispatch({ type: ADDRESS_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADDRESS_DELETE_FAIL, payload: error.response.data.message });
  }
};

export const editUserAddress =
  (addressId, updatedAddressData) => async (dispatch) => {
    try {
      dispatch({ type: EDIT_USER_ADDRESS_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(
        `${baseURL}/users-address/update/${addressId}`,
        updatedAddressData,
        config
      );
      dispatch({ type: EDIT_USER_ADDRESS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: EDIT_USER_ADDRESS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const sendOtp = (userData) => async (dispatch) => {
  try {
    dispatch({ type: SEND_OTP_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(`${baseURL}/send-otp`, userData, config);
    dispatch({ type: SEND_OTP_SUCCESS, payload: data });
    localStorage.setItem("id", data.data.userId);
  } catch (error) {
    dispatch({ type: SEND_OTP_FAIL, payload: error.response.data.message });
  }
};

export const verifyOtp = (userId, userOtp) => async (dispatch) => {
  try {
    dispatch({ type: OTP_VERIFICATION_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `${baseURL}/otp-verification`,
      userId,
      userOtp,
      config
    );
    dispatch({ type: OTP_VERIFICATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: OTP_VERIFICATION_FAIL,
      payload: error.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};


export const contentRequest = (userData) => async (dispatch) => {
  try {
    dispatch({ type: CONTECT_REQUEST_REQUEST });
    const config = { headers: { "Content-type": "application/json" } };
    const { data } = await axios.post(`${baseURL}/contact-request`, userData, config);
    dispatch({ type: CONTECT_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CONTECT_REQUEST_FAIL,
      payload: error.response.data.message,
    });
  }
};