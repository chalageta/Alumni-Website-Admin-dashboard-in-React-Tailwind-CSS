import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import Tooltip from '@mui/material/Tooltip';
import { useStateContext } from '../contexts/ContextProvider';
import { FaBell, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Notification = () => {
const [notifications, setNotifications] = useState([
    { id: 1, title: 'New message from Robel Tesfaye', time: '2 minutes ago', read: false, type: 'message', path: '/news' },
    { id: 2, title: 'Your profile was updated', time: '10 minutes ago', read: false, type: 'profile', path: '/profile' },
    { id: 3, title: 'New comment on your post', time: '30 minutes ago', read: false, type: 'comment', path: '/comments' },
    { id: 4, title: 'Password changed successfully', time: '1 hour ago', read: false, type: 'success', path: '/settings' },
  ]);

  const { setNotification } = useStateContext();
  const notificationRef = useRef(null);

  const handleDismiss = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotification(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setNotification]);

  // Render different icons based on notification type
  const renderIcon = (type) => {
    switch (type) {
      case 'message':
        return <FaEnvelope className="text-blue-500 text-xl" />;
      case 'profile':
        return <FaBell className="text-purple-500 text-xl" />;
      case 'comment':
        return <FaCheckCircle className="text-green-500 text-xl" />;
      case 'success':
        return <FaCheckCircle className="text-green-500 text-xl" />;
      default:
        return <FaBell className="text-gray-500 text-xl" />;
    }
  };

  return (
    <div className="w-full sm:w-80 fixed top-16 right-5 nav-item z-50">
      <div ref={notificationRef} className="h-auto dark:text-gray-200 dark:bg-gray-800 bg-white w-full shadow-xl rounded-lg p-4 transition-all duration-500">
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-lg dark:text-white">Notifications</p>
          <button
            type="button"
            onClick={() => setNotification(false)}
            style={{ color: 'rgb(153,171,180)', borderRadius: '50%' }}
            className="text-2xl hover:drop-shadow-md p-2 hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="space-y-3">
          {notifications.map((notification) => (
              <NavLink 
              to={notification.path} // Link to the notification type's path
          >
            <div
              key={notification.id}
              className={`flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ${
                notification.read ? 'bg-gray-100 dark:bg-gray-600' : 'bg-white dark:bg-gray-800 shadow-md'
              }`}
            >
              {renderIcon(notification.type)}
              <div className="flex-1">
                <p className={`font-medium ${notification.read ? 'text-gray-500 line-through' : 'text-black dark:text-white'}`}>
                  {notification.title}
                </p>
                <p className="text-xs text-gray-400">{notification.time}</p>
              </div>
              <Tooltip content="Dismiss" position="TopCenter">
                <button
                  type="button"
                  className="text-red-500 hover:bg-red-100 dark:hover:bg-red-800 rounded-full p-1"
                  onClick={() => handleDismiss(notification.id)}
                >
                  <MdOutlineCancel />
                </button>
              </Tooltip>
            </div>
            </NavLink>
          ))}
          {notifications.length === 0 && (
            <p className="text-center text-gray-500">No notifications available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;
