import React, { useEffect, useState } from "react";

import { getOrderDetils } from "../../../Action/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom"
import "./orders.css";
 
const Orders = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [userId, setUserId] = useState();
  const { error, loading, orderDetails } = useSelector(
    (state) => state.orderDetails
  );
  console.log(orderDetails);

 
  useEffect(() => {
    const storeUserID = localStorage.getItem("id");

    if (storeUserID) setUserId(storeUserID);

    dispatch(getOrderDetils(storeUserID));
    // dispatch(getOrderDetils("65fb29205f47618af1ee2dc0"));
  }, []);

 
  return (
    <>
    {/* console.log("orderdetails",{orderDetails}) */}
    {console.log("here")}
    {console.log(orderDetails)}
      <div className="container mx-auto lg:px-0">
        <div className="mx-auto max-w-2xl lg:max-w-7xl px-3 order-listing">
        
          {orderDetails &&
            orderDetails.data &&  Array.isArray(orderDetails.data) &&
            orderDetails.data.map((order) => (
              <div key={order.orderId} className="lg:col-span-12 border">
                <li className="flex py-6 sm:py-6 ml-3">
                  {order.items.map((item, index) => (
                    <div className="grid md:grid-cols-4 grid-cols-1" key={index}>
                      <div className="col-span-1">
                        <div className="flex justify-center items-center px-4">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="sm:h-38 w-32 rounded-md object-contain object-center"
                          />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div>
                              <div className="flex justify-between">
                                <h3 className="text-lg">
                                  <a href={order.href} className="font-semibold text-black"  >
                                    {item.name}
                                  </a>
                                </h3>
                              </div>
                              <div className="mt-1 flex flex-col text-sm">
                              <p className="border-l border-gray-200  text-sm text-gray-500">
                                  Date: {new Date(order.orderDate).toLocaleDateString()}{" "}
                                    {new Date(order.orderDate).toLocaleTimeString()}

                                  </p>
                                <p className="border-l border-gray-200  text-sm text-gray-500">
                                  Quantity: {item.quantity}
                                </p>
                              </div>
                              <div className="mt-1">
                                <p className="border-l border-gray-200  text-sm text-gray-500">
                                  Price:  &#8377;{item.price}
                                </p>
                              </div>
                              <div className="mt-1">
                                <p className="border-l border-gray-200  text-sm text-gray-500">
                                  SubTotal:  &#8377;{order.subTotal}
                                </p>
                              </div>
                              <div className="mt-1">
                                <p className="border-l border-gray-200  text-sm text-gray-500">
                                  Order ID: <b className="text-lg">{order.orderId}</b>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1">
                        <div className="review-section order-listing-btn mt-3">
                          {/* <p>Arriving Tomorrow by 6 PM</p> */}
                          <button type="button" className="web-btn-2 mx-2 mb-2">
                            Write Review
                          </button>
                          <Link to={`/me/orderdetails/${order.orderId}`} className="web-btn-2 p-2 text-center mx-2 mb-2">
                            Order Details
                          </Link>
                          <p className="text-md mt-3"> Status:
                            <span className="text-green-600 font-bold text-xl mt-5 capitalize">
                              {order.status}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </li>
              </div>
            ))}
        </div>
      </div>
    </>

    // <div className=" mx-auto lg:px-0 flex flex-row">
    //   <div className="flex flex-wrap px-25 justify-center">
    //     {orderDetails &&
    //       orderDetails.data &&
    //       orderDetails.data.map((order) => (
    //         <div key={order.orderId} className=" border p-2 mb-4">
    //           <div className="flex flex-row gap-4">
    //             {order.items.map((item, index) => (
    //               <React.Fragment key={index}>
    //                 <div className="card w-full shadow-xl flex flex-row ">
    //                   <figure className="w-24">
    //                     <img src={item.imageUrl} alt={item.name} />
    //                   </figure>
    //                   <div className="card-body">
    //                     <h2 className="text-xl">{item.name}</h2>
    //                     <p>{item.price}</p>
    //                     <div className="card-actions justify-end">
    //                       <button className="btn border border-red-600 bg-transparent ">Review Product</button>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </React.Fragment>
    //             ))}
    //           </div>
    //         </div>
    //       ))}
    //   </div>
    // </div>
  );
};

export default Orders;
