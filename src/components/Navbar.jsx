import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Tooltip from '@mui/material/Tooltip';
import profile from '../data/profile.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import logo from '../data/logo.png';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <Tooltip title={title} placement="bottom">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-lg rounded-full px-2 py-2 transition duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-110 shadow-md"
    >
      {dotColor && (
        <span
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
          style={{ background: dotColor }}
        />
      )}
      {icon}
    </button>
  </Tooltip>
);

const NavBar = () => {
  
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    userProfile,
    setUserProfile,
    setNotification,
    notifications,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const closeAll = () => {
    setUserProfile(false);
    setNotification(false);
    setIsClicked({ chat: false });
  };

  return (
    <div className="relative">
      <ToastContainer />
      <div className="flex justify-between items-center px-4 py-3 bg-white shadow-md sticky top-0 z-50">
        {/* Left Section: Menu Button */}
        <div className="flex items-center gap-1">
          <NavButton
            title="Menu"
            customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
            color={currentColor}
            icon={<AiOutlineMenu />}
          />
        </div>

        <ul className="hidden lg:flex items-center gap-6 ml-2">
  {[
    { name: 'Home', href: '/' },
    { name: 'Membership', href: '/membership' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' },
  ].map((item) => (
    <li key={item.name}>
      <a
        href={item.href}
        className="text-gray-600 hover:text-blue-600 font-semibold transition-all"
      >
        {item.name}
      </a>
    </li>
  ))}
  
</ul>
<div class='flex ml-auto'>
          <Link to="/login" class='mr-6 font-semibold border-none outline-none text-blue-600 px-5 py-2.5'>Login</Link>
          <Link to="/register" class='bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-full px-5 py-2.5'>Sign
            up</Link>
          <button id="toggleOpen" class='lg:hidden ml-7'>
            <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
{/* 
         <div className="flex items-center gap-4 ml-auto">
          <NavButton
            title="Chat"
            customFunc={() => handleClick('chat')}
            color={currentColor}
            dotColor="#03C9D7"
            icon={<BsChatLeft />}
          />
          <NavButton
            title="Notification"
            customFunc={() => {
              closeAll();
              setNotification(true);
            }}
            color={currentColor}
            dotColor="#03C9D7"
            icon={<RiNotification3Line />}
          />
          <Tooltip title="Profile" placement="bottom">
            <div
              className="flex items-center gap-2 cursor-pointer p-1 rounded-lg hover:bg-gray-200"
              onClick={() => {
                closeAll();
                setUserProfile(true);
              }}
            >
              <img src={profile} className="rounded-full w-8 h-8" alt="User" />
              <div className="hidden sm:block">
                <p className="text-gray-400 text-sm">Hi</p>
                <p className="text-gray-600 font-bold">Chala</p>
              </div>
              <MdKeyboardArrowDown className="text-gray-400" />
            </div>
          </Tooltip>
        </div> */}
      </div>

       {isClicked.chat && (
        <div className="z-60">
          <Chat />
        </div>
      )}
      {notifications && (
        <div className="z-60">
          <Notification />
        </div>
      )}
      {userProfile && (
        <div className="z-60">
          <UserProfile />
        </div>
      )}
    </div>
  );
};

export default NavBar;
