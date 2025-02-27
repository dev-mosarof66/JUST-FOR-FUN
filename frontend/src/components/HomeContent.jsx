import React from "react";

const HomeContent = () => {
  return (
    <main className=" w-[90%] mx-auto flex flex-col items-center space-y-30  text-white py-40">
      <div className="w-full flex flex-col items-center justify-center space-y-1">
        <h1 className="w-full text-lg font-bold bg-amber-300 text-black text-center">
          আজকের সাহরি
        </h1>
        <div className="w-full text-center flex flex-col items-center">
          <p className="w-[60%] bg-green-800 py-2 my-1">
            সময় শুরুঃ <span>5.43 AM</span>{" "}
          </p>
          <p className="w-[60%] bg-green-800 py-2 my-1">
            সময় শেষঃ <span>6.10 AM</span>
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center space-y-1">
        <h1 className="w-full text-lg font-bold bg-amber-300 text-black text-center">
          আজকের ইফতার
        </h1>
        <div className="w-full text-center flex flex-col items-center">
          <p className="w-[60%] bg-green-800 py-2 my-1">সময়ঃ</p>
        </div>
      </div>
    </main>
  );
};

export default HomeContent;
