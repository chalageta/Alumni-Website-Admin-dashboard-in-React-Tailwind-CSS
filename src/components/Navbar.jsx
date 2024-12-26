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

        {/* Center Section: Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6 ml-2">
          {['Home', 'Team', 'Membership', 'Blog', 'About'].map((item) => (
            <li key={item}>
              <a
                href="/membership"
                className="text-gray-600 hover:text-blue-600 font-semibold transition-all"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section: Buttons and Profile */}
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
        </div>
      </div>

      {/* Modals: Chat, Notification, User Profile */}
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
