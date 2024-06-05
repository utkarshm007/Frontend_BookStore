import moment from 'moment';
import React from 'react'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-black pt-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row py-4">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-4xl italic font-bold text-white">Bookstore</h1>
          <p className='mt-3 text-white italic'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-4/5 lg:grid-cols-3">
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-2xl font-bold italic text-white">Useful Links</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white italic">
              <li>
                <Link to={"/"} >Home</Link>
              </li>
              <li>
                <Link to={"/about-us"} >About us</Link>
              </li>
              <li>
                <Link to={"/contact-us"} >Contact us</Link>
              </li>
              <li>
                <Link to={"/products"} >Products Listing</Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-2xl font-bold italic text-white">Other Links</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white italic">
              <li>
                <Link to={"/privacy-policy"} >Privacy Policy</Link>
              </li>
              <li>
                <Link to={"/terms-conidtions"} >Terms & Conditions</Link>
              </li>
              <li>
                <Link to={"/myaccount"}>My Account</Link>
              </li>
              <li>
                <Link to={"/wishlist"}>Wish list</Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0 w-full">
            {/* <p className="mb-2 text-2xl font-bold italic text-white">Subscribe</p> */}
            <form action="" className="w-full items-center">
              <input
                className="flex h-15 w-full rounded-md border border-black/20 px-3 py-2  placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-300 font-semibold text-lg italic text-black"
                type="email"
                placeholder="Enter Your Email"
              ></input>
              <button type='submit' className='btn web-btn-1 md:mt-4 mt-2'>Subscribe Now</button>
            </form>
            <ul className='grid grid-cols-4 md:gap-4 gap-2 md:mt-4 mt-2'>
              <li className='border p-2 rounded-md text-white'><Facebook /></li>
              <li className='border p-2 rounded-md text-white'><Instagram /></li>
              <li className='border p-2 rounded-md text-white'><Youtube /></li>
              <li className='border p-2 rounded-md text-white'><Linkedin /></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="text-center py-3">
        <p className="text-md font-bold text-white italic px-2 md:px-0">© {moment().format('YYYY')} All rights reserved. | Website is Developed & Maintained By Bookstore.</p>
      </div>
    </footer>
  )
}

export default Footer;