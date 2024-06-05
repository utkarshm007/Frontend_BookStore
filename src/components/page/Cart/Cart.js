import React, { useEffect, useState } from "react";
import { Minus, Plus, Trash } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CommonBanner from "../../CommonBanner/CommonBanner";
import Breadcrumbs from "./../../Breadcrumbs/Breadcrumbs";
import {
  updateCart,
  removeItemsToCart,
  getCartItems,
} from "../../../Action/cartAction";
import { clearErrors } from "../../../Action/cartAction";
import { useAlert } from "react-alert";
import "./cart.css";
import Loader from "../../Layout/Loader";
import PriceItem from "./priceItem";

const Cart = () => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState();
  const [loadingg, setLoading] = useState(true); // State to manage loading
  const [loginMessage, setLoginMessage] = useState(false);
  const navigate = useNavigate();
  const alert = useAlert();

  const { cartItems, error, loading } = useSelector((state) => state.cart);

  //console.log(userId);

  const incressQuantity = (productId, quantity, availableQty) => {
    const newQty = quantity + 1;
    if (availableQty <= quantity) {
      return;
    }
    // console.log(productId, newQty, quantity, availableQty);
    dispatch(updateCart(userId, productId, newQty));
  };

  const decreseQuantity = (productId, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    // console.log(productId, quantity);
    dispatch(updateCart(userId, productId, newQty));
  };

  const deleteCartItems = async (productId) => {
    dispatch(removeItemsToCart(userId, productId))
      .then(() => {
        alert.success("Item deleted to cart successfully!");
        dispatch(getCartItems(userId));
      })
      .catch((error) => {
        alert.error("Failed to delete item to cart");
      });
  };

  const handleQtyChange = (e, productId) => {
    const newQty = Number(e.target.value);
    dispatch(updateCart(userId, productId, newQty));
  };

  const checkoutHandlear = () => {
    navigate("/cart/address");
  };
  // useEffect(
  //   (productId, newQty) => {

  //     const storedUserId = localStorage.getItem("id");

  //     if (storedUserId) setUserId(storedUserId);


  //     if (storedUserId) {
  //       setUserId(storedUserId);
  //       dispatch(getCartItems(storedUserId));
  //     } else {
  //       // Hide loader and display message prompting login
  //       setLoading(false);
  //       setLoginMessage(true); // State to handle the login message
  // }
  //   [dispatch, error, alert, userId]
  // );

  useEffect(() => {
    const storedUserId = localStorage.getItem("id");

    if (storedUserId) {
      setUserId(storedUserId);
      dispatch(getCartItems(storedUserId));
    } else {
      // Hide loader and display message prompting login
      setLoading(false);
      setLoginMessage(true); // State to handle the login message
    }
  }, [dispatch]);

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

  return (
    <>
      <CommonBanner pageTitle={"Cart Details"} />
      <Breadcrumbs breadcumr1="Cart Details" />
      {userId == null ? (
        <div className="container mx-auto py-32">
          <h2 className="text-5xl text-center mb-8">
            Please Login to view your cart
          </h2>
          <Link to={"/login"} className="btn-checkout">
            Login Now
          </Link>
        </div>
      ) : (
        <>
          {loading && cartItems ? (
            <Loader />
          ) : (
            <div>
              {cartItems?.data?.items?.length > 0 ? (
                <div className="container mx-auto my-5">
                  <form className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <section
                      aria-labelledby="cart-heading"
                      className="cart-listing-border lg:col-span-8 rounded-md "
                    >
                      <h2 id="cart-heading" className="sr-only">
                        Items in your shopping cart
                      </h2>
                      <div
                        role="list"
                        className="divide-y divide-gray-200 cart-items"
                      >
                        {cartItems &&
                          cartItems.data &&
                          cartItems.data.items &&
                          cartItems.data.items.map((product, productIdx) => (
                            <div
                              key={product._id}
                              className="grid md:grid-cols-5 grid-cols-4 gap-2"
                            >
                              <div div className="col-span-1 img-section">
                                <img
                                  src={product.productMainImage}
                                  alt={product.name}
                                  className="product-cart-image"
                                />
                              </div>

                              <div className="col-span-3">
                                <div className="cart-product-details py-4">
                                  <label className="text-xl font-bold">
                                    {product.name}
                                  </label>
                                  <p className="text-xl font-medium">
                                    {"Total Pages : "+product.sizeVariation}
                                  </p>
                                  <p className="text-xl font-medium ">
                                    Price:{" "}
                                    <del>
                                      <sub className="text-red-800">
                                        &#8377;{product.productMrp}
                                      </sub>
                                    </del>{" "}
                                    &#8377;
                                    {product.productPrice * product.quantity}
                                  </p>
                                  <p className="mt-2">
                                    Vendor: BookStore PVT. LTD
                                  </p>
                                </div>
                              </div>
                              <div className="col-span-1 qty-delete-section p-2">
                                <button
                                  type="button"
                                  className="btn-delete"
                                  onClick={() =>
                                    deleteCartItems(product.productId)
                                  }
                                >
                                  <Trash size={20} />
                                </button>
                                <div className="flex justify-between">
                                  <button
                                    type="button"
                                    className="qty btn-minus"
                                    onClick={() =>
                                      decreseQuantity(
                                        product.productId,
                                        product.quantity
                                      )
                                    }
                                  >
                                    <Minus />
                                  </button>
                                  <input
                                    type="text"
                                    className="text-center w-full bg-transparent border border-black font-bold text-lg qty"
                                    readOnly
                                    value={product.quantity}
                                    onChange={(e) =>
                                      handleQtyChange(
                                        e,
                                        product.productId,
                                        product.quantity
                                      )
                                    }
                                  />
                                  <button
                                    type="button"
                                    className="qty btn-add"
                                    onClick={() =>
                                      incressQuantity(
                                        product.productId,
                                        product.quantity,
                                        product.availableQty
                                      )
                                    }
                                  >
                                    <Plus />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                      <button
                        onClick={checkoutHandlear}
                        type="button"
                        className="btn-checkout"
                        disabled={!cartItems?.data?.items?.length}
                      >
                        Process To Checkout
                      </button>
                    </section>

                    <section
                      aria-labelledby="summary-heading"
                      className="rounded-md cart-listing-border lg:col-span-4 md:mt-0 mt-3 lg:p-0"
                    >
                      <h2 className="border-b px-4 py-3 text-2xl font-bold sm:p-4">
                        Price Details
                      </h2>

                      <div className=" space-y-1 px-4 py-4">
                        <div className="flex items-center justify-between">
                          <dt className="text-lg font-semibold text-dark">
                            Price:
                          </dt>
                          <dd className="text-sm font-bold text-gray-900">
                            ₹ {price}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between pt-4">
                          <dt className="flex items-center text-lg font-semibold text-dark">
                            <span>Discount:</span>
                          </dt>
                          <dd className="text-sm font-bold text-green-700">
                            ₹ {discount}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between border-y border-dashed py-4 ">
                          <dt className="flex text-lg font-semibold text-dark">
                            Total Amount:
                          </dt>
                          <dd className="text-base font-bold text-gray-900">
                            ₹ {price - discount}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between py-4">
                          <dt className="flex text-lg font-semibold text-dark">
                            <span>Delivery Charges:</span>
                          </dt>
                          <dd className="text-sm font-bold text-green-700">
                            {shippingCharges}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between border-y border-dashed py-4 ">
                          <dt className="text-base font-bold text-gray-900">
                            Sub Total:
                          </dt>
                          <dd className="text-base font-bold text-gray-900">
                            ₹ {totalAmount}
                          </dd>
                        </div>
                      </div>
                      <div className="pt-2 pb-4 font-bold text-green-700 text-center">
                        You will save ₹ {discount} on this order
                      </div>
                    </section>
                  </form>
                </div>
              ) : (
                <div className="container mx-auto">
                  <h2 className="text-5xl text-center py-32">
                    Cart Is Empty...!
                  </h2>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Cart;
