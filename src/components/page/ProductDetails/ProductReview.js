/* eslint-disable jsx-a11y/img-redundant-alt */
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { newReview } from "../../../Action/productAction";
import { useDispatch, useSelector } from "react-redux";
// import { CLEAR_ERRORS } from "../../../Constants/productConstant";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import userImage from "./../../../asset/images/user_img.jpg"
import moment from "moment";

const ProductReview = () => {
  const dispatch = useDispatch()
  const alert = useAlert()
  const [userId, setUserId] = useState()
  const { productId } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    reviewText: "",
  });

  const { data,error } = useSelector((state) => state.review);
//console.log("review ",data)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newReview(userId, productId, formData))

  };

  // const options = {
  //   edit: false,
  //   color: "rgba(20,20,20,0.1)",
  //   activeColor: "tomato",
  //   size: window.innerWidth < 600 ? 20 : 25,
  //   value: 5,
  //   isHalf: true,
  // };


  useEffect(() => {
    if (error) {
      alert.error(error);
      // dispatch(CLEAR_ERRORS);
    }
    const storeUserID = localStorage.getItem("id");

    if (storeUserID) setUserId(storeUserID);


    // dispatch(newReview(userId, productId, formData));

  }, [dispatch, error, alert]);


  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 my-9 gap-10">
        <div className="md:col-span-1 card rounded-box m-3">
          <div className="review-heading text-center">
            <h4 className="text-4xl italic">Write A Review</h4>
          </div>
          <form className="mt-3" onSubmit={handleSubmit} autoComplete="off">
            <div className="flex justify-center items-center gap-3 mb-3">
              <ReactStars size={40} className="start-rating" />{" "}
              {/* <Star size={40} className="start-rating" />{" "}
              <Star size={40} className="start-rating" />{" "}
              <Star size={40} className="start-rating" />{" "}
              <Star size={40} className="start-rating" /> */}
            </div>
            <div className="grid grid-cols-1">
              <input
                className="review-input"
                type="text"
                name="name"
                placeholder="Enter Username"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                className="review-input"
                type="email"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
              />

              <textarea
                className="review-input textarea"
                name="reviewText"
                placeholder="Your review"
                value={formData.reviewText}
                onChange={handleChange}
              />

              <button className="review-btn w-100" type="submit">
                Submit Review
              </button>
            </div>
          </form>
        </div>

        {/* <div className="divider w-full lg:divider-horizontal text-center"></div> */}

        <div class="card md:col-span-2 mx-3">
          <div className="review-heading text-center mb-4">
            <h4 className="text-4xl italic">Check user's Review</h4>
          </div>
          <div tabIndex={0} className="collapse collapse-plus border border-base-300" >
            <div className="collapse-title text-xl font-medium">
              <div className="flex flex-row items-center">
                <img src={userImage} alt="Image" className="user-review-image" />
                <div className="ml-5 italic">
                  <h5 className="mb-0">User Name</h5>
                  <small className="text-sm text-gray-500">{moment().format("DD MMMM, YYYY")}</small>
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
              </p>
            </div>
          </div>

        </div>
      </div>
      {/* <div className="review-section py-8">
        <div className="review-heading text-center">
          <h4 className="text-4xl italic">Write A Review</h4>
        </div>
        <div className="review-box py-6">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="write-review w-96 mx-auto">
              <form className="mt-3" onSubmit={handleSubmit} autoComplete="off" >
                <div className="flex justify-center items-center gap-3 mb-3">
                  <Star size={40} className="start-rating" /> <Star size={40} className="start-rating" /> <Star size={40} className="start-rating" /> <Star size={40} className="start-rating" /> <Star size={40} className="start-rating" />
                </div>
                <div className="grid grid-cols-1">
                  <input className="review-input" type="text" name="name" placeholder="Enter Username" value={formData.name} onChange={handleChange} />

                  <input className="review-input" type="email" name="email" placeholder="Enter Email Address" value={formData.email} onChange={handleChange} />

                  <textarea className="review-input textarea" name="review" placeholder="Your review" value={formData.review} onChange={handleChange} />

                  <button className="review-btn w-100" type="submit" >
                    Submit Review
                  </button>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProductReview;
