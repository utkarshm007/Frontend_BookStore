// src/components/page/Home/Home.js

import React from 'react';
import Product from './Product/Product';
import Showcase from './showcase/Showcase';
import BrowserCat from './BrowserCat/BrowserCat';
import SuggestionProduct from './SuggestionProduct/SuggestionProduct';
import Banner from "./../../../components/page/Home/Banner/Banner";
import Chatbot from './Chatbot';

const Home = () => {
  return (
    <div>
      <Banner />
      <BrowserCat />
      <div className='container mx-auto px-2 md:px-0'>
        <Product />
        <Showcase />
        <SuggestionProduct />
      </div>
      <Chatbot />
    </div>
  );
};

export default Home;
