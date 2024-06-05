/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./aboutUs.css";
import AboutUsImage from "../../../asset/images/aboutus.jpg";
import CommonBanner from "../../CommonBanner/CommonBanner";
import Breadcrumbs from './../../Breadcrumbs/Breadcrumbs';

const AboutUs = () => {
  return (
    <>
      <CommonBanner pageTitle={"About us"} />
      <Breadcrumbs breadcumr1="About Us" />
      <div className="container mx-auto">
        <div className="heading">
          <h2 className="md:text-3xl text-xl text-center italic"> About Us of Our BookStore Company</h2>
        </div>

        <div className="grid md:grid-cols-6 grid-cols-1 md:gap-4 w-full md:pt-5 pt-1 pb-6">
          <div className="col-span-4 about-us-content p-4 md:p-0">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p><br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p><br />

            <h5 className="text-xl font-bold">
              <b>From BookStore PVT. LTD.</b>
            </h5>
          </div>
          <div className="col-span-2 mx-4">
            <img className="image rounded-lg text-center" src={AboutUsImage} width={"100%"} alt="About Us Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
