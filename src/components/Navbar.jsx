import React,{ useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import profile from '../data/profile.jpg'
import {Cart ,Chat, Notification, UserProfile} from '.';
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({
  title, customFunc,icon, color, dotColor,
}) => (

<TooltipComponent content={title} position='BottomCenter'>
  <button type='button' onClick={customFunc} style={{color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
    <span className=' inline-flex absolute rounded-full h-4 w-4 right-2 top-2' style={{background: dotColor}}>
      {icon}
    </span>
  </button>
</TooltipComponent>
)
const NavBar = () => {
 const { activeMenu, 
  setActiveMenu,
  isClicked, 
  setIsClicked,
  handleClick,
    screenSize,
      setScreenSize,
 } = useStateContext();

 useEffect(() => { 
  const handleResize = () =>{
    setScreenSize(window.innerWidth);
    window.addEventListener('resize',
       handleResize);

    handleResize();

    return () =>{
      window.removeEventListener('resize',handleResize)
    }
  }
 },[])
 
 useEffect(() =>{
if(screenSize <=900){
  setActiveMenu(false);
}
else{
  setActiveMenu(true)
}
 }, [screenSize])
  return (
    <div className='flex justify-between p-2 md:mx-6 relative border-b-1'>
      <NavButton title='Menu' customFunc={()=>setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
      color='blue'  icon={<AiOutlineMenu />}  />

      <div className='flex'>
        
           <NavButton 
         title='Chat' 
         customFunc={()=> handleClick("chat") } 
         color='blue' 
         dotColor='#03C9D7'
         icon={<BsChatLeft />} />
          
          <NavButton 
         title='Notification' 
         customFunc={()=> handleClick("notification") } 
         color='blue' 
         dotColor='#03C9D7'
         icon={<RiNotification3Line />} />
<TooltipComponent content="profile" position='BottomCenter'>
  <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClick('userProfile')}>
    <img src={profile} className='rounded-full w-7 h-7' alt="" />
    <p>
      <span className='text-gray-400 text-14'>Hi</span>{' '}
      <span className='text-gray-400 font-bold ml-1 text-14'>Chala</span>
    </p>
    <MdKeyboardArrowDown className='text-gray-400 text-14'  />
  </div>

</TooltipComponent>
{isClicked.chat && <Chat />} 
{isClicked.notification && <Notification />} 
{isClicked.userProfile && <UserProfile />} 
      </div>
    </div>
  )
}

export default NavBar
