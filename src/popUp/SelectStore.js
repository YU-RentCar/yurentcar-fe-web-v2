import { useEffect, useState, useRef, React } from "react";
import { MdOutlineClose } from "react-icons/md";
import { ReactComponent as Map } from "assets/Map.svg";
import { usePopUp } from "utils/usePopUp";
import { useRecoilState } from "recoil";
import { storeAtom } from "recoil/storeAtom";
import { finderProvinceSelector, finderStoreSelector } from "recoil/finderAtom";

const SelectStore = ({ popUpInfo }) => {
  const [selectedProvince, setSelectedProvince] = useState("");

  const [rclStoreInfo, setRclStoreInfo] = useRecoilState(storeAtom);

  const [rclFinderStore, setRclFinderStore] =
    useRecoilState(finderStoreSelector);

  const [rclFinderProvince, setRclFinderProvince] = useRecoilState(
    finderProvinceSelector
  );

  const mapRef = useRef(null);
  const provinceRef = useRef(null);

  // 클릭된 지방의 css 속성
  const clickedProvinceCSS =
    "my-[10px] mx-[10px] rounded-xl bg-sky-600 w-[248px] h-[60px] text-white select-none";
  const nonClickedProvinceCSS =
    "w-[218px] h-[50px] bg-blue-300 my-[10px] mx-[10px] rounded-xl hover:bg-sky-600 hover:w-[248px] hover:h-[60px] hover:text-white transition-all ease-in select-none";

  // 팝업이 실행될 때, finder에 지점이 등록되어 있으면 등록된 지점을 표시함
  useEffect(() => {
    // finder에 등록되어 있는 지방 표시
    if (rclFinderStore !== null || rclFinderProvince !== null) {
      const provinceEngName = Object.keys(rclStoreInfo).filter((key, idx) => {
        if (rclStoreInfo[key].korName === rclFinderProvince) {
          return rclStoreInfo[key].engName;
        }
      })[0];
      setSelectedProvince(provinceEngName);

      // finder에 등록되어 있는 지방 버튼 표시
      const provinces = mapRef.current.childNodes;
      const storeKeys = Object.keys(rclStoreInfo);

      // 등록된 지방까지 스크롤을 자동으로 내려줌
      provinces.forEach((province) => {
        if (province.id === "") {
          return;
        }

        if (province.id === provinceEngName) {
          provinceRef.current.scrollTo({
            top: 60 * storeKeys.indexOf(province.id),
            left: 0,
            behavior: "smooth",
          });
        }
      });
    }
  }, []);

  // 팝업이 실행될 때 단 한번 실행되며, 지도에 이벤트를 추가함.
  useEffect(() => {
    const provinces = mapRef.current.childNodes;
    const storeKeys = Object.keys(rclStoreInfo);

    provinces.forEach((province) => {
      if (province.id === "") {
        return;
      }

      province.addEventListener("click", () => {
        setSelectedProvince(rclStoreInfo[province.id].engName);
        provinceRef.current.scrollTo({
          top: 60 * storeKeys.indexOf(province.id),
          left: 0,
          behavior: "smooth",
        });
      });
    });
  }, []);

  // 텍스트로 된 지역을 선택하면 지도와 함께 연동되는 기능 추가
  useEffect(() => {
    const provinces = mapRef.current.childNodes;

    for (const province of provinces) {
      if (rclStoreInfo[selectedProvince] === undefined) {
        continue;
      }

      // 지방을 선택하면 표시해주는 기능
      if (province.id === rclStoreInfo[selectedProvince].engName) {
        province.classList.add("selected");
      } else {
        province.classList.remove("selected");
      }
    }
  }, [selectedProvince, rclStoreInfo]);

  return (
    <>
      {/* 팝업 뒤의 어두운 화면 */}
      <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-screen h-screen bg-black bg-opacity-40">
        {/* 팝업 본체 */}
        <div className="bg-white w-[1133px] h-[640px] rounded-2xl flex justify-center items-center ">
          <div className="bg-sky-50 w-[1093px] h-[600px] rounded-xl relative flex items-center justify-around">
            {/* 닫기 버튼 */}
            <button
              className="absolute top-2 left-2"
              onClick={() => {
                popUpInfo.toggle();
              }}
            >
              <MdOutlineClose size={49} color="gray" />
            </button>

            <div className="absolute top-[40px] left-[160px] font-medium text-lg animate-pulse select-none">
              지도를 클릭해 보세요
            </div>

            {/* 지도 구역 */}
            <div className="w-[435px]">
              <Map ref={mapRef} />
            </div>

            {/* 지점 선택 */}
            <div className="w-[611px] h-[572px] bg-sky-200 rounded-xl flex relative">
              {/* 선택한 요소가 위로 튀어나와야하기 때문에 배경만 따로 같은 높이에 생성 */}
              <div className="w-[237px] h-[481px] bg-sky-100 rounded-xl mt-[14px] ml-[15px]"></div>
              <div
                ref={provinceRef}
                className="w-[270px] h-[481px] mt-[14px] ml-[15px] overflow-y-scroll scrollbar-hide fixed"
              >
                {Object.keys(rclStoreInfo).map((key, idx) => {
                  return (
                    <div
                      className={
                        selectedProvince === rclStoreInfo[key].engName
                          ? clickedProvinceCSS
                          : nonClickedProvinceCSS
                      }
                      key={idx}
                      onClick={() => {
                        setSelectedProvince(rclStoreInfo[key].engName);
                      }}
                    >
                      <div className="flex items-center justify-center w-full h-full">
                        <div className="text-2xl font-semibold">
                          {rclStoreInfo[key].korName}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-[329px] h-[540px] bg-sky-50 rounded-xl mt-[14px] ml-[15px] overflow-y-scroll scrollbar-hide">
                {!rclStoreInfo[`${selectedProvince}`]
                  ? null
                  : rclStoreInfo[`${selectedProvince}`].stores.map(
                      (store, idx) => {
                        return (
                          <div
                            onClick={() => {
                              setRclFinderProvince(
                                rclStoreInfo[selectedProvince].korName
                              );
                              setRclFinderStore(store);
                              popUpInfo.toggle();
                            }}
                            key={idx}
                            className="w-[296px] h-[60px] bg-blue-100 rounded-xl my-[10px] mx-[17px] flex justify-center items-center hover:bg-sky-600 transition-all ease-in select-none hover:text-white"
                          >
                            <div className="font-bold text-[24px]">{store}</div>
                          </div>
                        );
                      }
                    )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectStore;
