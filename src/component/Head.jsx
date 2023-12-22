import React from "react";
import { TbTargetArrow } from "react-icons/tb";

export default function Head() {
  return (
    <header className="flex flex-row items-center justify-between w-full py-2">
      <h1 className="text-2xl font-bold">Vulnerability</h1>
      <div className="bg-white flex flex-row gap-1 items-center py-2 px-3 lg:w-60 rounded-md shadow-lg ">
        <TbTargetArrow className="text-2xl inline-block" />
        <span className="hidden lg:inline-block text-lg font-semibold">Target</span>
        <select
          name=""
          id=""
          className="outline-none  lg:w-48 rounded-lg p-1 custom-select"
        >
          <option value="">___</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>
    </header>
  );
}
