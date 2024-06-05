import axios from "axios";
import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_PAYMENT_FAIL,
  CREATE_ORDER_PAYMENT_REQUEST,
  CREATE_ORDER_PAYMENT_SUCCESS,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_DETAILS_FAIL,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ONE_ORDER_DETAILS_FAIL,

} from "../Constants/orderConstants";
import { baseURL } from "./baseUrl";


export const orderCheckout =
  (
    userId,
    items,
    totalCost,
    paymentMethod,
    shippingAddress,
    status,
    shippingCharges
  ) =>
    async (dispatch) => {
      try {
        dispatch({ type: CREATE_ORDER_REQUEST });
        // const config = { headers: { "Content-Type": "application/json" } };
        const jwtToken = localStorage.getItem("JWTToken");

        const config = {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwtToken}` // Set the Bearer token here
          }
        }; 
        const { data } = await axios.post(
          `${baseURL}/checkout`,
          {
            userId,
            items,
            totalCost,
            paymentMethod,
            shippingAddress,
            status,
            shippingCharges,
          },
          config
        );
        localStorage.setItem("lastOrderId", data.orderId);
        dispatch({
          type: CREATE_ORDER_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: CREATE_ORDER_FAIL,
          payload: error.message,
        });
      }
    };

export const orderPaymentCallback =
  (userId, orderId, transactionId, transactionTime, paymentStatus) =>
    async (dispatch) => {
      try {
        dispatch({ type: CREATE_ORDER_PAYMENT_REQUEST });

        const submitData = {
          userId,
          orderId,
          transactionId,
          transactionTime,
          paymentStatus
        };

        const jwtToken = localStorage.getItem("JWTToken");

        // const config = {
        //   headers: {
        //     "Content-Type": "application/json",
        //     "Authorization": `Bearer ${jwtToken}` // Set the Bearer token here
        //   }
        // };  


        const config = {
          // headers: { "Content-Type": "application/json" },
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwtToken}` // Set the Bearer token here
          },
          url: `${baseURL}/payment/callback`,
          method: 'POST',
          data: submitData,
        }

        // console.log(config);

        const { data } = await axios.request(config);
        // console.log(data);
        dispatch({
          type: CREATE_ORDER_PAYMENT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: CREATE_ORDER_PAYMENT_FAIL,
          payload: error.message,
        });
      }
    };

export const getOrderDetils = (userId) => async (dispatch) => {
  try {
    dispatch({ type: 'GET_ORDER_DETAILS_REQUEST' });
    const jwtToken = localStorage.getItem("JWTToken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwtToken}` // Set the Bearer token here
      }
    };    
    // console.log("configoaction",config,jwtToken)
    const data = await axios.get(`${baseURL}/order/${userId}`, config);
    // console.log("hwlllo",data);
    dispatch({ type: 'GET_ORDER_DETAILS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'GET_ORDER_DETAILS_FAIL', payload: error.message, });
  }
};

export const getOneOrderDetil = (orderId) => async (dispatch) => {
  try {
    dispatch({ type: 'GET_ONE_ORDER_DETAILS_REQUEST' });
    const jwtToken = localStorage.getItem("JWTToken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwtToken}` // Set the Bearer token here
      }}


  //  const config = { headers: { "Content-Type": "application/json" } };
    const data = await axios.get(`${baseURL}/order-details/${orderId}`, config);
    // console.log(data);
    dispatch({ type: 'GET_ONE_ORDER_DETAILS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'GET_ONE_ORDER_DETAILS_FAIL', payload: error.message, });
  }
};
