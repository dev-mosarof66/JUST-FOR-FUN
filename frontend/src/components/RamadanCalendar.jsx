import React, { useContext } from "react";
import Context from "../context/Context";
import Loader from "./Loader/Loader";
function RamadanCalendar() {
  const { fullCalendar } = useContext(Context);
  return (
    <div className="text-white flex flex-col items-center  w-full  space-y-10">
      <h1 className="text-xl sm:text-2xl font-semibold bg-amber-700 py-1 px-10">
        Ramadan Calendar
      </h1>
      <table className="w-[90%] sm:w-[70%] md:w-[700px]">
        <thead className="w-full">
          <tr className="bg-green-800">
            <th>দিন</th>
            <th className="py-1">তারিখ</th>
            <th className="py-1">সেহরি</th>
            <th className="py-1">ইফতার</th>
          </tr>
        </thead>
        <tbody className="w-full text-center">
          {fullCalendar && fullCalendar.length > 0 ? (
            fullCalendar.map((item, index) => (
              <tr key={index} className="bg-amber-700">
                <td className="py-1">{parseInt(item.date.hijri.day) - 1}</td>
                <td className="py-1">{item.date.readable}</td>
                <td className="py-1">{item.timings.Fajr}</td>
                <td className="py-1">{item.timings.Maghrib}</td>
              </tr>
            ))
          ) : (
            <Loader />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RamadanCalendar;
