import React from "react";
import { TbAdjustmentsFilled } from "react-icons/tb";
import { BsGlobe } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";

const Pastvul = () => {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-row justify-between">
        <h1 className="text-lg font-bold">Past Vulnerabilities (Fixed)</h1>
        <div className="flex flex-row items-center gap-4 p-1 rounded-md bg-gradient-to-r from-[#6752f6] to-[#009ffd]">
          <TbAdjustmentsFilled className="rotate-90 p-[0.12rem] text-2xl rounded-sm bg-white text-[#6752f6]" />
          <span className="text-white text-xs">Filter & Sort</span>
        </div>
      </div>
      <div>
        <table className="w-full text-left rounded-md overflow-hidden">
          <thead className="bg-[#e9f1fb]">
            <tr>
              <th className="pl-6 w-1/2">Name</th>
              <th className="w-1/6">Date</th>
              <th className="w-1/5">Vulnerability Report</th>
              <th>Retest Report</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-600 bg-[#fdfdfb] shadow-inner border-b-[.05rem] border-[#e2e2df60]">
              <td className="pl-6 w-1/2">
                {" "}
                <BsGlobe className="inline-flex items-center mr-2 text-[#8227b5]" />{" "}
                <FaCircle className="text-[#fc0000] inline-block mr-1" />
                <span className="text-black">Critical</span> Open TCP Port 2095
              </td>
              <td className="w-1/6">9/2/2014</td>
              <td className="w-1/5">
                <AiOutlineDownload className="inline-block mr-1" /> Download
              </td>
              <td>
                <AiOutlineDownload className="inline-block mr-1" /> Download
              </td>
            </tr>
            <tr className="text-gray-600 bg-[#fdfdfb] shadow-inner border-b-[.05rem] border-[#e2e2df60]">
              <td className="pl-6 w-1/2">
                {" "}
                <BsGlobe className="inline-flex items-center mr-2 text-[#8227b5]" />{" "}
                <FaCircle className="text-[#fc0000] inline-block mr-1" />
                <span className="text-black">Critical</span> Open TCP Port 2095
              </td>
              <td className="w-1/6">9/2/2014</td>
              <td className="w-1/5">
                <AiOutlineDownload className="inline-block mr-1" /> Download
              </td>
              <td>
                <AiOutlineDownload className="inline-block mr-1" /> Download
              </td>
            </tr>
            <tr className="text-gray-600 bg-[#fdfdfb] shadow-inner border-b-[.05rem] border-[#e2e2df60]">
              <td className="pl-6 w-1/2">
                {" "}
                <BsGlobe className="inline-flex items-center mr-2 text-[#8227b5]" />{" "}
                <FaCircle className="text-[#fc0000] inline-block mr-1" />
                <span className="text-black">Critical</span> Open TCP Port 2095
              </td>
              <td className="w-1/6">9/2/2014</td>
              <td className="w-1/5">
                <AiOutlineDownload className="inline-block mr-1" /> Download
              </td>
              <td>
                <AiOutlineDownload className="inline-block mr-1" /> Download
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Pastvul;
