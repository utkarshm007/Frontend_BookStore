import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../../Action/productAction";
import ProductCard from "../../ProductCard/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSkelton from "../Product list/ProductSkelton";

const RelatedProduct = () => {

  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
        }
      }
    ],
  }

  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);
  return (
    <div className="my-6">
      <div className="text-center mb-5">
        <h4 className="text-4xl italic">Related Products</h4>
      </div>
      <div className="page-slick-slider">
        {loading ? (
          <>
            <div className="mt-5">
              <ProductSkelton />
            </div>
          </>
        ) : (
          <Slider {...settings} className="custom-slider">
            {products.map((product, index) => (
              <>
                <ProductCard product={product} key={index} />
              </>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default RelatedProduct;
