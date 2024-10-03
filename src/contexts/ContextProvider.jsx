import React,{createContext,useContext,useState} from 'react'
 const StateContext = createContext();
    const initialState ={
        chat: false,
        cart: false,
        userProfile: false,
        notification: false
    }
export const ContextProvider = ({children}) => {
const [activeMenu, setActiveMenu] = useState(false);
const [isClicked, setIsClicked] = useState(initialState);
const [screenSize, setScreenSize] = useState(undefined);
const [currentColor, setCurrentColor] = useState('#03C9D7');
const [currentMode, setCurrentMode] = useState('Dark');
const [themeSettings, setThemeSettings] = useState(false);

const setMode = (e) => {
   // Update the current mode state
   setCurrentMode(e.target.value);

   // Save the mode to localStorage
   localStorage.setItem('themeMode', e.target.value);

   // Close the theme settings (optional)
   setThemeSettings(false);
};

const setColor = (color) =>{
   setCurrentColor(color);
   localStorage.setItem('colorMode', color);
   setThemeSettings(false);
}

const handleClick = (clicked) => {
   setIsClicked({...initialState, [clicked]:true});
};

  return (
   <StateContext.Provider
   value={{
      activeMenu,
      setActiveMenu,
      isClicked,
      setIsClicked,
      handleClick,
      screenSize,
      setScreenSize,
      currentColor,
      currentMode,
      themeSettings, 
      setThemeSettings,
      setMode,
      setColor,


   }}>

{children}
   </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);