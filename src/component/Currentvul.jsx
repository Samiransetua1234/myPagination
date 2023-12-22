import React from "react";
import { TbAdjustmentsFilled } from "react-icons/tb";
import { FaCircle } from "react-icons/fa";
import { BsDoorOpenFill } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { AiOutlineFileSearch } from "react-icons/ai";

const Currentvul = () => {
  return (
    <section className="flex flex-col gap-3 bg-white py-3 px-6 rounded-md">
      <div className="flex flex-row justify-between">
        <h1 className="text-lg font-bold">Current Vulnerabilities (Open)</h1>
        <div className="flex flex-row items-center gap-4 p-1 rounded-md bg-gradient-to-r from-[#6752f6] to-[#009ffd]">
          <TbAdjustmentsFilled className="rotate-90 p-[0.12rem] text-2xl rounded-sm bg-white text-[#6752f6]" />
          <span className="text-white text-xs">Filter & Sort</span>
        </div>
      </div>
      <div>
        <table className="w-full">
          <tbody className="w-full">
            <tr className="flex flex-row justify-between py-1 px-7 rounded-md font-semibold bg-[#8b83d34b]">
              <td className="text-gray-600">Open TCP Port 2095</td>
              <td>
                <p>
                  <FaCircle className="text-[#fc0000] inline-block mr-1" />{" "}
                  Critical
                </p>
              </td>
              <td>
                <p className="text-[#dc6c00] inline-flex items-center">
                  <BsDoorOpenFill className="mr-2" />
                  Open Port Vulnerability
                </p>
              </td>
              <td>
                <p className="inline-flex items-center">
                  <CiCirclePlus className="mr-2 text-purple-600" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6561d6] to-[#46a6e9]">
                    See More
                  </span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="font-semibold py-1 px-7">CVSS 8.6</p>
      <div className="flex flex-row gap-3">
        <div className="bg-[#f6f6f4] rounded-md w-[21rem] px-2 py-3">
          <table className="text-sm font-semibold w-2/3">
            <caption className="text-sm font-semibold">References</caption>
            <tbody className="">
              <tr>
                <td>BID</td>
                <td>48626</td>
              </tr>
              <tr>
                <td>CVE</td>
                <td>CVE-2011-1473</td>
              </tr>
              <tr>
                <td>XREF</td>
                <td>OSVDB:73894</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-[#f6f6f4] rounded-md w-[21rem] px-2 py-3">
          <span className="text-sm font-semibold">See Also</span>
          <div className="text-sm font-semibold flex flex-col text-blue-600">
            <a href="">http:// Lorem, ipsum dolor sit.com</a>
            <a href="">http:// Lorem, ipsum dolor sit.com</a>
            <a href="">http:// Lorem, ipsum dolor sit.com</a>
          </div>
        </div>
      </div>
      <p className="text-sm font-medium px-2">Plugin Information</p>
      <p className="text-sm px-2">
        Publication date:2006/06/05, Modification date:2012/05/03
      </p>
      <div>
        <button className="inline-flex items-center font-semibold bg-[#8b83d34b] rounded-md py-1 px-2">
          <AiOutlineFileSearch />
          View Details
        </button>
      </div>
    </section>
  );
};

export default Currentvul;
