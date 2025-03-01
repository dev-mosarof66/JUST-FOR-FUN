import React, { useContext } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Context from "../context/Context";
const SahriDowa = () => {
  return (
    <div className="space-y-2 md:space-y-4 md:w-[85%]">
      <div className="w-full flex items-center justify-center">
        <h1 className="w-fit text-lg sm:text-xl font-semibold border-b border-b-amber-500 text-center">
          রোজা রাখার দোয়া
        </h1>
      </div>
      <p className="w-full text-sm sm:text-base text-right pr-6 py-2 md:py-4 leading-8">
        نَوَيْتُ اَنْ اُصُوْمَ غَدًا مِّنْ شَهْرِ رَمْضَانَ الْمُبَارَكِ فَرْضَا
        لَكَ يَا اللهُ فَتَقَبَّل مِنِّى اِنَّكَ اَنْتَ السَّمِيْعُ الْعَلِيْم
      </p>
      <p className="text-sm sm:text-base">
        <b className="pr-2 text-amber-700">উচ্চারণ :</b> নাওয়াইতু আন আছুম্মা
        গাদাম মিন শাহরি রমাজানাল মুবারাকি ফারদাল্লাকা, ইয়া আল্লাহু ফাতাকাব্বাল
        মিন্নি ইন্নিকা আনতাস সামিউল আলিম।
      </p>

      <p className="text-sm sm:text-base">
        <b className="pr-2 text-amber-700">বাংলা অর্থ :</b>
        হে আল্লাহ! আগামীকাল পবিত্র রমযান মাসে তোমার পক্ষ হতে ফরয করা রোজা রাখার
        ইচ্ছা পোষণ (নিয়্যত) করলাম, অতএব তুমি আমার পক্ষ হতে (আমার রোযা তথা
        পানাহার থেকে বিরত থাকাকে) কবুল কর, নিশ্চয়ই তুমি সর্বশ্রোতা ও সর্বজ্ঞানী।
      </p>
    </div>
  );
};
const IftaarDowa = () => {
  const { showIftaarDowa, setShowIftaarDowa } = useContext(Context);
  return (
    <div className="space-y-4 md:w-[85%]">
      <div className="w-full flex items-center justify-center">
        <h1 className="w-fit text-lg sm:text-xl font-semibold border-b border-b-amber-500 text-center">
          ইফতারের দোয়া
        </h1>
      </div>
      <div>
        <div className="px-2 py-2  text-2xl flex items-center space-x-3">
          <IoMdArrowDropdown
            onClick={() => setShowIftaarDowa(!showIftaarDowa)}
            className={`${
              showIftaarDowa ? "rotate-0" : "-rotate-90"
            } text-xl cursor-pointer `}
          />
          <p
            className={`text-sm sm:text-base ${
              showIftaarDowa ? "hidden" : "block"
            }`}
          >
            এই দোয়াটি ইফতার করার আগে পড়তে হয় ।
          </p>
        </div>
        <div className={`${showIftaarDowa ? "block" : "hidden"} `}>
          <p className="w-full text-sm sm:text-base px-1 md:px-0  text-right  md:pr-4 py-6 leading-8">
            اَللَّهُمَّ لَكَ صُمْتُ وَ عَلَى رِزْقِكَ وَ اَفْطَرْتُ بِرَحْمَتِكَ
            يَا اَرْحَمَ الرَّاحِيْمِيْن
          </p>
          <p className="text-sm sm:text-base">
            <b className="pr-2 text-amber-700">উচ্চারণ :</b> আল্লাহুম্মা লাকা
            ছুমতু ওয়া আলা রিযক্বিকা ওয়া আফতারতু বিরাহমাতিকা ইয়া আরহামার রাহিমীন।
          </p>
          <p className="text-sm sm:text-base">
            <b className="pr-2 text-amber-700"> বাংলা অর্থ :</b> হে আল্লাহ! আমি
            তোমারই সন্তুষ্টির জন্য রোজা রেখেছি এবং তোমারই দেয়া রিযিক্বের মাধ্যমে
            ইফতার করছি।
          </p>
        </div>
      </div>
    </div>
  );
};

export { SahriDowa, IftaarDowa };
