import React, { useState } from "react";
import Pastvul from "../component/Pastvul";
import QuickBut from "../component/QuickBut";
import Currentvul from "../component/Currentvul";
import TopLinks from "../component/TopLinks";
import Head from "../component/Head";
import SideNav from "../component/SideNav";
import TopLogo from "../component/TopLogo";


const DashBoard = () => {

  const[showSideNav, setShowSideNav] = useState(false)

  return (
    <section>
      <article className="h-screen w-screen p-6 flex flex-1 flex-row bg-slate-200 gap-6">
        <div className="hidden lg:flex">
        <SideNav />
        </div>
        <div className={`bg-[#b7adf484] h-full ${showSideNav?'translate-x-0':'translate-x-full'} transition-transform duration-300 ease-in-out flex flex-row-reverse absolute z-30 top-0 right-0 bottom-0 w-full lg:hidden`}>
          
        <SideNav setShowSideNav ={setShowSideNav} /> 
        
        </div>
        <div className="flex flex-col overflow-y-auto overflow-x-hidden w-full gap-6 scrollbar relative pt-16 lg:pt-0">
          <TopLogo setShowSideNav = {setShowSideNav}/>
          <Head />
          <div className="min-w-full">
            <div className="overflow-x-auto scrollbar">
            <TopLinks />
            </div>
          </div>
          <Currentvul />
          <QuickBut />
          <Pastvul />
        </div>
      </article>
    </section>
  );
};

export default DashBoard;
