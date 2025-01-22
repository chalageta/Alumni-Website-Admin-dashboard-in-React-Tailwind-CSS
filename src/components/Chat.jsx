import React, { useState } from 'react';
import ConversationItem from './ConversationItem';
import Messages from './Messages';

const Chat = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [conversations, setConversations] = useState([
        { id: 1, name: 'Gamachu Shuge', message: 'Hello there!', time: '10:30 AM', active: true },
        { id: 2, name: 'Dawit ', message: 'How are you?', time: '11:00 AM', active: false },
        { id: 3, name: 'Bisrat Dreje', message: 'Meeting at 3 PM', time: '12:15 PM', active: false },
        { id: 4, name: 'Dibora ', message: 'See you later!', time: '1:45 PM', active: false },
        { id: 5, name: 'Dachasa Fik', message: 'Meeting at 3 PM', time: '12:15 PM', active: false },
        { id: 6, name: 'Elia Dej ', message: 'See you later!', time: '1:45 PM', active: false },
    ]);

    // Filter conversations based on search query
    const filteredConversations = conversations.filter(
        (conv) =>
            conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            conv.message.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex bg-white dark:bg-gray-900">
            <div className="w-20 text-gray-500 h-screen flex flex-col items-center justify-between py-5">
                {/* Left panel (e.g., icons) */}
            </div>
            <div className="w-80 h-screen dark:bg-gray-800 bg-gray-100 p-2 hidden md:block">
                <div className="h-full overflow-y-auto">
                    <div className="text-xl font-extrabold text-gray-600 dark:text-gray-200 p-3">Messages</div>
                    <div className="search-chat flex p-3">
                        <input
                            className="input text-gray-700 dark:text-gray-200 text-sm p-3 focus:outline-none bg-gray-200 dark:bg-gray-700 w-full rounded-l-md"
                            type="text"
                            placeholder="Search by name or message"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="bg-gray-200 dark:bg-gray-700 flex justify-center items-center pr-3 text-gray-400 rounded-r-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className="text-lg font-semibold text-gray-600 dark:text-gray-200 p-3">Recent messages</div>
                    {filteredConversations.map((conv) => (
                        <ConversationItem
                            key={conv.id}
                            active={conv.active}
                            time={conv.time}
                            name={conv.name}
                            message={conv.message}
                        />
                    ))}
                </div>
            </div>
            <div className="flex-grow h-screen p-2 rounded-md">
                <Messages />
            </div>
        </div>
    );
};

export default Chat;
