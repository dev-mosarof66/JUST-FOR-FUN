import React, { useContext } from "react";
import { IoIosContrast } from "react-icons/io";
import { BsMoonStars } from "react-icons/bs";
import { MdDeviceUnknown } from "react-icons/md";
import Context from "../context/Context";
function ThemeButton() {
  // const { showMenu, setMenuBar, Theme, setTheme } = useContext(Context);
  return (
    <div className="text-white inline-flex absolute bottom-0 right-0">
      <Content />
    </div>
  );
}

const Content = () => {
  return (
    <div className="text-white bg-gray-700 list-none flex flex-col items-center justify-center py-2 space-y-2">
      <li className="w-full flex items-center space-x-3 px-10 py-1 cursor-pointer hover:bg-gray-600/80 active:bg-gray-600/80 transition duration-300 delay-75">
        <IoIosContrast className="text-xl" />
        <p>Dark</p>
      </li>
      <li className="w-full flex items-center space-x-3 px-10 py-1 cursor-pointer hover:bg-gray-600/80 active:bg-gray-600/80 transition duration-300 delay-75">
        <BsMoonStars />
        <p>Light</p>
      </li>
      <li className="w-full flex items-center space-x-3 px-10 py-1 cursor-pointer hover:bg-gray-600/80 active:bg-gray-600/80 transition duration-300 delay-75">
        <MdDeviceUnknown />
        <p>Auto</p>
      </li>
    </div>
  );
};

export default ThemeButton;
