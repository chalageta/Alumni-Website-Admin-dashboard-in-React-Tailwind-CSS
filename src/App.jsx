import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { FiSettings } from 'react-icons/fi';
import './App.css';
import { Navbar, Footer, ThemeSettings, Sidebar, Chat } from './components';
import { Add_category, ImageGallery, Events, Home, Orders, Announcements, Editor, Employees, News, AddNews, Kanban, Area, Users, Bar, ColorMapping, Financial, Line, Pie, Pyramid, Stacked } from './pages';
import { useStateContext } from './contexts/ContextProvider';
import Category from './pages/Category';
import Login from './components/Login';
import Register from './components/Register';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [activeMenu, setActiveMenu] = useState(false); // Sidebar state
 const {  themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className="flex relative dark:bg-main-dark-bg">
        {/* Settings Button */}
        <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
          <Tooltip content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: '50%' }}
            >
              <FiSettings />
            </button>
          </Tooltip>
        </div>

        {isLoggedIn ? (
  <div
    className={`transition-all duration-300 ${activeMenu  ? 'w-72' : 'w-0'} fixed sidebar dark:bg-secondary-dark-bg bg-white overflow-hidden`}
  >
    <Sidebar />
  </div>
) : (
  <div className="w-0 dark:bg-secondary-dark-bg">
    <Sidebar />
  </div>
)}


        {/* Main Content */}
        <div
          className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full transition-all duration-300 ${
            activeMenu ? 'md:ml-72' : 'md:ml-0'
          }`}
        >
          {/* Navbar */}
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>

          {/* Theme Settings */}
          {themeSettings && <ThemeSettings />}

          {/* Routes */}
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login onLogin={() => { setIsLoggedIn(true); setActiveMenu(true); }} />} />
          
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/membership" element={<Membership />} />

            {/* Protected Routes (only accessible if logged in) */}
            <Route 
              path="/" 
              element={
                   <Home />
                 } 
            />
            <Route 
              path="/announcements" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Announcements />
                </PrivateRoute>
              }
            />
            <Route 
              path="/chat" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Chat />
                </PrivateRoute>
              }
            />
            <Route 
              path="/employees" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Employees />
                </PrivateRoute>
              }
            />
            <Route 
              path="/users" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Users />
                </PrivateRoute>
              }
            />
            <Route 
              path="/events" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Events />
                </PrivateRoute>
              }
            />
            <Route 
              path="/category" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Category />
                </PrivateRoute>
              }
            />
            <Route 
              path="/news" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <News />
                </PrivateRoute>
              }
            />
            <Route 
              path="/add_news" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <AddNews />
                </PrivateRoute>
              }
            />
            <Route 
              path="/add_category" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Add_category />
                </PrivateRoute>
              }
            />
            <Route 
              path="/imageGallery" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <ImageGallery />
                </PrivateRoute>
              }
            />
            {/* Apps */}
            <Route 
              path="/kanban" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Kanban />
                </PrivateRoute>
              }
            />
            <Route 
              path="/editor" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Editor />
                </PrivateRoute>
              }
            />
            {/* Charts */}
            <Route 
              path="/line" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Line />
                </PrivateRoute>
              }
            />
            <Route 
              path="/area" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Area />
                </PrivateRoute>
              }
            />
            <Route 
              path="/bar" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Bar />
                </PrivateRoute>
              }
            />
            <Route 
              path="/ColorMapping" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <ColorMapping />
                </PrivateRoute>
              }
            />
            <Route 
              path="/Financial" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Financial />
                </PrivateRoute>
              }
            />
            <Route 
              path="/Pie" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Pie />
                </PrivateRoute>
              }
            />
            <Route 
              path="/Pyramid" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Pyramid />
                </PrivateRoute>
              }
            />
            <Route 
              path="/Stacked" 
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Stacked />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
