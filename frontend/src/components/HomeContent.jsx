import React from "react";
import { IftaarDowa, SahriDowa } from "./Prayer";
import { IftaarTime, PrayerTable, SehriTime } from "./TimeTable";
import Context from "../context/Context";

const HomeContent = () => {
  // const { prayerTimes } = useContext(Context);
  return (
    <main className=" w-[90%] md:w-[100%] lg:w-[90%] mx-auto flex flex-col items-center space-y-16 md:space-y-20  text-white py-40">
      <SehriTime />
      <SahriDowa />
      <IftaarTime />
      <IftaarDowa />
      {/* prayer table goes here  */}
      <PrayerTable />
    </main>
  );
};

export default HomeContent;
