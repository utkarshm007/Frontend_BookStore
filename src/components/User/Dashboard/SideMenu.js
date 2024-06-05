import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import navbar from "../../../asset/images/Navbar.png";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import UserImage from "./../../../asset/images/default.jpg";
import "./sidebar.css";
import { Blocks, Lock, LogOut, ShoppingBag, User } from "lucide-react";

import { getUserDetails } from "../../../Action/userAction";

const SideMenu = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const alert = useAlert();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [userImage, setUserImage] = useState("");

  const { isAuthenticated, userDetails, error } = useSelector(
    (state) => state.userDetails
  );

  useEffect(
    (storedUserID) => {
     

      checkUser();
      // fetch(getUserDetails(storedUserID));
    },
    [isAuthenticated, navigate]
  );

  const checkUser = () => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedUserID = localStorage.getItem("id");
    const storedUserImage = localStorage.getItem("imageUrl");
    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
    if (storedUserID) setUserId(storedUserID);
    if (storedUserImage) setUserImage(storedUserImage);

    if (
      storedName !== "" &&
      storedName != null &&
      storedEmail !== "" &&
      storedEmail != null &&
      storedUserID !== "" &&
      storedUserID != null
    ) {
    } else {
      navigate("/login");
    }
  };

  const btnClick = async (pageName) => {
    if (pageName == "/logout") {
      userLogout();
    } else {
      navigate(pageName);
    }
  };

  const userLogout = async () => {
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("contact");
    localStorage.removeItem("name");
    localStorage.removeItem("JWTToken");

    navigate("/");

    alert.success("Logout Successful");
  };
  const UserBar = [
    { name: "My Account", image: <User />, href: "/myaccount" },
    { name: "My Orders", image: <ShoppingBag />, href: "/me/orders" },
    { name: "Manage Address", image: <Blocks />, href: "/me/manageaddress" },
    { name: "Change Password", image: <Lock />, href: "/me/changepassword" },
    { name: "Logout", image: <LogOut />, href: "/logout" },
  ];

  return (
    <>
      <div className="sidebar">
        <div className="image-section">
          <img
            src={userImage != "" && userImage != null ? userImage : UserImage}
            alt="Userimage"
            className="profile-image"
          />
        </div>
        <div className="font-semibold italic">
          <h3 className="font-bold text-2xl">Hello, {name}</h3>
          <h3>{email}</h3>
        </div>
        <div className="sidebar-menu">
          {UserBar.map((item) => (
            <div
              className="menu-btn cursor-pointer"
              key={item._id}
              onClick={(e) => btnClick(item.href)}
            >
              <button className="sidebar-btn-link">
                <div className="flex">
                  {item.image} <span className="ml-2">{item.name}</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideMenu;
