import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { FiSettings } from 'react-icons/fi';
import './App.css';
import { Navbar, Footer, ThemeSettings, Sidebar } from './components';
import { Add_category, ImageGallery, Events, Dashboard, Orders, Announcements, Editor, Employees, News, AddNews, Kanban, Area, Users, Bar, ColorMapping, Financial, Line, Pie, Pyramid, Stacked } from './pages';
import { useStateContext } from './contexts/ContextProvider';
import Category from './pages/Category';
import Login from './pages/Login';
const App = () => {
  const {activeMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useStateContext();
   return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{ zIndex: "1000" }}>
          <Tooltip content="Settings" position='Top'>
            <button
              type='button'
              className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: '50%' }}
            >
              <FiSettings />
            </button>
          </Tooltip>
        </div>
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            <Sidebar />
          </div>
        ) : (
          <div className='w-0 dark:bg-secondary-dark-bg'>
            <Sidebar />
          </div>
        )}
        <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
          {window.location.pathname !== '/' && (
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          )}
          <div>
            {themeSettings && <ThemeSettings />}
            <Routes>
              {/* Define your routes here */}
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/' element={<Login />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/announcements' element={<Announcements />} />
              <Route path='/employees' element={<Employees />} />
              <Route path='/users' element={<Users />} />
              <Route path='/events' element={<Events />} />
              <Route path='/category' element={<Category />} />
              <Route path='/news' element={<News />} />
              <Route path='/add_news' element={<AddNews />} />
              <Route path='/add_category' element={<Add_category />} />
              <Route path='/imageGallery' element={<ImageGallery />} />
              {/* Apps */}
              <Route path='/kanban' element={<Kanban />} />
              <Route path='/editor' element={<Editor />} />
              {/* Charts */}
              <Route path='/line' element={<Line />} />
              <Route path='/area' element={<Area />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/ColorMapping' element={<ColorMapping />} />
              <Route path='/Financial' element={<Financial />} />
              <Route path='/Pie' element={<Pie />} />
              <Route path='/Pyramid' element={<Pyramid />} />
              <Route path='/Stacked' element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;