import React from 'react'
import ReactLogo from '../assets/react.svg'
import { AiOutlineMenuFold } from "react-icons/ai";

export default function TopLogo() {
  return (
    <div className='flex flex-row items-center min-w-fit rounded-md justify-between bg-slate-200 lg:hidden fixed top-2 right-2 left-2 px-4 py-2 z-10'>
      <img src={ReactLogo} alt="logo" />
      <span className=''>
        <AiOutlineMenuFold className='bg-white font-bold text-5xl p-2'/>
      </span>
    </div>
  )
}
