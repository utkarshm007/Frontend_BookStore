import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { login, register } from "../../../Action/userAction";
import "./login.css";

import { GoogleLogin } from "react-google-login";

const Login = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const { error, isAuthenticated } = useSelector((state) => state.user);

  const [loginPassword, setLoginPassword] = useState("admin");
  const [loginEmail, setLoginEmail] = useState("admin@gmail.com");

  const loginSubmit = async (e) => {
    e.preventDefault();
    setClicked(true);
    await dispatch(login(loginEmail, loginPassword));
    navigate("/myaccount");
    if (isAuthenticated === true) {
      alert.success("Login Successful");
    }
  };

  const onSuccess = (res) => {
    alert.success("Login Success");

    const userData = {
      name: res.profileObj.givenName,
      email: res.profileObj.email,
      contact: res.profileObj.name,
      imageUrl: res.profileObj.imageUrl,
    };
    dispatch(register(userData))

    localStorage.setItem("JWTToken", res.profileObj.access_token);
    localStorage.setItem("id", res.googleId);
    localStorage.setItem("name", res.profileObj.givenName);
    localStorage.setItem("email", res.profileObj.email);
    localStorage.setItem("contact", res.profileObj.name);
    localStorage.setItem("imageUrl", res.profileObj.imageUrl);
    localStorage.setItem("id_token", res.profileObj.id_token);

    navigate("/myaccount");
  };

  const onFailure = (error) => {
    if (error.error === "popup_closed_by_user") {
      alert.error(
        "The login popup was closed before completing the authentication process. Please try again."
      );
    } else {
      alert.error("An error occurred during login. Please try again.");
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    checkUser();
  }, [dispatch, navigate, isAuthenticated, error, alert]);


  const checkUser = () => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedUserID = localStorage.getItem("id");
    if (
      storedName !== "" &&
      storedName != null &&
      storedEmail !== "" &&
      storedEmail != null &&
      storedUserID !== "" &&
      storedUserID != null
    ) {
      navigate("/myaccount");
    }
  };

  return (
    <div className="container mx-auto">
      <div className="login-form-section">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="login-form-content p-2 md:p-l-4">
            <h1 className="form-heading">Login</h1>
            <p className="form-content hidden md:block">
              Get access to your Orders <br />
              Wish list and Recommendations
            </p>
            <p className="text-red-500">
              Do not have any account !<br></br>
              <Link to="/register" className="register-link">
                Click to Create
              </Link>{" "}
            </p>
          </div>
          <div className="login-form p-2 md:p-r-4">
            <div className="md:mr-16 mx-2">
              <form method="POST" className="w-full" onSubmit={loginSubmit}>
                <div className="space-y-5">
                  <div className="mt-2">
                    <input
                      className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                      type="text"
                      placeholder="Enter Email or Mobile Number"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    ></input>
                  </div>
                  <div className="mt-2">
                    <input
                      className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                      type="password"
                      placeholder="Enter Password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    ></input>
                  </div>
                  <button
                    type="submit"
                    value="login"
                    disabled={clicked}
                    className="btn btn-outline rounded-sm  w-full hover:bg-slate-500 hover:text-white text-xs md:text-sm"
                  >
                    Login
                  </button>
                </div>
                <div className="grid grid-cols-2 w-full md:mt-6 mt-4">
                  <button
                    type="button"
                    className="btn btn-outline btn-login-with text-xs md:text-sm rounded-sm mr-3"
                  >
                    Login With Otp
                  </button>
                  <GoogleLogin
                    clientId="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"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={"single_host_origin"}
                    render={(renderProps) => (
                      <button
                        type="button"
                        className="btn btn-outline btn-login-with text-xs md:text-sm rounded-sm ml-3"
                        onClick={renderProps.onClick}
                      >
                        Login With Google
                      </button>
                    )}
                  />
                </div>
              </form>
              <p className="md:mt-6 mt-5 italic md:text-lg text-md">
                By continuing, you agree to BookStore's Terms of Use and Privacy
                Policy.
              </p>
            </div>
          </div>
        </div>
      </div >
      <div className="text-center">
        <Link to="/adminSignup" className="btn btn-outline mt-4">
          Admin Login
        </Link>
      </div>
    </div >
  );
};

export default Login;
