import React from 'react';
import Logo from './parts/Logo';
import { NavLink } from 'react-router-dom';
import { BiSolidStarHalf } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer bg-[#969f95] h-full">
      <div class="w-full py-10 px-10">
        <div className="flex gap-7 flex-wrap flex-col lg:flex-row lg:flex-nowrap justify-between md:items-start lg:items-start md:justify-between lg:justify-between items-center">
          <div class="logo">
            <div className="w-24">
              <Logo />
            </div>
          </div>

          <div className="flex  flex-col items-center lg:items-start gap-3 mt-4 lg:mt-0">
            <h3 className="text-2xl  font-bold drop-shadow-md mb-2">Company</h3>
            <NavLink to="/our-story">
              <p className="font-medium">About Us</p>
            </NavLink>
            <NavLink to="/contact">
              <p className="font-medium">Contact Us</p>
            </NavLink>
            <NavLink to="/guide">
              <p className="font-medium">Blog</p>
            </NavLink>
            <NavLink to="/shop">
              <p className="font-medium">Shop</p>
            </NavLink>
          </div>

          <div className="flex flex-col gap-3 items-center lg:items-start mt-4 lg:mt-0">
            <h3 className="text-2xl font-bold drop-shadow-md mb-2">
              Information
            </h3>
            <NavLink to="/terms">
              <p className="font-medium">Terms Of Services</p>
            </NavLink>
            <NavLink to="/terms">
              <p className="font-medium">Privacy Policy</p>
            </NavLink>
            <NavLink to="/marble-care">
              <p className="font-medium">Services</p>
            </NavLink>
          </div>

          <div className="flex flex-col gap-3 items-center lg:items-start mt-4 lg:mt-0">
            <h3 className="text-2xl font-bold drop-shadow-md mb-2">Address</h3>
            <div class="flex flex-col items-center lg:items-start">
              <p class="text-center lg:text-left">
                Gopal Traders- 100% genuine Products
              </p>
              <p class="font-medium text-center lg:text-left">
                No-233/4, eastern Bypass, Near Ashighar More
                <br />
                <span class="m-auto"> Siliguri 734006</span>
              </p>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row items-center mt-2 lg:mt-10">
            <div class="flex items-center">
              <BiSolidStarHalf
                name="ic:sharp-star-half"
                class="text-xl text-white opacity-60"
              />
              <BiSolidStarHalf
                name="ic:sharp-star-half"
                class="text-xl text-white opacity-60"
              />
              <BiSolidStarHalf
                name="ic:sharp-star-half"
                class="text-xl text-white opacity-60"
              />
              <BiSolidStarHalf
                name="ic:sharp-star-half"
                class="text-xl text-white opacity-60"
              />
              <BiSolidStarHalf
                name="ic:sharp-star-half"
                class="text-xl text-white opacity-60"
              />
              <span class="mt-1 font-medium">4.9</span>
            </div>
            <p class="font-medium lg:ml-4">181 reviews</p>
          </div>

          <div class="flex flex-col gap-4 justify-center items-center mt-4 lg:mt-0">
            <h3 class="text-2xl font-bold drop-shadow-md">Connect</h3>
            <div class="flex items-center gap-4">
              <NavLink to="#">
                <AiOutlineInstagram class="text-4xl text-white opacity-60" />
              </NavLink>
              <NavLink to="#">
                <BsFacebook class="text-3xl text-white opacity-60" />
              </NavLink>
            </div>
          </div>
          <div class="w-11/12 border-2  opacity-40 m-auto mt-8"></div>
        </div>
        <div class="copyright text-center font-semibold mt-6">
          <p>Copyright© Gopal Traders. All Rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
