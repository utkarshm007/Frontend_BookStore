import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  clearErrors,
  getCategory,
  getCategoryDetails,
  getBrand,
} from "../../../Action/productAction";
import Loader from "../../Layout/Loader";
import Banner from "./../Home/Banner/Banner";
import ProductCard from "../../ProductCard/ProductCard";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import ProductSkelton from "./ProductSkelton";



const ProductList = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  // const { _id, brandId } = useParams();
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  
  // const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(25);
  // const [productListToShow, setProductListToShow] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  const { loading, error, products } = useSelector((state) => state.products);
  const { category: categoryData } = useSelector((state) => state.category);
  const { brand: brandData } = useSelector((state) => state.brand);
  

  // console.log(categoryData, brandData);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct());

    dispatch(getCategory());
    dispatch(getBrand());

    dispatch(getCategory());
  }, [dispatch, error, alert]);

  useEffect(() => {
    let filteredProducts = products.filter((product) => {
      if (category && brand) {
        return product.category === category && product.brand === brand;
      } else if (category) {
        return product.category === category;
      } else if (brand) {
        return product.brand === brand;
      } else {
        return true; // Return all products if no category or brand selected
      }
    });
    setFilteredProducts(filteredProducts);
  }, [category, brand, products]);

  

  return (
    <>
      <Banner />

      <div className="container mx-auto pt-6 pb-10">
        <div className="text-center">
          <h1 className="text-5xl italic">Our Products</h1>
        </div>
        <div className="product-filter mb-6">
          <form>
            <div className="grid grid-cols-4 mx-auto gap-3 my-5">
              {/* <input
                  className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                  type="text"
                  placeholder="Search Product"
                  value={searchTerm}
                  onChange={handleSearchChange}
                /> */}
              <select
                className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm  focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Select Category</option>
                {categoryData &&
                  categoryData.data.data &&
                  categoryData.data.data.map((ct) => (
                    <option key={ct._id} value={ct._id}>
                      {ct.name}
                    </option>
                  ))}
              </select>
              <select
                className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option>Select Brand</option>
                {brandData &&
                  brandData.data.data &&
                  brandData.data.data.map((brd) => (
                    <option key={brd._id} value={brd._id}>
                      {brd.name}
                    </option>
                  ))}
              </select>
              {/* <button type="submit" className="web-btn-3">
                  Search
                </button> */}
            </div>
          </form>
          <div className="product-list">
            {loading ? (
              <ProductSkelton />
            ) : (
              <div className="grid md:grid-cols-5 grid-cols-2 md:gap-5 gap-2 product-listing">

                {filteredProducts.map((product, index) => (
                  <ProductCard product={product} key={index} />
                ))}

                {products.map((product, index) => (
                  <>
                    <ProductCard product={product} key={index} />
                  </>
                ))}

              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
