import Finder from "components/Finder";
import React from "react";
import { usePopUp } from "utils/usePopUp";
import SelectStore from "popUp/SelectStore";
import SelectDateTime from "popUp/SelectDateTime";
import NoticeCarousel from "./NoticeCarousel";
import CarCard from "components/CarCard";

const CarSearch = () => {
  const storePopUp = usePopUp("CarSearch/SelectStore");
  const dateTimePopUp = usePopUp("CarSearch/SelectDateTime");

  return (
    <>
      <div className="mt-[65px] flex flex-col items-center">
        <div className="w-[860px] h-[70px] rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-[20px] bg-white flex items-center justify-between z-10">
          <Finder storePopUp={storePopUp} dateTimePopUp={dateTimePopUp} />
        </div>

        <div className="w-[1140px] h-[1281px] mt-[50px] flex justify-around select-none">
          <div className="w-[264px]">
            {/* 사용자 선호 설정 */}
            <div className="w-full h-[414px] bg-blue-800"></div>
            {/* 공지사항 */}
            <div className="w-full">
              {/* 어떤 지점 공지사항 */}
              <div className="flex flex-col items-center justify-center my-3">
                <span>
                  <span className="font-bold text-blue-600">대구 수성구</span>점
                  <br />
                </span>
                <span className="text-xl font-semibold">공지사항</span>
              </div>

              {/* 공지사항 슬라이더 */}
              <div className="h-[485px]">
                <NoticeCarousel />
              </div>
            </div>
          </div>

          {/* 차량 리스트 */}
          <div className="w-[860px] h-[1000px] pb-5 grid grid-cols-3 overflow-y-scroll">
            <CarCard></CarCard>
            <CarCard></CarCard>
            <CarCard></CarCard>
            <CarCard></CarCard>
            <CarCard></CarCard>
            <CarCard></CarCard>
            <CarCard></CarCard>
            <CarCard></CarCard>
            <CarCard></CarCard>
            <CarCard></CarCard>
            <CarCard></CarCard>
            <CarCard></CarCard>
            <CarCard></CarCard>
            <CarCard></CarCard>
            <CarCard></CarCard>
            <CarCard></CarCard>
            <CarCard></CarCard>
          </div>
        </div>
      </div>

      {/* 팝업 구역 */}
      {storePopUp.isClicked ? (
        <SelectStore popUpInfo={storePopUp} />
      ) : undefined}
      {dateTimePopUp.isClicked ? (
        <SelectDateTime popUpInfo={dateTimePopUp} />
      ) : undefined}
    </>
  );
};

export default CarSearch;
