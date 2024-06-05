import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../Action/productAction";
import { Link } from "react-router-dom";
import ProductCard from "../../ProductCard/ProductCard";

const Search = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    // Dispatch getProduct action with the keyword
    dispatch(getProduct(keyword));
  };

  const { loading, error, products } = useSelector((state) => state.products);

  return (
    <Link to={"/search"}>
      <div className="h-96 flex justify-center bg-gradient-to-t from-yellow-100 via-pink-100 to-yellow-100 italic font-semibold ">
        <div class=" mt-16 items-center ">
          <input
            id="search"
            name="search"
            type="search"
            autocomplete="search"
            required
            class="min-w-96  rounded-md border border-black mr-1  px-3.5 py-2      sm:text-sm sm:leading-6 "
            placeholder="Search you want to buy"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button
            type="text"
            onClick={handleSearch}
            class="flex-none rounded-md sm:m-1 px-3.5 py-2.5 text-sm w-32 font-semibold border border-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
          >
            Search
          </button>
        </div>
        {products.map((product, index) => (
          <>
            <ProductCard product={product} key={index} />
          </>
        ))}
      </div>
    </Link>
  );
};

export default Search;
