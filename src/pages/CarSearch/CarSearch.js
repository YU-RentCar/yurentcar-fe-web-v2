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
import { selectedFinderAtom } from "recoil/selectedFinderAtom";
import { getNoticeList } from "api/carSearchAxios";
import { MdNotificationsActive } from "react-icons/md";
import { Tooltip } from "@material-tailwind/react";
import { alertAtom } from "recoil/alertAtom";
import Alert from "popUp/Alert";
import { useAlert } from "utils/useAlert";

const CarSearch = () => {
  // 팝업을 제어하는데 필요한 변수
  const storePopUp = usePopUp("CarSearch/SelectStore");
  const dateTimePopUp = usePopUp("CarSearch/SelectDateTime");
  const carDetailPopUp = usePopUp("CarSearch/CarDetail");

  // 토스트 메시지 제어에 필요한 변수
  const alert = useAlert();
  const alertState = useRecoilValue(alertAtom);

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

  // 공지사항 리스트
  const [noticeList, setNoticeList] = useState(null);

  // 검색된 상태의 finder 정보를 가지는 변수
  const selectedFinderInfo = useRecoilValue(selectedFinderAtom);

  // 각 route 마다 개별적으로 지급되는 key를 저장.
  // 현재 route 에서 finder 검색이 작동하지 않는 것을 수정
  const currentRouteKey = useLocation().key;

  // 차량 리스트 렌더링에 필요한 state
  const [carInfoList, setCarInfoList] = useState(null);

  // 차량 상세정보를 확인할때 사용하는 현재 클릭한 차량의 번호
  const [selectedCarNumber, setSelectedCarNumber] = useState(null);

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

  // 공지사항 전체 리스트 조회 화면으로 이동
  const nav = useNavigate();

  // finder 검색 클릭하거나, 새로고침 시, 공지사항 리스트 불러옴
  useEffect(() => {
    getNoticeList({
      province: selectedFinderInfo.province,
      store: selectedFinderInfo.store,
      count: 3,
    })
      .then((response) => {
        console.log("CarDetail / getNoticeList", response.data);
        if (response.data.length < 3) {
          const array = [
            ...response.data,
            ...[...Array(3 - response.data.length)].map((v, i) => {
              return { noticeId: null };
            }),
          ];
          setNoticeList(array);
        } else {
          setNoticeList(response.data);
        }
      })
      .catch((error) => {
        console.log("CarDetail / getNoticeList error", error.response);
      });
  }, [currentRouteKey, selectedFinderInfo]);

  // finder 검색 클릭하거나, 새로고침 시, 차량 리스트 조회
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
  }, [currentRouteKey, selectedFinderInfo]);

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
                  <button
                    className="text-[20px] font-semibold w-[135px] h-[44px] rounded-xl bg-blue-500 text-white"
                    onClick={async () => {
                      await getPreferOption()
                        .then((response) => {
                          console.log("CarSearch / 선호옵션 : ", response.data);
                          alert.onAndOff("선호 옵션을 불러왔습니다");
                          setUserPrefer(response.data);
                        })
                        .catch((error) => {
                          alert.onAndOff("선호 옵션을 불러오는데 실패했습니다");
                          console.log(
                            "CarSearch / 선호옵션에러 : ",
                            error.response
                          );
                        });
                    }}
                  >
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
                            alert.onAndOff("차량을 검색했습니다.");
                            console.log(
                              "CarSearch / getCarCardList",
                              response.data
                            );
                            setCarInfoList(response.data);
                          })
                          .catch((error) => {
                            alert.onAndOff("차량 검색에 실패했습니다.");
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
              <Tooltip content="전체 공지사항 보러가기">
                <button
                  className="flex items-center justify-around w-full h-20 my-3 rounded-2xl bg-sky-50 border-[1px] border-blue-600 px-4 hover:bg-sky-200 hover:shadow-figma"
                  onClick={() => {
                    // 공지사항 전체 리스트 조회 화면으로 이동하기 위한 state 정의
                    nav("/notice", {
                      state: {
                        store: selectedFinderInfo.store,
                        province: selectedFinderInfo.province,
                      },
                    });
                  }}
                >
                  <div className="flex flex-col items-center justify-around h-full py-8">
                    <span>
                      <span className="font-bold text-blue-600">
                        {`${selectedFinderInfo.province} ${selectedFinderInfo.store} `}
                      </span>
                      <br />
                    </span>
                    <span className="text-xl font-semibold">전체 공지사항</span>
                  </div>
                  <MdNotificationsActive className="text-[45px]" />
                </button>
              </Tooltip>

              {/* 공지사항 슬라이더 */}
              <div className="h-[485px]">
                <NoticeCarousel noticeList={noticeList} />
              </div>
            </div>
          </div>

          {/* 차량 리스트 */}
          <div className="w-[860px] h-[1000px] pb-5 grid grid-cols-3 overflow-y-scroll">
            {carInfoList
              ? carInfoList.map((v, i) => {
                  return (
                    <div>
                      <div
                        key={i}
                        onClick={() => {
                          // 팝업에 정보를 넘겨주는 목적으로 state 저장
                          setSelectedCarNumber(v.carNumber);

                          carDetailPopUp.toggle();

                          // 로컬스토리지에 없으면 null, 빈 배열로 초기화
                          if (
                            window.localStorage.getItem("resentInquireCar") ===
                            null
                          ) {
                            window.localStorage.setItem(
                              "resentInquireCar",
                              JSON.stringify([])
                            );
                          }

                          // 역변환하여 우리가 아는 배열로 다시 바꿔온다.
                          let queue = JSON.parse(
                            window.localStorage.getItem("resentInquireCar")
                          );

                          // 같은 차량이 들어갈 수 없음
                          if (queue.includes(v.carNumber)) {
                            const idx = queue.findIndex(
                              (elm) => v.carNumber === elm
                            );
                            queue.splice(idx, 1);
                          }

                          // 이미 6개 있으면 제일 앞을 뺌
                          if (queue.length === 6) {
                            queue.shift();
                          }

                          // 새로운 차 번호를 배열 뒤에 넣는다.
                          queue.push(v.carNumber);

                          // 로컬 스토리지에 배열을 저장
                          window.localStorage.setItem(
                            "resentInquireCar",
                            JSON.stringify(queue)
                          );
                        }}
                      >
                        {/* 추후 빠진 props 추가할 것 */}
                        <CarCard
                          name={v.carName}
                          number={v.carNumber}
                          totalDistance={v.totalDistance}
                          beforePrice={v.beforePrice}
                          afterPrice={v.afterPrice}
                          imageURI={v.imageUri}
                          discountRatio={v.discountRatio}
                        ></CarCard>
                      </div>
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
        <CarDetail popUpInfo={carDetailPopUp} carNumber={selectedCarNumber} />
      ) : undefined}

      {alertState.state && <Alert />}
    </>
  );
};

export default CarSearch;
