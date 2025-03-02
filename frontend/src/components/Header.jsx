import React, { useContext } from "react";
import { RiMenu4Line } from "react-icons/ri";

import assets from "../assets/assets";
import Context from "../context/Context";
const Header = () => {
  const { showMenu, setMenuBar } = useContext(Context);
  return (
    <header className="bg-amber-900/70 fixed  w-full backdrop-blur-sm z-30">
      <nav className="w-[90%] md:w-[80%] mx-auto py-2 px-5 flex items-center justify-between text-white">
        <ul className="flex items-center space-x-3">
          <img className="w-8" src={assets.Logo} />
          <p className="text-2xl font-bold relative">
            Iftaar
            <span className="text-yellow-100 text-xs absolute -right-5">
              BD
            </span>
          </p>
        </ul>
        <ul className="w-fit  items-center justify-center space-x-4 py-2 text-sm hidden lg:flex">
          <li className=" hover:text-yellow-300 active:text-yellow-300 cursor-pointer transition duration-150 delay-75">
            নামাজের সময়সূচি
          </li>
          <li className=" hover:text-yellow-300 active:text-yellow-300 cursor-pointer transition duration-150 delay-75">
            রমজানের সময়সূচি
          </li>
          <li className=" hover:text-yellow-300 active:text-yellow-300 cursor-pointer transition duration-150 delay-75">
            কোরআন শিক্ষা
          </li>
          <li className=" hover:text-yellow-300 active:text-yellow-300 cursor-pointer transition duration-150 delay-75">
            দৈনিক হাদিস
          </li>
          <button>
            <span className="bg-green-800 border py-2 px2 border-green-800 px-2  rounded-sm hover:bg-transparent hover:border hover:border-green-800 transition duration-300 delay-75 cursor-pointer hover:text-amber-300">
              <span className="px-2">সাইন আপ</span>
            </span>
          </button>
        </ul>

        <ul
          onClick={() => setMenuBar(!showMenu)}
          className="px-2 py-2 hover:bg-gray-700/30 active:bg-gray-700/50 cursor-pointer transition duration-300 delay-75 block lg:hidden"
        >
          <RiMenu4Line className="text-2xl" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
