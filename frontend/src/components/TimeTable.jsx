import { useContext } from "react";
import Context from "../context/Context";

const SehriTime = () => {
  const { prayerTimes } = useContext(Context);
  return (
    <div className="w-full md:w-[50%] flex flex-col items-center justify-center space-y-1">
      <h1 className="w-full text-lg md:text-xl font-bold bg-amber-300 text-black text-center">
        আজকের সাহরি
      </h1>
      <div className="w-full text-center flex flex-col items-center">
        <p className="w-[full%] flex items-center justify-center bg-green-800 px-2 py-2 my-1">
          শেষ সময়ঃ{" "}
          <span className=" pl-2 font-semibold">{prayerTimes.fajr}</span>
        </p>
      </div>
    </div>
  );
};

const IftaarTime = () => {
  const { prayerTimes } = useContext(Context);

  return (
    <div className="w-full md:w-[50%] flex flex-col items-center justify-center space-y-1">
      <h1 className="w-full text-lg md:text-xl font-bold bg-amber-300 text-black text-center">
        আজকের ইফতার
      </h1>
      <div className="w-full text-center flex flex-col items-center">
        <p className="w-[60%] bg-green-800 py-2 my-1">
          সময়ঃ
          <span className="px-3 font-semibold">{prayerTimes.maghrib}</span>
        </p>
      </div>
    </div>
  );
};

const PrayerTable = () => {
  const { prayerTimes } = useContext(Context);
  return (
    <div className="w-[100%] text-center space-y-3">
      <div className="text-center w-full flex items-center justify-center">
        <h1 className="font-semibold border-b border-amber-500 py-1">
          নামাজের সময়সূচি
        </h1>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[90%] sm:w-[60%] lg:w-[50%] flex items-center justify-around py-2 bg-blue-400 text-center font-semibold text-black">
          <ul>
            <li className="py-1 text-yellow-300 font-bold sm:pb-5">ফজর</li>
            <p>{prayerTimes.fajr}</p>
          </ul>
          <ul>
            <li className="py-1 text-yellow-300 font-bold sm:pb-5">যোহর</li>
            <p>{prayerTimes.dhuhr}</p>
          </ul>
          <ul>
            <li className="py-1 text-yellow-300 font-bold sm:pb-5">আসর</li>
            <p>{prayerTimes.asr}</p>
          </ul>
          <ul>
            <li className="py-1 text-yellow-300 font-bold sm:pb-5">মাগরিব</li>
            <p>{prayerTimes.maghrib}</p>
          </ul>
          <ul>
            <li className="py-1 text-yellow-300 font-bold sm:pb-5">এশা</li>
            <p>{prayerTimes.isha}</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { SehriTime, IftaarTime, PrayerTable };
