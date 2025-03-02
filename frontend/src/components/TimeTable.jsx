import { useContext, useState, useEffect } from "react";
import Context from "../context/Context";
import { Link } from "react-router-dom";

const SehriTime = () => {
  return (
    <div className="w-full md:w-[90%] flex flex-col items-center justify-center space-y-6">
      <div className="w-full flex flex-col items-center space-y-2">
        <h1 className="w-full md:w-[30%] text-lg md:text-xl font-bold bg-amber-300 text-black text-center">
          আজকের সাহরি
        </h1>
        <div className="w-full md:w-[30%] text-center flex flex-col items-center">
          <p className="w-[60%] bg-green-800 py-2 my-1">
            শেষ সময়ঃ
            <span className="px-3 font-semibold">500</span>
          </p>
        </div>
        <Link
          to="/full-calendar"
          className="w-full md:w-[80%] lg:w-[70%] py-2 flex items-center justify-end text-xs md:text-sm"
        >
          <button className="text-yellow-500 active:text-yellow-300 border-b active:border-b-amber-300 hover:text-yellow-300 hover:border-b-amber-300 transition duration-200 delay-75 cursor-pointer">
            সম্পূর্ণ ক্যালেন্ডার দেখুন
          </button>
        </Link>
      </div>
    </div>
  );
};

const IftaarTime = () => {
  return (
    <div className="w-full md:w-[100%] flex flex-col items-center justify-center space-y-6">
      <div className="w-full md:w-[90%] flex flex-col items-center justify-center space-y-6">
        <div className="w-full flex flex-col items-center space-y-2">
          <h1 className="w-full md:w-[30%] text-lg md:text-xl font-bold bg-amber-300 text-black text-center">
            আজকের ইফতার
          </h1>
          <div className="w-full md:w-[30%] text-center flex flex-col items-center">
            <p className="w-[60%] bg-green-800 py-2 my-1">
              সময়ঃ
              <span className="px-3 font-semibold">600</span>
            </p>
          </div>
          <Link
            to="/full-calendar"
            className="w-full md:w-[80%] lg:w-[70%] py-2 flex items-center justify-end text-xs md:text-sm"
          >
            <button className="text-yellow-500 active:text-yellow-300 border-b active:border-b-amber-300 hover:text-yellow-300 hover:border-b-amber-300 transition duration-200 delay-75 cursor-pointer">
              সম্পূর্ণ ক্যালেন্ডার দেখুন
            </button>
          </Link>
        </div>
      </div>

      {/* remaining time for iftaar goes here  */}
      {/* <CalcRemainingTime prayerTime={prayerTimes.maghrib} /> */}
    </div>
  );
};

const PrayerTable = () => {
  return (
    <div className="w-[100%] text-center space-y-3">
      <div className="text-center w-full flex items-center justify-center">
        <h1 className="font-semibold text-lg md:text-xl border-b border-amber-500 py-1">
          নামাজের সময়সূচি
        </h1>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[90%] sm:w-[60%] lg:w-[50%] flex items-center justify-around py-2 bg-blue-400 text-center font-semibold text-black">
          <ul>
            <li className="py-1 text-yellow-300 font-bold sm:pb-5">ফজর</li>
            <p>600</p>
          </ul>
          <ul>
            <li className="py-1 text-yellow-300 font-bold sm:pb-5">যোহর</li>
            <p>700</p>
          </ul>
          <ul>
            <li className="py-1 text-yellow-300 font-bold sm:pb-5">আসর</li>
            <p>1245</p>
          </ul>
          <ul>
            <li className="py-1 text-yellow-300 font-bold sm:pb-5">মাগরিব</li>
            <p>265</p>
          </ul>
          <ul>
            <li className="py-1 text-yellow-300 font-bold sm:pb-5">এশা</li>
            <p>55</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

const CalcRemainingTime = () => {
  const { prayerTimes } = useContext(Context);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showIftaarTime, setShowIftaarTime] = useState(false);

  useEffect(() => {
    let timer;
    const calc = () => {
      if (!prayerTimes?.fajr || !prayerTimes?.maghrib) {
        return;
      }
      const now = new Date();
      const [sehrihour, sehriminute] = prayerTimes.fajr.split(":");
      const sehriTime = new Date();
      sehriTime.setHours(parseInt(sehrihour), parseInt(sehriminute), 0);

      if (now.getTime() > sehriTime.getTime()) {
        const [iftaarhour, iftaarminute] = prayerTimes.maghrib.split(":");
        const IftaarTime = new Date();
        IftaarTime.setHours(parseInt(iftaarhour), parseInt(iftaarminute), 0);
        const remainingTime =
          IftaarTime.getTime() - now.getTime() + 12 * 60 * 60 * 1000;

        if (remainingTime <= 0) {
          setShowIftaarTime(false);
          setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
          return;
        }

        const hours = Math.floor(remainingTime / (1000 * 60 * 60));
        const minutes = Math.floor(
          (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
        setShowIftaarTime(true);
      } else {
        setShowIftaarTime(false);
      }
    };

    calc(); // Initial calculation
    timer = setInterval(calc, 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [prayerTimes]); // Add prayerTimes as dependency

  // ... rest of the return statement remains the same ...

  return (
    <div>
      {showIftaarTime ? (
        <div className="w-[100%] text-center space-y-3  ">
          <div className="text-center w-full flex items-center justify-center">
            <h1 className="  py-1 text-xl">ইফতার এর অবশিষ্ট সময়</h1>
          </div>
          <div className="w-full flex items-center justify-center">
            <h1 className="text-amber-500 font-bold text-2xl">
              <span className="px-2 text-white">{timeLeft.hours}</span> ঘণ্টা
              <span className="px-2 text-white">{timeLeft.minutes}</span> মিনিট
              <span className="px-2 text-white">{timeLeft.seconds}</span>
              সেকেন্ড
            </h1>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export { SehriTime, IftaarTime, PrayerTable };
