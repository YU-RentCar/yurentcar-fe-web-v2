import React from "react";

const HomePage = () => {
  return (
    <div className="pt-[65px] flex flex-col items-center h-[3200px]">
      <div className="h-[500px] w-full bg-[url(assets/Camping.jpeg)] bg-fixed bg-cover bg-center">
        <div className="h-[500px] bg-gray-600 bg-opacity-40 relative">
          {/* 출처 표기 */}
          <span className="absolute bottom-0 left-0 font-medium select-none">
            사진:
            <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/4NyxhzO1iBk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
            의
            <a href="https://unsplash.com/ko/@roadpass?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Roadpass
            </a>
          </span>

          {/* 사진 내부 문구 */}
          <span className="absolute left-[13%] top-[120px] font-black text-[80px] text-white select-none">
            즐거운 여행!
          </span>
          <span className="absolute left-[13%] top-[240px] font-black text-[75px] text-white select-none">
            <span className="text-sky-600">Y</span>
            <span className="text-amber-900">U</span> 렌트카와 함께 준비하세요!
          </span>
        </div>
      </div>

      {/* 선택 메뉴 */}
      <div className="w-[860px] h-[70px] rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-[-30px] bg-white flex items-center justify-between z-10">
        <div className="ml-[10px] w-[290px] h-[50px] bg-sky-50 rounded-lg border-[1px] border-black hover:border-[3px] hover:border-blue-400 select-none cursor-pointer">
          <div className="flex items-center justify-center w-full h-full">
            <p className="text-2xl font-black">대구 이름이엄청길다는점</p>
          </div>
        </div>

        <div className="w-[400px] h-[50px] bg-sky-50 rounded-lg border-[1px] border-black hover:border-[3px] hover:border-blue-400 select-none cursor-pointer">
          <div className="flex items-center justify-center w-full h-full">
            <p className="text-2xl font-black">
              9/9(토) 10:00 ~ 9/10(일) 11:10
            </p>
          </div>
        </div>

        <div className="mr-[10px] w-[130px] h-[50px] bg-blue-300 hover:bg-amber-400 rounded-lg border-[1px] select-none cursor-pointer transition-all">
          <div className="flex items-center justify-center w-full h-full">
            <p className="text-2xl font-black">검색</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
