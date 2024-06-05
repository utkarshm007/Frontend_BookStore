import React, { useEffect, useState } from "react";
import "./profile.css";
import {
  updateUser,
  getUserDetails,
} from "../../../Action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { CLEAR_ERRORS } from "../../../Constants/userConstants";
import moment from "moment";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [userId, setUserId] = useState();

  const [userData, setUserData] = useState({
    name: "",
    dateOfBirth: "",
    contact: "",
    email: "",
    gender: "",
    alternateNumber: "",
    profileImage: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.userDetails
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result);
      const imageCode = reader.result.split(";base64,")[1];

      setUserData((prevData) => ({
        ...prevData,
        profileImage: imageCode,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e, data) => {
    e.preventDefault();

    const updatData = {
      "userId": userId,
      "name": userData.name,
      "dateOfBirth": userData.dateOfBirth,
      "contact": userData.contact,
      "email": userData.email,
      "gender": userData.gender,
      "alternateNumber": userData.alternateNumber,
      "profileImage": userData.profileImage,
    }

    /* const formData = new FormData();
    
    formData.append("userId", userId);
    formData.append("name", userData.name);
    formData.append("dateOfBirth", userData.dateOfBirth);
    formData.append("contact", userData.contact);
    formData.append("email", userData.email);
    formData.append("gender", userData.gender);
    formData.append("alternateNumber", userData.alternateNumber);
    formData.append("profileImage", userData.profileImage);*/

    dispatch(updateUser(userId, updatData));
    //  dispatch(uploadeUserImage(formData.profileImage, userId));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      // dispatch(CLEAR_ERRORS);
    }
    const storeUserID = localStorage.getItem("id");

    if (storeUserID) setUserId(storeUserID);

    if (isAuthenticated) {
      dispatch(updateUser(storeUserID));
    }
    // dispatch(getUserDetails(storeUserID));

    getUserDetailsHere();

  }, [dispatch, isAuthenticated, error, alert, userId]);

  const getUserDetailsHere = async () => {
    setUserData((prevData) => ({
      ...prevData,
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      contact: localStorage.getItem("contact"),
    }));
  }

  return (
    <>
      <div className="mx-4">
        <form action="" method="POST" onSubmit={handleSubmit}>
          <div className="profile-heading">
            <h2 className="text-4xl italic">User Details</h2>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-5">
            <input
              className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={(e) => {
                localStorage.setItem("name", e.target.value);
                handleChange(e);
              }}
              value={userData.name}
            />
            <input
              className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              type="date"
              name="dateOfBirth"
              placeholder="Date Of Birth"
              onChange={handleChange}
              value={userData.dateOfBirth}
              max={moment().subtract(10, "years").format("YYYY-MM-DD")}
            />
            <input
              className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              type="number"
              name="contact"
              placeholder="Enter Your Contact"
              onChange={(e) => {
                if (e.target.value.length <= 10) {
                  handleChange(e);
                }
              }}
              value={userData.contact}
            />
            <input
              className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              type="email"
              name="email"
              disabled={true}
              placeholder="Enter Your Email"
              onChange={handleChange}
              value={userData.email}
            />
            <select
              className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              name="gender"
              onChange={handleChange}
              value={userData.gender}
            >
              <option value={""} selected disabled>
                {" "}
                Select Gender
              </option>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
              <option value={"Other"}>Other</option>
            </select>
            <input
              className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              type="text"
              name="alternateNumber"
              placeholder="Enter Alternate Number"
              onChange={(e) => {
                if (e.target.value.length <= 10) {
                  handleChange(e);
                }
              }}
              value={userData.alternateNumber}
            />
            <input
              className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            // value={userData.profileImage}
            />
            <div className="user-profile-img">
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Userimage"
                  className="profile-image"
                />
              )}
            </div>
          </div>
          <div className="btn-section text-center mt-3">
            <button className="web-btn-2 px-12 py-3" type="submit">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
