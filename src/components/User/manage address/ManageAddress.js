import React from 'react'
import SideMenu from '../Dashboard/SideMenu'
import Address from './Address'
import CommonBanner from "../../CommonBanner/CommonBanner";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const ManageAddress = () => {
  return (
    <>
      <CommonBanner pageTitle="My Account" />
      <Breadcrumbs breadcumr1={"My Account"} breadcumr1_link={"/myaccount"} breadcumr2={"Manage Address"} />

      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 md:my-5 my-3">
          <div className="col-span-1 md:block hidden">
            <SideMenu />
          </div>
          <div className="col-span-3">
            <Address />
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageAddress
