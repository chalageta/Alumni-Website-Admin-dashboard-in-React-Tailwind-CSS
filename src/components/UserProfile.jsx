import React, { useEffect, useRef } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlineUser, AiOutlineSetting, AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai';
import profile from '../data/profile.jpg';
import { useStateContext } from '../contexts/ContextProvider';

const UserProfile = () => {
  const { setUserProfile } = useStateContext();
  const userProfileRef = useRef(null);

  // Close notification when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userProfileRef.current && !userProfileRef.current.contains(event.target)) {
        setUserProfile(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setUserProfile]);

  return (
    <div className="w-full sm:w-80 fixed top-16 right-5 nav-item z-50" ref={userProfileRef}>
      <div className="h-auto dark:text-gray-200 dark:bg-gray-800 bg-white shadow-xl rounded-lg p-6 transition-all duration-500 transform translate-y-0">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="font-semibold text-xl text-gray-900 dark:text-white">User Profile</p>
          <button
            type="button"
            onClick={() => setUserProfile(false)}
            style={{ color: 'rgb(153,171,180)', borderRadius: '50%' }}
            className="text-2xl hover:drop-shadow-md p-2 hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>

        {/* Profile Info */}
        <div className="flex items-center mb-6">
          <img src={profile} className="rounded-full w-16 h-16 border-2 border-blue-500" alt="Profile" />
          <div className="ml-4">
            <p className="text-gray-900 dark:text-white font-bold text-xl">Chala Geta</p>
            <p className="text-gray-400 dark:text-gray-300">Admin</p>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-4">
          {/* Profile */}
          <div
            className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-lg transition-all duration-300"
            onClick={() => {}}
          >
            <AiOutlineUser className="text-2xl text-blue-500" />
            <p className="text-gray-700 dark:text-gray-200 font-medium">Profile</p>
          </div>

          {/* Inbox */}
          <div
            className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-lg transition-all duration-300"
            onClick={() => {}}
          >
            <AiOutlineMail className="text-2xl text-green-500" />
            <p className="text-gray-700 dark:text-gray-200 font-medium">Inbox</p>
          </div>

          {/* Change Password */}
          <div
            className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-lg transition-all duration-300"
            onClick={() => {}}
          >
            <AiOutlineUnlock className="text-2xl text-red-500" />
            <p className="text-gray-700 dark:text-gray-200 font-medium">Change Password</p>
          </div>

          {/* Settings */}
          <div
            className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-lg transition-all duration-300"
            onClick={() => {}}
          >
            <AiOutlineSetting className="text-2xl text-purple-500" />
            <p className="text-gray-700 dark:text-gray-200 font-medium">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
