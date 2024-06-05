import React, { useEffect, useState } from "react";
import orderPlaced from "../../../asset/images/order-placed.png";
import { Link } from "react-router-dom";
import CommonBanner from "../../CommonBanner/CommonBanner";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import "./confirmation.css"



const OrderConfiramation = () => {
  const [orserId , setOrderId] = useState()
  const [userName , setUserName] = useState()

  useEffect(()=>{
    setOrderId(localStorage.getItem("lastOrderId"))
    setUserName(localStorage.getItem("name"))
  },[])
  return (
    <>
    
      <CommonBanner pageTitle={"Order Confirmation"} />
      <Breadcrumbs breadcumr1={"Order Confirmation"} />
      <div className="container mx-auto mb-5 flex flex-col items-center pt-5 pb-10 italic font-semibold">
        <div className="justify-center mb-4">
          <img src={orderPlaced} alt="" className="h-48" />
        </div>
        <div className="flex flex-col items-center py-5 text-center">
          <span className="text-3xl italic">Order placed successfully,</span>
          <span className="text-xl mt-2 italic">Thank you!</span>

          <span className="text-sm mt-3 confirmation-text">Dear <span className="text-green-600 underline">{userName}</span> your order has been place successfully. <br />  Your order id: <span className="text-green-600 underline">{orserId}</span>, <br /> <Link to={"/me/orders"} className="text-green-600">Click Here </Link> to Check your Details</span>
        </div>
        <div className="btn-section gap-3">
          <Link to={"/products"} className="btn-shopping" >
            Back To Shopping
          </Link>
          <Link to={"/me/orders"} className="btn-order" >
            Order Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderConfiramation;
