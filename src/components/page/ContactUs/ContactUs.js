import React, { useEffect, useState } from "react";
import CommonBanner from "./../../CommonBanner/CommonBanner";
import Breadcrumbs from "./../../Breadcrumbs/Breadcrumbs";
import "./contactUs.css";
import { clearErrors, contentRequest } from "../../../Action/userAction";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";

const ContactUs = () => {
  const dispatch = useDispatch();

  const alert = useAlert();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    message: "",
  });

  const { error } = useSelector((state) => state.contactRequest);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();

    try {
      const success = dispatch(contentRequest(userData));

      if (success) {
        alert.success("Form submitted successfully!");
      } else {
        alert.eroor("Form submission failed!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert.error(
        "An error occurred while submitting the form. Please try again later."
      );
    }
  };

  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors);
  //   }
  // }, []);

  return (
    <>
      <CommonBanner pageTitle={"Contact Us"} />
      <Breadcrumbs breadcumr1="Contact Us" />
      <div className="container mx-auto italic font-semibold">
        {/* Hero Map */}
        <div className="md:pt-6">
          {/* <div className="mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-center text-xs font-semibold leading-normal md:text-sm">
              Share your thoughts
            </p>
          </div> */}
          <p className="text-center text-5xl mb-4">Love to hear from you</p>
          <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            veritatis voluptates neque itaque repudiandae sint, explicabo
            assumenda quam ratione placeat?
          </p>
        </div>
        <div className="mx-auto  md:py-12">
          <div className="grid items-center justify-items-center gap-x-4 lg:grid-cols-2">
            {/* contact from */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <form action="" className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="first_name"
                      >
                        First Name
                      </label>
                      <input
                        className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                        placeholder="First Name"
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={handleChange}
                        value={userData.firstName}
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="last_name"
                      >
                        Last Name
                      </label>
                      <input
                        className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                        type="text"
                        id="lastName"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={handleChange}
                        value={userData.lastName}
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                      id="email"
                      type="text"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      value={userData.email}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                      type="text"
                      id="contact"
                      placeholder="Phone number"
                      name="contact"
                      onChange={handleChange}
                      value={userData.contact}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                      id="message"
                      placeholder="Leave us a message"
                      cols={3}
                      name="message"
                      onChange={handleChange}
                      value={userData.message}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="contact-us-image">
              <img
                alt="Contact us"
                className="hidden max-h-full w-full rounded-lg object-cover lg:block"
                src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=800&q=80"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
