import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearErrors,
  getUserAddress,
  deleteAddress,
} from "../../../Action/userAction";
import { useAlert } from "react-alert";
import "./address.css";
import Loader from "../../Layout/Loader";

const Address = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [userId, setUserId] = useState();

  const [selectedAddressId, setselectedAddressId] = useState([]);

  const { loading, error, address } = useSelector(
    (state) => state.UserProfileData
  );

  const deleteAddressHandler = async (addressId) => {
    try {
      await dispatch(deleteAddress(addressId, userId));

      setselectedAddressId((prevSelectedAddressId) =>
        prevSelectedAddressId.filter((id) => id !== addressId)
      );
    } catch (error) {
      console.error("Error Deleting Address", error);
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    const storedUserId = localStorage.getItem("id");
    //console.log("storeuserid/address.js",(storedUserId))
    if (storedUserId) setUserId(storedUserId);
    dispatch(getUserAddress(storedUserId));

    if (selectedAddressId.length > 0) {
      const selectedAddress = address.data.filter((addr) =>
        selectedAddressId.includes(addr._id)
      );
      dispatch(deleteAddress(selectedAddress));
    }
  }, [dispatch, error, alert]);
  // console.log("49selectedaddress",address)

  return (
    <>

      <div className="mx-4">
        <div className="profile-heading">
          <h2 className="text-4xl italic">Manage Address</h2>
        </div>
        <div className="grid grid-cols-1 mt-4">
          {address.data &&
            address.data.map((addressItem) => (
              <div
                key={addressItem._id}
                className="address-box border border-gray-300"
              >
                <div className="p-6">
                  <h3 className="italic">
                    {addressItem.name}, {addressItem.contact}
                  </h3>
                  <p className="mt-2">{addressItem.email} </p>
                  <p className="mt-2">
                    {" "}
                    Address: {addressItem.houseNo} {addressItem.landmark}{" "}
                    {addressItem.city} {addressItem.state} {addressItem.pincode}{" "}
                  </p>
                  <div className="box-footer mt-3 gap-4">
                    <Link to={`/me/updateaddress/${addressItem._id}`}>
                      <button type="button" className="btn-edit">
                        Edit
                      </button>
                    </Link>

                    <button
                      type="button"
                      className="btn-delete"
                      onClick={() => deleteAddressHandler(addressItem._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Address;
