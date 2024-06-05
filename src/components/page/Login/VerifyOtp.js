import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

import { clearErrors, sendOtp, verifyOtp } from "../../../Action/userAction";
import { useParams } from "react-router-dom";

const VerifyOtp = () => {
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [userid, SetUserId] = useState("");
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const alert = useAlert();
  const {userID} = useParams()
  const { otpLogin, error } = useSelector((state) => state.otpLogin);

  const handleSendOtp = (e) => {
    e.preventDefault();
    dispatch(sendOtp({ userData: contact }));
  };
  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleOtpVerification = () =>{
    if(!otp){
      alert.error("Please enter OTP")
      return;
    }
    dispatch(verifyOtp({userId: userID, userOtp: otp}))
  }

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleResendOtp = () => {
    dispatch(sendOtp({ userData: contact }));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    const storedName = localStorage.getItem("contact");
    if (storedName) setContact(storedName);
    const storedUserId = localStorage.getItem("id");
    if (storedUserId) SetUserId(storedUserId);

  }, [alert, dispatch, error]);

  return (
    <div className="bg-gradient-to-t from-yellow-100 via-pink-100 to-yellow-150 italic">
      <section className="rounded-md p-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-2xl font-bold leading-tight text-black">
              Login with OTP
            </h2>

            <form action="#" method="POST" className="mt-8">
              <div className="space-y-4">
                <div className="flex flex-col items-center">
                  <input
                    className="h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="tel"
                    placeholder="Enter Mobile Number"
                    onChange={handleContactChange}
                  />
                  <button
                    onClick={handleSendOtp}
                    title=""
                    className="text-sm font-semibold hover:underline text-blue-500  lg:ml-80"
                  >
                    Send OTP
                  </button>
                </div>
                <div>
                  <input
                    className="h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={handleOtpChange}
                  />
                </div>
              </div>

              <div className="mt-3 space-y-3">
                <button
                onClick={handleOtpVerification}
                  type="button"
                  className=" relative inline-flex w-full items-center justify-center rounded-md border border-red-400  px-3.5 py-2.5 font-semibold transition-all duration-200 hover:bg-yellow-500 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                >
                  Verify OTP and Login
                </button>
                <button
                  type="button"
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-black  px-3.5 py-2.5 font-semibold transition-all duration-200 hover:bg-yellow-500 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                  onClick={handleResendOtp}
                >
                  Re-Send OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerifyOtp;
