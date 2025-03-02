import React from "react";

function RamadanCalendar() {
  return (
    <div className="text-white flex flex-col items-center  w-full h-screen space-y-10">
      {/* i want to render the ramadan calendar by fetching data from backend */}
      <h1 className="text-xl sm:text-2xl font-semibold bg-amber-700 py-1 px-10">
        Ramadan Calendar
      </h1>
      <table className="w-[90%] sm:w-[70%] md:w-[700px]">
        <thead className="w-full">
          <tr className="bg-amber-800">
            <th className="py-1">তারিখ</th>
            <th className="py-1">সেহরি</th>
            <th className="py-1">ইফতার</th>
          </tr>
        </thead>
        <tbody className=" w-full text-center">
          <tr className="bg-green-600">
            <td className="py-1">a</td>
            <td className="py-1">a</td>
            <td className="py-1">a</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RamadanCalendar;
