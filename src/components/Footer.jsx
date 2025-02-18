import React, { useState } from 'react';
import logo from '../data/logo.png';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    toast.warning("This feature is under construction!");
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <footer className="bg-black py-12 px-8 font-sans tracking-wide">
    <div className="max-w-screen-xl mx-auto">
      <div className="grid max-sm:grid-cols-1 lg:grid-cols-3 items-center gap-8">
        <h4 className="lg:col-span-2 text-lg font-semibold text-white leading-relaxed">Join our newsletter to keep up to date with us!<br /> Enter your email Subscribe</h4>
        <div className="bg-transparent border border-gray-600 flex px-1 py-1 rounded-full max-lg:max-w-md">
          <input type='email' placeholder='Enter your email' className="w-full outline-none bg-transparent pl-4 text-sm text-gray-400" />
          <button type='button'
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-4 py-2">Subscribe</button>
        </div>
      </div>

      <hr className="my-12 border-gray-800" />

      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-20 max-lg:gap-8">
        <div className="lg:col-span-3 max-lg:col-span-full">
          <a href='javascript:void(0)'><img src={logo} alt="logo" className='w-36' /></a>
          <p className="text-gray-400 leading-relaxed text-sm lg:max-w-sm mt-6">About MOR And EC ALUMNI.</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Useful Links</h4>
          <ul className="space-y-4">
            <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Home</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white text-sm">About</Link></li>
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white text-sm">Help</button>
</li>  </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">About Us</h4>
          <ul className="space-y-4">
            <li><a href="/register" className="text-gray-400 hover:text-white text-sm">Our Story</a>
            </li>
            <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-sm">Mission and
              Values</a></li>
            <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-sm">Team</a></li>
            <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-sm">Testimonials</a></li>
          </ul>
        </div>
      </div>

      <p className='text-sm text-gray-400 mt-8'>© MOR And ECC Alumni. All rights reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;
