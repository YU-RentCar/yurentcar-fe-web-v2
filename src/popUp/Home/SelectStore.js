import { useEffect, useState, useRef } from "react";
import { MdOutlineClose } from "react-icons/md";
import { ReactComponent as Map } from "assets/Map.svg";
import { usePopUp } from "utils/popUp/usePopUp";

const SelectStore = ({ storeObj }) => {
  const popUpInfo = usePopUp("Home/SelectStore");
  const [selectedProvince, setSelectedProvince] = useState("");

  // 클릭된 지방의 css 속성
  const clickedProvinceCSS =
    "my-[10px] mx-[10px] rounded-xl bg-sky-600 w-[248px] h-[60px] text-white select-none";
  const nonClickedProvinceCSS =
    "w-[218px] h-[50px] bg-blue-300 my-[10px] mx-[10px] rounded-xl hover:bg-sky-600 hover:w-[248px] hover:h-[60px] hover:text-white transition-all ease-in select-none";

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
                popUpInfo.toggle();
              }}
            >
              <MdOutlineClose size={49} color="gray" />
            </button>

            {/* 지도 구역 */}
            <div className="w-[435px]">
              <Map />
            </div>

            {/* 지점 선택 */}
            <div className="w-[611px] h-[660px] bg-sky-200 rounded-xl flex relative">
              {/* 선택한 요소가 위로 튀어나와야하기 때문에 배경만 따로 같은 높이에 생성 */}
              <div className="w-[237px] h-[521px] bg-sky-100 rounded-xl mt-[14px] ml-[15px]"></div>
              <div className="w-[270px] h-[521px] mt-[14px] ml-[15px] overflow-y-scroll scrollbar-hide fixed">
                {Object.keys(storeObj).map((item, idx) => {
                  return (
                    <div
                      className={
                        selectedProvince === item
                          ? clickedProvinceCSS
                          : nonClickedProvinceCSS
                      }
                      key={idx}
                      onClick={() => {
                        setSelectedProvince(item);
                      }}
                    >
                      <div className="flex items-center justify-center w-full h-full">
                        <div className="text-2xl font-semibold">{item}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-[329px] h-[629px] bg-sky-50 rounded-xl mt-[14px] ml-[15px] overflow-y-scroll scrollbar-hide">
                {!storeObj[`${selectedProvince}`]
                  ? null
                  : storeObj[`${selectedProvince}`].map((item, idx) => {
                      return (
                        <div
                          key={idx}
                          className="w-[296px] h-[60px] bg-blue-100 rounded-xl my-[10px] mx-[17px] flex justify-center items-center hover:bg-sky-600 transition-all ease-in select-none hover:text-white"
                        >
                          <div className="font-bold text-[24px]">{item}</div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectStore;
