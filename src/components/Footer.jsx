import React from 'react';
import Logo from './parts/Logo';
import { NavLink } from 'react-router-dom';

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
            <h3 className="text-2xl text-primary font-bold drop-shadow-md mb-2">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
