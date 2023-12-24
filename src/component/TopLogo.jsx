import React from 'react'
import ReactLogo from '../assets/react.svg'
import { AiOutlineMenuFold } from "react-icons/ai";

export default function TopLogo({setShowSideNav}) {
  
  return (
    <div className='flex flex-row items-center w-screen rounded-t-md justify-between shadow-black bg-slate-200 lg:hidden fixed 
    top-2 right-2 left-2 px-4 py-2 z-10'>
      <img src={ReactLogo} alt="logo" />
      <span className='' onClick={()=>setShowSideNav(true)}>
        <AiOutlineMenuFold className='bg-white font-bold rounded-md text-5xl p-2'/>
      </span>
      
    </div>
  )
}
