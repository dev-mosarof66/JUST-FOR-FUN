import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="text-white w-full h-screen fixed top-14 flex  justify-center py-2 bg-black backdrop-blur-xs md:hidden z-30">
      <ul className="w-[70%]  space-y-3 text-center">
        <li className="bg-green-800 w-full py-1 rounded-sm hover:text-yellow-300 active:text-yellow-300 cursor-pointer transition duration-150 delay-75">
          নামাজের সময়সূচি
        </li>
        <li className="bg-green-800 w-full py-1 rounded-sm hover:text-yellow-300 active:text-yellow-300 cursor-pointer transition duration-150 delay-75">
          রমজানের সময়সূচি
        </li>
        <li className="bg-green-800 w-full py-1 rounded-sm hover:text-yellow-300 active:text-yellow-300 cursor-pointer transition duration-150 delay-75">
          কোরআন শিক্ষা
        </li>
        <li className="bg-green-800 w-full py-1 rounded-sm hover:text-yellow-300 active:text-yellow-300 cursor-pointer transition duration-150 delay-75">
          দৈনিক হাদিস
        </li>
        <li>
          <button>
            <span className="bg-green-800 border py-2 px2 border-green-800 px-2  rounded-sm acitve:bg-transparent hover:border active:border-green-800 transition duration-300 delay-75 cursor-pointer active:text-amber-500 hover:bg-transparent hover:text-amber-300">
              <span className="px-2">সাইন আপ</span>
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
