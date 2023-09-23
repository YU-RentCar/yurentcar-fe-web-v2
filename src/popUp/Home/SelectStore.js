import { useEffect, useState, useRef } from "react";
import { MdOutlineClose } from "react-icons/md";
import { ReactComponent as Map } from "assets/Map.svg";

const SelectStore = ({ setIsClicked }) => {
  // 스크롤 정상화
  const closePopUp = () => {
    document.body.style.overflow = "unset";
  };

  return (
    <>
      {/* 팝업 뒤의 어두운 화면 */}
      <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-screen h-screen bg-black bg-opacity-40">
        {/* 팝업 본체 */}
        <div className="bg-white w-[1133px] h-[742px] rounded-2xl flex justify-center items-center ">
          <div className="bg-sky-50 w-[1093px] h-[702px] rounded-xl relative flex items-center justify-around">
            {/* 닫기 버튼 */}
            <button
              className="absolute top-2 left-2"
              onClick={() => {
                closePopUp();
                setIsClicked(false);
              }}
            >
              <MdOutlineClose size={49} color="gray" />
            </button>

            {/* 지도 구역 */}
            <div className="w-[435px]">
              <Map />
            </div>

            {/* 지점 선택 */}
            <div className="w-[611px] h-[660px] bg-sky-200 rounded-xl flex">
              <div className="w-[237px] h-[521px] bg-sky-100 rounded-xl flex flex-col items-center mt-[14px] ml-[15px]"></div>
              <div className="w-[329px] h-[629px] bg-sky-50 rounded-xl flex flex-col items-center mt-[14px] ml-[15px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectStore;
