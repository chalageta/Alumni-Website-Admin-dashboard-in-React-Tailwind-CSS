import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import './App.css';
import { Navbar, Footer, ThemeSettings, Sidebar} from './components';
import { Dashboard,Orders, Events,Editor,Customers,ColorPicker,Calendar,Kanban,Area,Bar,ColorMapping,Financial,Line,Pie,Pyramid,Stacked} from './pages';
import { useStateContext } from './contexts/ContextProvider';
const App = () => {
  const {activeMenu} = useStateContext();
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position='Top'>
              <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background:'blue', borderRadius: '50%'}}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg '>
          <Sidebar />
            </div>
          )}
          <div className={ `dark:bg-main-dark-bg bg-main-bg min-h-screen  w-full  ${activeMenu ? 'md:ml-72 ' : 
            ' flex-2'} `
          }>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              < Navbar />
               </div>
              
               <div >
                <Routes>
                  {/* Dashboard */}
                  <Route path='/' element={<Dashboard /> }/>
                  <Route path='/dashboard' element={<Dashboard /> }/>

                  {/* Pages */}
                  <Route path='/orders' element={<Orders /> }/>
                  <Route path='/events' element={<Events /> }/>
                  <Route path='/customers' element={<Customers /> }/>
                  {/* Apps */}
                  <Route path='/kanban' element={<Kanban /> }/>
                  <Route path='/editor' element={<Editor /> }/>
                  <Route path='/calendar' element={<Calendar /> }/>
                  <Route path='/color-picker' element={<ColorPicker /> }/>
                  {/* Charts */}
                  <Route path='/line' element={<Line /> }/>
                  <Route path='/area' element={<Area /> }/>
                  <Route path='/bar' element={<bar /> }/>
                  <Route path='/ColorMapping' element={<ColorMapping /> }/>
                  <Route path='/Financial' element={<Financial /> }/>
                  <Route path='/Pie' element={<Pie />} />
                  <Route path='/Pyramid' element={<Pyramid /> }/>
                  <Route path='/Stacked' element={<Stacked /> }/>
                  </Routes>
               </div>
                </div>
        </div>
      </BrowserRouter>
    </div>
  )

}

export default App

