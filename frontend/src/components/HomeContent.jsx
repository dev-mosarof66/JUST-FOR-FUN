import React from "react";
import { IftaarDowa, SahriDowa } from "./Prayer";

const HomeContent = () => {
  return (
    <main className=" w-[90%] md:w-[70%] mx-auto flex flex-col items-center space-y-16 md:space-y-20  text-white py-40">
      <div className="w-full md:w-[50%] flex flex-col items-center justify-center space-y-1">
        <h1 className="w-full text-lg md:text-xl font-bold bg-amber-300 text-black text-center">
          আজকের সাহরি
        </h1>
        <div className="w-full text-center flex flex-col items-center">
          {/* <p className="w-[60%] bg-green-800 py-2 my-1">
            সময় শুরুঃ <span>5.43 AM</span>{" "}
          </p> */}
          <p className="w-[60%] bg-green-800 py-2 my-1">
            শেষ সময়ঃ <span className="px-3 font-semibold">6.10 AM</span>
          </p>
        </div>
      </div>
      <SahriDowa />
      {/* prayer table goes here  */}
      <PrayerTable/>
      <div className="w-full md:w-[50%] flex flex-col items-center justify-center space-y-1">
        <h1 className="w-full text-lg md:text-xl font-bold bg-amber-300 text-black text-center">
          আজকের ইফতার
        </h1>
        <div className="w-full text-center flex flex-col items-center">
          <p className="w-[60%] bg-green-800 py-2 my-1">
            সময়ঃ
            <span className="px-3 font-semibold">6.15 PM</span>
          </p>
        </div>
      </div>
      <IftaarDowa />
    </main>
  );
};

const PrayerTable = () => {
  return (
    <div className="w-full flex justify-center">
      <table className="  shadow-lg flex sm:block">
        <thead>
          <tr className="bg-amber-400 flex flex-col sm:flex sm:flex-row">
            <th className="px-4 md:px-12 py-4 text-base md:text-lg text-black font-bold ">
              ফজর
            </th>
            <th className="px-4 sm:px-12 py-4 text-base md:text-lg text-black font-bold ">
              জোহর
            </th>
            <th className="px-4 md:px-12 py-4 text-base md:text-lg text-black font-bold ">
              আসর
            </th>
            <th className="px-4 md:px-12 py-4 text-base md:text-lg text-black font-bold ">
              মাগরিব
            </th>
            <th className="px-4 md:px-12 py-4 text-base md:text-lg text-black font-bold ">
              এশা
            </th>
          </tr>
        </thead>
        <tr className="bg-green-800  flex flex-col sm:flex sm:flex-row divide-green-700 text-center">
          <td className="px-4 md:px-12 text-sm md:text-base py-4 text-center text-white hover:bg-green-700 transition-colors">
            5.15 AM
          </td>
          <td className="px-4 sm:px-9 py-6 sm:py-4 text-sm md:text-base  text-center text-white hover:bg-green-700 transition-colors">
            1.30 PM
          </td>
          <td className="px-4 md:px-12 text-sm md:text-base py-4 text-center text-white hover:bg-green-700 transition-colors">
            5.25 PM
          </td>
          <td className="px-4 md:px-12 text-sm md:text-base py-4 text-center text-white hover:bg-green-700 transition-colors">
            5.25 PM
          </td>
          <td className="px-4 md:px-12 text-sm md:text-base py-4 text-center text-white hover:bg-green-700 transition-colors">
            7.45 PM
          </td>
        </tr>
      </table>
    </div>
  );
};

export default HomeContent;
