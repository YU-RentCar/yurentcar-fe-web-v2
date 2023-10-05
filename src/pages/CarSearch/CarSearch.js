import Finder from "components/Finder";
import React from "react";
import { usePopUp } from "utils/usePopUp";
import SelectStore from "popUp/SelectStore";
import SelectDateTime from "popUp/SelectDateTime";

const CarSearch = () => {
  const storePopUp = usePopUp("CarSearch/SelectStore");
  const dateTimePopUp = usePopUp("CarSearch/SelectDateTime");

  return (
    <>
      <div className="mt-[65px] flex flex-col items-center">
        <div className="w-[860px] h-[70px] rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-[20px] bg-white flex items-center justify-between z-10">
          <Finder storePopUp={storePopUp} dateTimePopUp={dateTimePopUp} />
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
