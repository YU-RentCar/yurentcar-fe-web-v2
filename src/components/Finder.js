import dayjs from "dayjs";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { finderAtom } from "recoil/finderAtom";
import { usePopUp } from "utils/usePopUp";

const Finder = () => {
  const storePopUp = usePopUp("Home/SelectStore");
  const dateTimePopUp = usePopUp("Home/SelectDateTime");

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

    console.log(finderInfo);
  }, [finderInfo]);
  return (
    <>
      {/* 선택 메뉴 */}

      <div
        className="ml-[10px] w-[290px] h-[50px] bg-sky-50 rounded-lg border-[1px] border-black hover:border-[3px] hover:border-blue-400 select-none cursor-pointer"
        onClick={() => {
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
    </>
  );
};

export default Finder;
