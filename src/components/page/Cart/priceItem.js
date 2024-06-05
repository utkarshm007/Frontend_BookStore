import React, { useEffect } from "react";
import { getCartItems } from "../../../Action/cartAction";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";

const PriceItem = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  let totalPrice = 0;
  let totalDiscount = 0;
  if (cartItems && cartItems.data && cartItems.data.items) {
    cartItems.data.items.forEach((product) => {
      totalPrice += product.productPrice * product.quantity;
      totalDiscount +=
        (product.productMrp - product.productPrice) * product.quantity;
    });
  }
  const price = totalPrice + totalDiscount;
  const discount = totalDiscount;
  const shippingCharges = Math.round((price / 100) * 5);
  const gst = 0;
  const totalAmount = price - discount + shippingCharges + gst;

  useEffect(() => {
    const storedUserId = localStorage.getItem("id");
    dispatch(getCartItems(storedUserId));
  }, [dispatch]);

  return (
    <div>
      
      <Cart
        totalPrice={totalPrice}
        totalAmount={totalAmount}
        gst={gst}
        shippingCharges={shippingCharges}
        discount={discount}
      />
    </div>
  );
};

export default PriceItem;
