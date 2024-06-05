/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// import banner from "../../../../asset/images/banner.webp";
import banner from "../../../../asset/images/79_inr.jpg";
import banner1 from "../../../../asset/images/banner1.jpg";
import banner22 from "../../../../asset/images/banner4.jpg";
import banner2 from "../../../../asset/images/banner2.jpg";
import banner5 from "../../../../asset/images/banner5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const cat = [
    { id: 1, image: banner5 },
    { id: 2, image: banner22 },
    { id: 3, image: banner1 },
    { id: 4, image: banner2 },
    { id: 5, image: banner },

  ];
 
  var settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Enable infinite loop
    speed: 50, // Transition speed in milliseconds
    slidesToShow: 1, // Show only 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    arrows: true, // Show arrows for navigation
    autoplay: true, // Autoplay slides
    autoplaySpeed: 2000, 
  };

  return (
    <>
      <div className="w-full page-slick-slider">
        <Slider {...settings} style={{overflow:"hidden"}}>
          {cat.map((category, index) => (
            <div key={index}>
              {/* <img src={category.image} alt="Category Image" className="w-full" /> */}
              <img src={category.image} alt={`Category ${category.id}`} style={{ width: '100%', height:'500px', objectFit:"cover" }} />

            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Banner;
