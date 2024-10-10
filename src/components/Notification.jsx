import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';
import { AiOutlineNotification } from 'react-icons/ai';

const notificationsData = [
  {
    id: 1,
    title: 'New message from John Doe',
    time: '2 minutes ago',
    read: false,
  },
  {
    id: 2,
    title: 'Your profile was updated',
    time: '10 minutes ago',
    read: true,
  },
  {
    id: 3,
    title: 'New comment on your post',
    time: '30 minutes ago',
    read: false,
  },
  {
    id: 4,
    title: 'Password changed successfully',
    time: '1 hour ago',
    read: true,
  },
];

const Notification = () => {
  const { setNotification } = useStateContext();

  return (
    <div className="w-screen fixed nav-item top-16 right-12">
      <div className="h-auto float-right dark:text-gray-200 dark:bg-gray-800 bg-white w-1/4 shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-xl">Notifications</p>
          <button
            type="button"
             onClick={() => setNotification(false)}
            style={{ color: 'rgb(153,171,180)', borderRadius: '50%' }}
            className="text-xl hover:drop-shadow-sm p-2 hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>

        {/* Notification List */}
        <div className="flex-col space-y-4">
          {notificationsData.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-center gap-4 cursor-pointer p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                notification.read ? 'bg-gray-200 dark:bg-gray-600' : ''
              }`}
            >
              <AiOutlineNotification className={`text-2xl ${notification.read ? 'text-gray-400' : 'text-blue-500'}`} />
              <div className="flex-1">
                <p className={`text-gray-700 dark:text-gray-200 font-medium ${notification.read ? 'line-through' : ''}`}>
                  {notification.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{notification.time}</p>
              </div>
              <TooltipComponent content="Dismiss" position="TopCenter">
                <button
                  type="button"
                  className="text-red-500 hover:bg-red-100 rounded-full p-1"
                  onClick={() => {
                    // Handle dismiss notification logic here
                    console.log(`Dismissed notification: ${notification.title}`);
                  }}
                >
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
