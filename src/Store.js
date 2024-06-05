import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk}  from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";

import * as Sentry from "@sentry/react";

import {
  brandReducer,
  categoryReducer,
  productDetailsReducer,
  productReducer,
  reviewReducer,
  searchProductReducer,
} from "./Reducers/productReducers";
import {
  contactRequestReduces,
  otpLoginReducer,
  userAddressDataReducer,
  userDetailsReducer,
  userImageUploadReducer,
  userProfileDataReducer,
  userReducer,
} from "./Reducers/userReducers";
import { cartReducer } from "./Reducers/cartReducers";
import {
  getOneOrderDetailsReducer,
  orderCheckReducer,
  orderDetailsReducer,
} from "./Reducers/orderReducers";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["category", "brand", "cart", "orderDetails"], 
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    products: productReducer,
    user: userReducer,
    productDetails: productDetailsReducer,
    userDetails: userDetailsReducer,
    UserProfileData: userProfileDataReducer,
    otpLogin: otpLoginReducer,
    cart: cartReducer,
    order: orderCheckReducer,
    category: categoryReducer,
    brand: brandReducer,
    orderDetails: orderDetailsReducer,
    userImage: userImageUploadReducer,
    review: reviewReducer,
    userAddress: userAddressDataReducer,
    searchProduct: searchProductReducer,
    contactRequest: contactRequestReduces,
    oneOrderDetails: getOneOrderDetailsReducer,
  })
);

// let initialState = {
//   cart: {
//     cartItems: localStorage.getItem("cartItems")
//       ? JSON.parse(localStorage.getItem("cartItems"))
//       : [],
//     shippingInfo: localStorage.getItem("shippingInfo")
//       ? JSON.parse(localStorage.getItem("shippingInfo"))
//       : {},
//   },
// };

const sentryMiddleware = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (error) {
    Sentry.captureException(error);
    throw error;
  }
};

const store = createStore(
  // reducer,
  // initialState,
  persistedReducer,

  // composeWithDevTools(applyMiddleware(sentryMiddleware, thunk))
  (applyMiddleware(sentryMiddleware, thunk))

);

const persistor = persistStore(store);

export { store, persistor };
