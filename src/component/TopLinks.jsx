import React from "react";
import { FaCircle } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { BsDoorOpenFill } from "react-icons/bs";

export default function TopLinks() {
  return (
    <section className="inline-flex">
      <div className="inline-flex flex-col gap-3">
        <div className="inline-flex">
          <div className="inline-flex flex-row gap-2 bg-white p-2 font-semibold rounded-md shadow-lg">
            <p>Vulnerability Severity : </p>
            <p>
              <FaCircle className="text-[#fc0000] inline-block mr-1" />
              Critical
            </p>
            <p>
              <FaCircle className="text-[#f9665e] inline-block mr-1" />
              High
            </p>
            <p>
              <FaCircle className="text-[#f8ca12] inline-block mr-1" />
              Medium
            </p>
            <p>
              <FaCircle className="text-[#4680b2] inline-block mr-1" />
              Low
            </p>
            <p>
              <FaCircle className="text-[#05bf76] inline-block mr-1" />
              Accepted
            </p>
          </div>
        </div>
        <div className="inline-flex flex-row font-semibold gap-3 p-2 bg-white rounded-md shadow-lg">
          <p className="text-[#dc6c00]">
            <BsDoorOpenFill className="inline-flex items-center mr-2" />
            Open Port Vulnerability
          </p>
          <p className="text-[#8227b5]">
            <BsGlobe className="inline-flex items-center mr-2" />
            Network Based Vulnerability
          </p>
          <p className="text-[#184ad2]">
            <BsGlobe className="inline-flex items-center bg-[#184ad2] text-white p-[.1rem] rounded-[100%] mr-2" />
            Website Based Vulnerability
          </p>
        </div>
      </div>
    </section>
  );
}
