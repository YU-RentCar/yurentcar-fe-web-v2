import dayjs from "dayjs";
import SelectDateTime from "popUp/Home/SelectDateTime";
import SelectStore from "popUp/Home/SelectStore";
import { useEffect, useState, useRef } from "react";
import { MdOutlineNorth } from "react-icons/md";
import { useRecoilState } from "recoil";
import { finderAtom } from "recoil/finderAtom";
import { usePopUp } from "utils/usePopUp";

const Home = () => {
  const storePopUp = usePopUp("Home/SelectStore");
  const dateTimePopUp = usePopUp("Home/SelectDateTime");

  const [isFinderClicked, setIsFinderClicked] = useState(false);

  const [finderInfo, setFinderInfo] = useRecoilState(finderAtom);

  const [finderDateInfoString, setFinderDateInfoString] = useState("");

  useEffect(() => {
    const startDate = dayjs(finderInfo.startDate);
    const startTime = finderInfo.startTime;
    const endDate = dayjs(finderInfo.endDate);
    const endTime = finderInfo.endTime;

    const days = {
      0: "일",
      1: "월",
      2: "화",
      3: "수",
      4: "목",
      5: "금",
      6: "토",
    };

    const startString = `${startDate.format("M/DD")}(${
      days[startDate.day()]
    }) ${startTime}`;

    const endString = `${endDate.format("M/DD")}(${
      days[endDate.day()]
    }) ${endTime}`;

    setFinderDateInfoString(`${startString} ~ ${endString}`);
  }, [finderInfo]);

  return (
    <>
      <div className="mt-[65px] flex flex-col items-center h-[3200px]">
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
            <span className="absolute left-[13%] top-[120px] font-bold text-[80px] text-white select-none">
              즐거운 여행!
            </span>
            <span className="absolute left-[13%] top-[240px] font-bold text-[75px] text-white select-none">
              <span className="text-sky-600">Y</span>
              <span className="text-amber-900">U</span> 렌트카와 함께
              준비하세요!
            </span>
          </div>
        </div>

        {/* 선택 메뉴 */}
        <div className="w-[860px] h-[70px] rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-[-30px] bg-white flex items-center justify-between z-10">
          <div
            className="ml-[10px] w-[290px] h-[50px] bg-sky-50 rounded-lg border-[1px] border-black hover:border-[3px] hover:border-blue-400 select-none cursor-pointer"
            onClick={() => {
              setIsFinderClicked(true);
              storePopUp.toggle();
            }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-2xl font-medium">
                {finderInfo.province === null || finderInfo.store === null
                  ? "지점을 선택해주세요"
                  : `${finderInfo.province} ${finderInfo.store}`}
              </p>
            </div>
          </div>

          <div
            className="w-[400px] h-[50px] bg-sky-50 rounded-lg border-[1px] border-black hover:border-[3px] hover:border-blue-400 select-none cursor-pointer"
            onClick={() => {
              setIsFinderClicked(true);
              dateTimePopUp.toggle();
            }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-2xl font-medium">
                {finderInfo.startDate === null || finderInfo.endDate === null
                  ? "날짜와 시간을 선택해주세요"
                  : finderDateInfoString}
              </p>
            </div>
          </div>

          <div className="mr-[10px] w-[130px] h-[50px] bg-blue-300 hover:bg-amber-400 rounded-lg border-[1px] select-none cursor-pointer transition-all">
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-2xl font-medium">검색</p>
            </div>
          </div>
        </div>

        {/* 도움말 */}
        {!isFinderClicked ? (
          <div className="flex flex-col items-center justify-center mt-6 animate-bounce-slow">
            <MdOutlineNorth size={"24px"}></MdOutlineNorth>
            <div className="text-xl">
              항목을 클릭하여 원하는 차량을 찾아보세요!
            </div>
          </div>
        ) : null}
      </div>

      {/* 팝업 구역 */}
      {storePopUp.isClicked ? <SelectStore /> : undefined}
      {dateTimePopUp.isClicked ? <SelectDateTime /> : undefined}
    </>
  );
};

export default Home;
