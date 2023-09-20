import React from "react";

const HomePage = () => {
  return (
    <div className="pt-[76px] flex flex-col items-center">
      <div className="h-[540px] w-screen bg-blue-300"></div>

      <div className="w-[820px] h-[90px] rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-[-54px] bg-white flex items-center justify-between relative">
        <div className="ml-[10px] w-[210px] h-[70px] bg-sky-50 rounded-xl border-[1px] border-black hover:border-[3px] hover:border-blue-400 select-none cursor-pointer">
          <div className="flex items-center justify-center w-full h-full">
            <p className="text-2xl font-black">대구 수성구점</p>
          </div>
        </div>

        <div className="w-[443px] h-[70px] bg-sky-50 rounded-xl border-[1px] border-black hover:border-[3px] hover:border-blue-400 select-none cursor-pointer">
          <div className="flex items-center justify-center w-full h-full">
            <p className="text-2xl font-black">
              9/9(토) 10:00 ~ 9/10(일) 11:10
            </p>
          </div>
        </div>

        <div className="mr-[10px] w-[123px] h-[70px] bg-blue-300 hover:bg-amber-400 rounded-xl border-[1px] select-none cursor-pointer transition-all">
          <div className="flex items-center justify-center w-full h-full">
            <p className="text-2xl font-black">검색</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
