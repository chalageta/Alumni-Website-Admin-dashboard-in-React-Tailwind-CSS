import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import profile from '../data/profile.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-2xl rounded-full p-4 transition duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-110 shadow-md"
    >
      <span
        className="absolute inline-flex rounded-full h-1 w-1 right-1 top-1"
        style={{ background: dotColor }}
      />
      {/* Icon */}
      <span className="text-xl">{icon}</span>
    </button>
  </TooltipComponent>
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
    <div className="flex justify-between p-2 md:mx-6 relative ">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title="Chat"
          customFunc={() => handleClick("chat")}
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

<TooltipComponent content="Profile" position="BottomCenter">
  <div
    className="flex items-center gap-2 cursor-pointer p-1  rounded-lg"
    onClick={() => {
      closeAll();  
      setUserProfile(true); 
    }}
  >
    <img src={profile} className="rounded-full w-7 h-7" alt="" />
    <p>
      <span className="text-gray-400 text-14">Hi</span>{' '}
      <span className="text-gray-400 font-bold ml-1 text-14">Chala</span>
    </p>
    <MdKeyboardArrowDown className="text-gray-400 text-14" />
  </div>
</TooltipComponent>

        {isClicked.chat && <Chat />}
        {notifications && <Notification />}
        {userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default NavBar;
