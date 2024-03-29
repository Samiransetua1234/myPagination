import React from "react";
import reactLogo from "../assets/react.svg";
import { BiStats } from "react-icons/bi";
import { LuTarget } from "react-icons/lu";
import { GoAlertFill } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";

export default function SideNav({setShowSideNav}) {
  
  return (
    <div className="flex flex-col h-full w-4/6 sm:w-2/3 md:w-1/2 lg:w-[16rem] bg-white p-5 justify-between rounded-md">
      <div className="flex flex-col items-start gap-2">
      <div className="flex flex-row w-full justify-between items-start">
      <span className="text-xl lg:hidden" onClick={()=>setShowSideNav(false)}><ImCross/></span>
        <img src={reactLogo} className="p-2 h-24" alt="logo" />
      </div>
        <button className="flex flex-row items-center w-full bg-transparent rounded-md p-2 hover:bg-[#4a3dbf4b] active:bg-[#4a3dbf4b] focus:outline-none focus:bg-[#4a3dbf4b] ...">
          <BiStats className="inline-block text-black mr-3" /> Stats
        </button>
        <button className="flex flex-row items-center font-semibold rounded-md p-2 w-full bg-transparent hover:bg-[#4a3dbf4b] active:bg-[#4a3dbf4b] focus:bg-[#4a3dbf4b] focus:outline-none ...">
          <LuTarget className="inline-block text-purple-500 mr-3" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6561d6] to-[#46a6e9]">
            Vulnerability
          </span>
        </button>
      </div>
      <div className="flex flex-col items-start gap-2 justify-self-end">
        <button className="flex flex-row items-center rounded-md py-2 px-4 bg-gradient-to-r from-[#c90200] to-[#ca5101] text-white w-full">
          <GoAlertFill className="inline-block mr-3" /> Report incident
        </button>
        <button className="flex flex-row items-center rounded-md py-2 px-4 w-full border-2">
          <IoLogOutOutline className="inline-block mr-3" /> Logout
        </button>
      </div>
    </div>
  );
}
