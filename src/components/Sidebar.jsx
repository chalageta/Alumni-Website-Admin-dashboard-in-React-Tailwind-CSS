import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import Tooltip from '@mui/material/Tooltip';
import { links } from '../data/constants';
import { useStateContext } from '../contexts/ContextProvider';
import logo  from '../data/logo.png';

const Sidebar = () => {
    const { activeMenu, setActiveMenu,screenSize, currentColor } = useStateContext();

   const handleCloseSideBar = () => {
  if (activeMenu && screenSize <= 900) {
    setActiveMenu(false);
  }
};

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg rounded-lg bg-blue-700 text-white text-md m-2 ';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    return (
        <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
            {activeMenu && (
                <>
                    <div className='flex justify-between items-center'>
                        <Link to='/' onClick={handleCloseSideBar} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900 dark:text-white'>
                             <img src={logo} className='rounded-lg w-12 h-12' alt="" /> <span>ECC Alumni</span>
                        </Link>
                        <Tooltip content='Menu' position='BottomCenter'>
                            <button
                                type='button'
                                onClick={() => setActiveMenu(prevActiveMenu => !prevActiveMenu)} // Use functional update
                                className='text-xl p-3 rounded-full hover:bg-light-gray mt-4 block md:hidden'
                            >
                                <MdOutlineCancel />
                            </button>
                        </Tooltip>
                    </div>
                    
                    <div className='mt-10'>
                        {links.map((item, index) => (
                             <div key={`${item.title}-${index}`}> {/* Unique key for each section */}
           <p className='text-gray-400 m-3 mt-4 uppercase'>{item.title}</p>
                                {item.links.map((link) => (
                                    <NavLink
                                        to={`/${link.name}`}
                                        key={link.name}
                                        onClick={handleCloseSideBar}
                                        style={({isActive}) => ({ backgroundColor: isActive ? currentColor : ''})}
                                        className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                    >
                                        {link.icon}
                                        <span className='capitalize'>{link.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Sidebar;
