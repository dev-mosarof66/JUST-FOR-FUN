import React from "react";
import {NavLink} from 'react-router-dom'

const SideBar = () => {
  return (
    <div className="text-white w-full h-screen fixed top-14 flex  justify-center py-2 bg-black backdrop-blur-xs z-30">
      <ul className="w-[70%] text-center space-y-3">
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
      </ul>
    </div>
  );
};

export default SideBar;
