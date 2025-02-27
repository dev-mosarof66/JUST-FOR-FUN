import React, { useContext } from "react";
import { RiMenu4Line } from "react-icons/ri";

import assets from "../assets/assets";
import Context from "../context/Context";
const Header = () => {
  const { showMenu, setMenuBar } = useContext(Context);
  return (
    <header className="bg-amber-900/70 fixed w-full backdrop-blur-sm">
      <nav className="w-[90%] mx-auto py-2 px-5 flex items-center justify-between text-white">
        <ul className="flex items-center space-x-3">
          <img className="w-8" src={assets.Logo} />
          <p className="text-2xl font-bold relative">
            Iftaar
            <span className="text-yellow-100 text-xs absolute -right-5">
              BD
            </span>
          </p>
        </ul>
        <ul
          onClick={() => setMenuBar(!showMenu)}
          className="px-2 py-2 hover:bg-gray-700/30 active:bg-gray-700/50 cursor-pointer transition duration-300 delay-75"
        >
          <RiMenu4Line className="text-2xl" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
