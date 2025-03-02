import React from "react";
import { IftaarDowa, SahriDowa } from "./Prayer";
import { IftaarTime, PrayerTable, SehriTime } from "./TimeTable";
import Context from "../context/Context";

const HomeContent = () => {
  // const { prayerTimes } = useContext(Context);
  return (
    <main className=" w-[90%] md:w-[100%] lg:w-[90%] mx-auto flex flex-col items-center space-y-10 md:space-y-10  text-white py-0">
      <div className="w-full">
        <h1 className="text-sm sm:text-xl md:text-xl text-left">
          আপনার বর্তমান ঠিকানাঃ{" "}
          <span className="text-xs sm:text-sm md:text-lg text-yellow-600 font-semibold">
            Rajshahi Division,Bangladesh
          </span>
        </h1>
      </div>
      <div className=" w-[90%] md:w-[100%] lg:w-[90%] mx-auto flex flex-col items-center space-y-10 md:space-y-10  text-white py-0">
        <SehriTime />
        <SahriDowa />
        <IftaarTime />
        <IftaarDowa />
        {/* prayer table goes here  */}
        <PrayerTable />
      </div>
    </main>
  );
};

export default HomeContent;
