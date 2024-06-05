import React from "react";
import Orders from "./Orders";
import SideMenu from "../Dashboard/SideMenu";
import CommonBanner from "../../CommonBanner/CommonBanner";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import OrderDetails from "./OrderDetails";
 const MyOrders = () => {
  return (
    <>
    

      <CommonBanner pageTitle="My Account" />
      <Breadcrumbs breadcumr1={"My Account"} breadcumr1_link={"/myaccount"} breadcumr2={"Order Details"} />
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 md:my-5 my-3">

          <div className="col-span-1 md:block hidden">
            <SideMenu />
          </div>

          <div className="col-span-3">
            <Orders />
         
            {/* <OrderDetails /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrders;
