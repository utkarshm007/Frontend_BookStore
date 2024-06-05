import React, { useEffect, useState } from "react";
import { editUserAddress, getUserAddress } from "../../../Action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { CLEAR_ERRORS } from "../../../Constants/userConstants";
import { useParams } from "react-router-dom";
import CommonBanner from "../../CommonBanner/CommonBanner";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import GetMethod from "../../apiCalls/GetMethod";


const UpdateAddress = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { addressId } = useParams();
  const [userId, setUserId] = useState();
  const [selectedAddressId, setselectedAddressId] = useState([]);
  const [userData, setUserData] = useState({
    userId: "",
    name: "",
    email: "",
    contact: "",
    houseNo: "",
    streetArea: "",
    landmark: "",
    state: "",
    pincode: "",
    city: "",
  });

  const { error, loading, address } = useSelector(
    (state) => state.UserProfileData
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e, selectedAddress) => {
    e.preventDefault();

    dispatch(editUserAddress(addressId, userData, userId));

  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_ERRORS);
    }
    const storeUserID = localStorage.getItem("id");
    if (storeUserID) setUserId(storeUserID);



    if (selectedAddressId.length > 0) {
      const selectedAddress = address.data.filter((addr) =>
        selectedAddressId.includes(addr._id)
      );
      dispatch(editUserAddress(addressId, userData, userId));
      dispatch(getUserAddress(addressId))
    }

    getCurrentAddress();

  }, []);

  const getCurrentAddress = async () => {

    const url = "users-address/details/"
    const response = await GetMethod(url + addressId);

    setUserData(response.data.data);
  }

  return (
    <>
      <CommonBanner pageTitle="My Account" />
      <Breadcrumbs breadcumr1={"My Account"} breadcumr1_link={"/myaccount"} breadcumr2={"Manage Address"} />

      <div className="container mx-auto py-6 px-3 md:px-10 login-form-section">
        {/* contact from */}
        <h4 className="text-2xl font-bold md:text-4xl text-center">Manage Address</h4>

        <form onSubmit={handleSubmit} method="POST" className="my-5">
          <div className="form-seciton">
            <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
              <div className="form-group">
                <label className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="first_name"
                >
                  Name
                </label>
                <input
                  className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                  type="text"
                  id="name"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  value={userData.name}
                />
              </div>
              <div className="form-group">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="last_name"
                >
                  Email
                </label>
                <input
                  className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                  type="text"
                  id="email"
                  placeholder="email"
                  name="email"
                  onChange={handleChange}
                  value={userData.email}
                />
              </div>
              <div className="form-group">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Contact Number
                </label>
                <input
                  className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                  type="text"
                  id="contact"
                  placeholder="Contact Number"
                  name="contact"
                  onChange={handleChange}
                  value={userData.contact}
                />
              </div>

              <div className="form-group">
                <label className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message" >
                  Landmark
                </label>
                <input
                  className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                  id="landmark"
                  placeholder="Landmark"
                  name="landmark"
                  onChange={handleChange}
                  value={userData.landmark}
                />
              </div>
              <div className="form-group">
                <label className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message" >
                  House No.
                </label>
                <input
                  className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                  id="houseNo"
                  placeholder="House No."
                  name="houseNo"
                  onChange={handleChange}
                  value={userData.houseNo}
                />
              </div>
              <div className="form-group">
                <label className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message" >
                  Street Area
                </label>
                <input
                  className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                  id="streetArea"
                  placeholder="street Area"
                  name="streetArea"
                  onChange={handleChange}
                  value={userData.streetArea}
                />
              </div>
              <div className="form-group">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message"
                >
                  Pin Code
                </label>
                <input
                  className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                  id="pincode"
                  placeholder="pincode"
                  name="pincode"
                  onChange={handleChange}
                  value={userData.pincode}
                />
              </div>
              <div className="form-group">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message"
                >
                  State
                </label>
                <input
                  className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                  id="state"
                  placeholder="state"
                  name="state"
                  onChange={handleChange}
                  value={userData.state}
                />
              </div>
              <div className="form-group">
                <label className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message" >
                  City
                </label>
                <input
                  className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                  id="city"
                  placeholder="city"
                  name="city"
                  onChange={handleChange}
                  value={userData.city}
                />
              </div>
              <div className="col-span-1 col-start-2 mt-6">
                <button type="submit" className="web-btn-3">
                  Update Address
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateAddress;
