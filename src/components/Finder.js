import dayjs from "dayjs";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { finderAtom } from "recoil/finderAtom";
import { useNavigate } from "react-router-dom";
import { useAlert } from "utils/useAlert";
import { selectedFinderAtom } from "recoil/selectedFinderAtom";

const Finder = ({ storePopUp, dateTimePopUp }) => {
  // 선택된(검색된) 시점의 finder의 상태를 저장한다.
  const setSelectedFinderInfo = useSetRecoilState(selectedFinderAtom);

  // finderAtom은 finder의 변경 상황을 실시간으로 저장한다.
  const [finderInfo, setFinderInfo] = useRecoilState(finderAtom);
  const [finderDateInfoString, setFinderDateInfoString] = useState("");

  // 라우터 이동을 위한 변수
  const navigate = useNavigate();

  // 토스트 메시지를 사용하기 위한 변수
  const alert = useAlert();

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
        <div
          className="flex items-center justify-center w-full h-full"
          onClick={() => {
            for (const i of Object.values(finderInfo)) {
              if (i === null) {
                alert.onAndOff("항목을 모두 입력해 주세요");
                return;
              }
            }

            setSelectedFinderInfo({
              ...finderInfo,
            });

            navigate("/carsearch");
          }}
        >
          <p className="text-2xl font-medium">검색</p>
        </div>
      </div>
    </>
  );
};

export default Finder;
