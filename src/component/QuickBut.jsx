import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { PiBroadcast } from "react-icons/pi";
import { SiOpenai } from "react-icons/si";

const QuickBut = () => {
  return (
    <section className="">
      <div className="flex flex-row flex-wrap gap-4 p-1">
        <button className="gradient-button" tabIndex="1">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6561d6] via-[#0291ff] to-[#46a6e9]">
            Request Retest
          </span>
        </button>
        <button className="gradient-button" tabIndex="2">
          <AiOutlineDownload className="inline-block mr-1 text-purple-500" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6561d6] via-[#0291ff] to-[#46a6e9]">
            Download Report
          </span>
        </button>
        <button className="gradient-button" tabIndex="3">
          <PiBroadcast className="inline-block mr-1 text-purple-500" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6561d6] via-[#0291ff] to-[#46a6e9]">
            See Live
          </span>
        </button>

        <button className="gradient-button" tabIndex="4">
          <SiOpenai className="inline-block mr-1 text-purple-500 h-5 w-5" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6561d6] via-[#0291ff] to-[#46a6e9]">
            Fix Using AI
          </span>
        </button>
      </div>
    </section>
  );
};

export default QuickBut;
