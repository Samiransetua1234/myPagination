import React from "react";
import Pastvul from "../component/Pastvul";
import QuickBut from "../component/QuickBut";
import Currentvul from "../component/Currentvul";
import TopLinks from "../component/TopLinks";
import Head from "../component/Head";
import SideNav from "../component/SideNav";
import TopLogo from "../component/TopLogo";

const DashBoard = () => {
  return (
    <section>
      <article className="h-screen w-screen p-6 flex flex-1 flex-row bg-slate-200 gap-6">
        <SideNav />
        <div className="flex flex-col overflow-y-auto overflow-x-hidden w-full gap-6 scrollbar relative pt-16 lg:pt-0">
          <TopLogo/>
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
