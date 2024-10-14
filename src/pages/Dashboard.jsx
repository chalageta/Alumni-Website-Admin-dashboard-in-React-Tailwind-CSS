import React from 'react';
import { FaNewspaper, FaBullhorn, FaImages, FaUsers } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; // Import NavLink

const Dashboard = () => {
  const data = [
    {
      title: 'Total News',
      count: 120,
      icon: <FaNewspaper className="text-blue-500 text-3xl" />, // Set icon color
      bgColor: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      path: '/news', // Path for News page
    },
    {
      title: 'Total Announcements',
      count: 30,
      icon: <FaBullhorn className="text-green-500 text-3xl" />, // Set icon color
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      path: '/announcements', // Path for Announcements page
    },
    {
      title: 'Total Gallery',
      count: 50,
      icon: <FaImages className="text-yellow-500 text-3xl" />, // Set icon color
      bgColor: 'bg-yellow-500',
      hoverColor: 'hover:bg-yellow-600',
      path: '/imageGallery', // Path for Gallery page
    },
    {
      title: 'Total Users',
      count: 200,
      icon: <FaUsers className="text-purple-500 text-3xl" />, // Set icon color
      bgColor: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
      path: '/users', // Path for Users page (if applicable)
    },
  ];

  return (
    <div className="p-5 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <NavLink // Use NavLink for navigation
            key={index}
            to={item.path} // Set the path for navigation
            className={`flex items-center p-4 rounded-lg shadow-lg transition-transform transform duration-300 ease-in-out ${item.bgColor} ${item.hoverColor} dark:bg-gray-800 dark:border-gray-700 border border-gray-300 hover:shadow-xl`}
          >
            <div className="flex-shrink-0 p-3 bg-white rounded-full shadow-md"> {/* Icon container */}
              {item.icon}
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold dark:text-white">{item.title}</h2>
              <p className="text-xl font-bold dark:text-gray-300">{item.count}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
