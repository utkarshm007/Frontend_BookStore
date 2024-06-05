import React, { useState, useEffect } from "react";
// import { Link, redirect } from "react-router-dom";
import { clearErrors, register } from "../../../Action/userAction";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ location, history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate()


  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confiramPassword: "",
  });

  const { name, email, contact, password, confiramPassword } = user;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      contact,
      password,
    };

    dispatch(register(userData));
  };



  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/myaccount");
    }
  }, [dispatch, isAuthenticated, alert, error, history]);
  return (
    <div className="container mx-auto">
      <div className="login-form-section">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="login-form-content p-2 md:p-l-4">
            <h1 className="form-heading">Register</h1>
            <p className="form-content hidden md:block">
              Get access to your Orders <br />
              Wish list and Recommendations
            </p>
            <p className="text-red-500">
              Account already Exist...!<br></br>
              <Link to="/login" className="register-link">
                Click to Login
              </Link>
            </p>
          </div>
          <div className="login-form p-2 md:p-r-4">
            <div className="md:mr-16 mx-2">
              <form method="POST" className="w-full" onSubmit={registerSubmit}>
                <div className="">
                  <div className="my-2">
                    <input
                      className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                      type="name"
                      placeholder="Enter Name"
                      value={name}
                      name="name"
                      onChange={handleInputChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="my-2">
                    <input
                      className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      name="email"
                      onChange={handleInputChange}
                    ></input>
                  </div>{" "}
                  <div className="my-2">
                    <input
                      className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                      type="mobileNumber"
                      placeholder="Enter Mobile Number"
                      value={contact}
                      name="contact"
                      onChange={handleInputChange}
                    ></input>
                  </div>
                  <div className="my-2">
                    <input
                      className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                      type="password"
                      placeholder="Enter Password"
                      value={password}
                      name="password"
                      onChange={handleInputChange}
                    ></input>
                  </div>
                  <button type="submit" value="login" className="btn btn-outline rounded-sm  w-full hover:bg-slate-500 hover:text-white text-xs md:text-sm">
                    Register
                  </button>
                </div>
                <div className="grid grid-cols-1 w-full md:mt-3 mt-4">
                  <Link to="/verifyotp"
                    type="button"
                    className="btn btn-outline btn-login-with text-xs md:text-sm rounded-sm"
                  >
                    Sign in with OTP
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
