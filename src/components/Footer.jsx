import React, { useState } from 'react';
import logo from '../data/logo.png';

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <footer className='dark:bg-gray-900 dark:text-white  text-black'>
      <div className="px-4 sm:px-10">
        <div className="grid max-sm:grid-cols-1 max-xl:grid-cols-2 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          <div className="xl:col-span-2">
            <a href="javascript:void(0)">
              <img src={logo} alt="logo" className="w-40 mb-6" />
            </a>
            <p className="mb-2">ECC Alumni.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Useful Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="javascript:void(0)" className="hover:text-blue-600 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-[10px] -rotate-90"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    ></path>
                  </svg>{' '}
                  Home
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" className="hover:text-blue-600 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-[10px] -rotate-90"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    ></path>
                  </svg>{' '}
                  About us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <a href="javascript:void(0)" className="hover:text-blue-600 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-[10px] -rotate-90"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    ></path>
                  </svg>{' '}
                  ECC Library
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" className="hover:text-blue-600 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-[10px] -rotate-90"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    ></path>
                  </svg>{' '}
                  Ebooks
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
