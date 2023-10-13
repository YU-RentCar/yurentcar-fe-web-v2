import Finder from "components/Finder";
import SelectStore from "popUp/SelectStore";
import SelectDateTime from "popUp/SelectDateTime";
import NoticeCarousel from "./NoticeCarousel";
import CarCard from "components/CarCard";
import PreferOption from "./PreferOption";
import CarDetail from "popUp/CarSearch/CarDetail";
import dayjs from "dayjs";
import { usePopUp } from "utils/usePopUp";
import { useRecoilValue, useRecoilState } from "recoil";
import { preferOptionAtom } from "recoil/preferOptionAtom";
import { useEffect, useState, useRef } from "react";
import { finderAtom } from "recoil/finderAtom";
import { getCarInfoList } from "api/homeAxios";
import { useLocation, useNavigate } from "react-router";
import { getPreferOption } from "api/myPageAxios";
import { useAlert } from "utils/useAlert";
import { selectedFinderAtom } from "recoil/selectedFinderAtom";

const CarSearch = () => {
  // 팝업을 제어하는데 필요한 변수
  const storePopUp = usePopUp("CarSearch/SelectStore");
  const dateTimePopUp = usePopUp("CarSearch/SelectDateTime");
  const carDetailPopUp = usePopUp("CarSearch/CarDetail");

  // 토스트 메시지 제어에 필요한 변수
  const alert = useAlert();

  // 선호 옵션 항목 Atom
  const preferOption = useRecoilValue(preferOptionAtom);
  // 선호 옵션 항목 타이틀
  const [preferTitles, _] = useState(["차량 크기", "유종", "구동기"]);

  // 사용자의 선호 옵션 정보
  const [userPrefer, setUserPrefer] = useState({
    carSizes: [true, true, true, true],
    oilTypes: [true, true, true, true],
    transmissions: [true, true],
    minCount: 1,
  });

  // 검색된 상태의 finder 정보를 가지는 변수
  const selectedFinderInfo = useRecoilValue(selectedFinderAtom);

  // 각 route 마다 개별적으로 지급되는 key를 저장.
  // 현재 route 에서 finder 검색이 작동하지 않는 것을 수정
  const currentRouteKey = useLocation().key;

  // 차량 리스트 렌더링에 필요한 state
  const [carInfoList, setCarInfoList] = useState(null);

  // 선호차량 검색 체크박스의 변경점을 체크하는 함수
  const gatherInfo = () => {
    let newPrefer = {
      carSizes: [],
      oilTypes: [],
      transmissions: [],
    };
    /* 정보 수집 */
    Object.keys(newPrefer).forEach((v) => {
      preferOption[v].forEach((val) =>
        newPrefer[v].push(document.getElementById(val).checked)
      ); // 체크 여부 확인
    });
    newPrefer.minCount = document.getElementById("minCount").value;
    return newPrefer;
  };

  // finder 검색 클릭 시, 선택된 finder 상태로 차량 리스트 조회
  useEffect(() => {
    const infos = {};

    infos.startDate = String(
      dayjs(selectedFinderInfo.startDate).format("YYYY. MM. DD. ") +
        selectedFinderInfo.startTime
    );
    infos.endDate = String(
      dayjs(selectedFinderInfo.endDate).format("YYYY. MM. DD. ") +
        selectedFinderInfo.endTime
    );
    infos.carSizes = [true, true, true, true];
    infos.minCount = 1;
    infos.oilTypes = [true, true, true, true];
    infos.transmissions = [true, true];
    infos.branchName = selectedFinderInfo.store;
    infos.siDo = selectedFinderInfo.province;

    getCarInfoList(infos)
      .then((response) => {
        console.log("CarSearch / getCarCardList", response.data);
        setCarInfoList(response.data);
      })
      .catch((error) => {
        console.log("CarSearch / getCarCardList", error.response);
      });
  }, [currentRouteKey]);

  return (
    <>
      <div className="mt-[65px] flex flex-col items-center">
        <div className="w-[860px] h-[70px] rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-[20px] bg-white flex items-center justify-between z-10">
          <Finder storePopUp={storePopUp} dateTimePopUp={dateTimePopUp} />
        </div>

        <div className="w-[1140px] h-[1281px] mt-[50px] flex justify-around select-none">
          <div className="w-[264px]">
            {/* 사용자 선호 설정 */}
            <div className="w-full h-[530px] bg-blue-200 rounded-xl flex flex-col items-center justify-start">
              <div className="mt-3">
                <div className="mt-2 mb-5 text-xl font-bold text-blue-800">
                  선호 차량 검색
                </div>
                {/* 차량 크기, 유종, 구동기 */}
                {Object.keys(preferOption).map((v, i) => {
                  return (
                    <PreferOption
                      title={preferTitles[i]}
                      content={preferOption[v]}
                      userPrefer={userPrefer[v]}
                      setUserPrefer={setUserPrefer}
                      gatherInfo={gatherInfo}
                      key={i}
                    />
                  );
                })}
                {/* 최소 인원 */}
                <PreferOption
                  title="최소 인원"
                  minCount={userPrefer.minCount}
                  setUserPrefer={setUserPrefer}
                  gatherInfo={gatherInfo}
                />

                <div className="flex justify-around mt-9">
                  {/* 불러오기 버튼 */}
                  <button className="text-[20px] font-semibold w-[135px] h-[44px] rounded-xl bg-blue-500 text-white">
                    나의 선호 옵션
                  </button>
                  {/* 찾기 버튼 */}
                  <button
                    className="text-[20px] font-semibold w-[55px] h-[44px] rounded-xl bg-amber-400"
                    onClick={async () => {
                      const minCount =
                        document.getElementById("minCount").value;
                      if (minCount.trim() === "") {
                        alert.onAndOff("최소 인원 수를 입력해주세요");
                      } else if (Number(minCount) <= 0) {
                        alert.onAndOff("1명 이상 입력해주세요");
                      } else {
                        const newPrefer = gatherInfo();

                        const infos = {};
                        infos.startDate = String(
                          dayjs(selectedFinderInfo.startDate).format(
                            "YYYY. MM. DD. "
                          ) + selectedFinderInfo.startTime
                        );
                        infos.endDate = String(
                          dayjs(selectedFinderInfo.endDate).format(
                            "YYYY. MM. DD. "
                          ) + selectedFinderInfo.endTime
                        );
                        infos.branchName = selectedFinderInfo.store;
                        infos.siDo = selectedFinderInfo.province;
                        infos.carSizes = newPrefer.carSizes;
                        infos.minCount = newPrefer.minCount;
                        infos.oilTypes = newPrefer.oilTypes;
                        infos.transmissions = newPrefer.transmissions;

                        getCarInfoList(infos)
                          .then((response) => {
                            console.log(
                              "CarSearch / getCarCardList",
                              response.data
                            );
                            setCarInfoList(response.data);
                          })
                          .catch((error) => {
                            console.log(
                              "CarSearch / getCarCardList",
                              error.response
                            );
                          });
                      }
                    }}
                  >
                    찾기
                  </button>
                </div>
              </div>
            </div>
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
            {carInfoList
              ? carInfoList.map((v, i) => {
                  return (
                    <div
                      onClick={() => {
                        carDetailPopUp.toggle();
                      }}
                    >
                      {/* 추후 빠진 props 추가할 것 */}
                      <CarCard
                        name={v.carName}
                        number={v.carNumber}
                        odo={v.totalDistance}
                        price={v.price}
                      ></CarCard>
                    </div>
                  );
                })
              : null}
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
      {carDetailPopUp.isClicked ? (
        <CarDetail popUpInfo={carDetailPopUp} />
      ) : undefined}
    </>
  );
};

export default CarSearch;
