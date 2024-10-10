import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../contexts/ContextProvider'
import { AiOutlineUser, AiOutlineSetting, AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai'

import profile from '../data/profile.jpg'
const UserProfile = () => {
   const { setUserProfile } = useStateContext();

 return (
    <div className="w-screen fixed nav-item top-16 right-12">
      <div className="h-auto float-right dark:text-gray-200 dark:bg-gray-800 bg-white w-1/4 shadow-lg rounded-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-xl">User Profile</p>
          <button
            type="button"
            onClick={() => setUserProfile(false)}
            style={{ color: 'rgb(153,171,180)', borderRadius: '50%' }}
            className="text-xl hover:drop-shadow-sm p-2 hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>

        {/* Profile Info */}
        <div className="flex items-center mb-6">
          <img src={profile} className="rounded-full w-16 h-16" alt="Profile" />
          <div className="ml-4">
            <p className="text-gray-900 dark:text-white font-bold text-xl">Chala Geta</p>
            <p className="text-gray-400 dark:text-gray-300">Admin</p>
          </div>
        </div>

        <div className="flex-col space-y-4">
          {/* Profile */}
          <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-lg" onClick={() => {}}>
            <AiOutlineUser className="text-2xl text-blue-500" />
            <p className="text-gray-700 dark:text-gray-200 font-medium">Profile</p>
          </div>
          
          {/* Inbox */}
          <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-lg" onClick={() => {}}>
            <AiOutlineMail className="text-2xl text-green-500" />
            <p className="text-gray-700 dark:text-gray-200 font-medium">Inbox</p>
          </div>

          {/* Change Password */}
          <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-lg" onClick={() => {}}>
            <AiOutlineUnlock className="text-2xl text-red-500" />
            <p className="text-gray-700 dark:text-gray-200 font-medium">Change Password</p>
          </div>

          {/* Settings */}
          <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-lg" onClick={() => {}}>
            <AiOutlineSetting className="text-2xl text-purple-500" />
            <p className="text-gray-700 dark:text-gray-200 font-medium">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile
