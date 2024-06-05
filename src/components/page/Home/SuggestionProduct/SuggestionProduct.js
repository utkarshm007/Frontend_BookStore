import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../../../Action/productAction";
import Loader from "../../../Layout/Loader";
import ProductCard from "../../../ProductCard/ProductCard";
import ProductSkelton from "../../Product list/ProductSkelton";

const SuggestionProduct = () => {

  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  const limitProduct = products.slice(3, 7);

  useEffect(() => {
    if (error) {
      error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <>
      <div className="suggested-product md:py-12 py-6">
        <div className="flex justify-between items-center">
          <div className="font-sans">
            <h2 className="text-xl">Suggested For You</h2>
          </div>
          <Link className="btn btn-view-all" to="/products">
            View All
          </Link>
        </div>
        {loading ? (
          <>
            <div className="mt-5">
              <ProductSkelton />
            </div>
          </>
        ) : (
          <div className="grid md:grid-cols-5 grid-cols-2 md:gap-5 gap-2 product-listing mt-4">
            {limitProduct.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>

        )}
      </div>
    </>
  );
};

export default SuggestionProduct;
