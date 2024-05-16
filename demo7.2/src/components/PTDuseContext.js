import React, { createContext,useContext, useState } from 'react'
import PTDuseContext1 from './PTDuseContext1';
export const ThemeContext = createContext();
export default function PTDuseContext() {
    const [theme,setTheme] = useState('red');
    const ptdHandleChange = ()=>{
        setTheme(theme==='red'?'blue':'red');
    }
  return (
    <ThemeContext.Provider  value = {theme}>
    <div className='alert'>
        <h2> Demo useContext</h2>
        <PTDuseContext1 />
        <button onClick={ptdHandleChange}> Change bgColor</button>
    </div>
    </ThemeContext.Provider>
  )
}
