import { MdOutlineClose } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import {
  MdEditRoad,
  MdLocalCarWash,
  MdDirectionsCar,
  MdSettings,
  MdPeople,
} from "react-icons/md";
import { getCarDetail } from "api/carSearchAxios";
import { selectedFinderAtom } from "recoil/selectedFinderAtom";
import { useRecoilState } from "recoil";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { usePopUp } from "utils/usePopUp";
import { getWaitingResvInfo } from "api/myPageAxios";
import { useAlert } from "utils/useAlert";

const CarDetail = ({ popUpInfo, carNumber }) => {
  // 예약 페이지로 이동
  const navigate = useNavigate();

  const detailTemplate = [
    {
      title: "주행거리",
      engTitle: "totalDistance",
      icons: <MdEditRoad />,
      unit: "km",
    },
    {
      title: "차량 크기",
      engTitle: "carSize",
      icons: <MdDirectionsCar />,
      unit: null,
    },
    {
      title: "유종",
      engTitle: "oilType",
      icons: <MdLocalCarWash />,
      unit: null,
    },
    {
      title: "구동기",
      engTitle: "transmission",
      icons: <MdSettings />,
      unit: null,
    },
    {
      title: "승차인원",
      engTitle: "maxPassenger",
      icons: <MdPeople />,
      unit: "인",
    },
  ];

  const [carInfo, setCarInfo] = useState(null);

  const [selectedFinderInfo, setSelectedFinderInfo] =
    useRecoilState(selectedFinderAtom);

  const alert = useAlert();

  useEffect(() => {
    getCarDetail({ carNumber: carNumber })
      .then((response) => {
        console.log("CarDetail / getCarDetail", response.data);
        setCarInfo(response.data);
      })
      .catch((error) => {
        console.log("CarDetail / getCarDetail 에러", error.response);
      });
  }, []);

  return (
    <>
      {/* carInfor가 null로 넘어와 오류를 일으키는 것을 방지 */}
      {carInfo === null ? null : (
        // 팝업 뒤의 어두운 화면
        <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-screen h-screen bg-black select-none bg-opacity-40">
          {/* 팝업 본체 */}
          <div className="bg-white w-[1050px] h-[640px] rounded-2xl flex justify-center items-center ">
            <div className="bg-sky-50 w-[1000px] h-[600px] rounded-xl relative flex flex-col items-center justify-around">
              {/* 닫기 버튼 */}
              <button
                className="absolute top-2 left-2"
                onClick={() => {
                  popUpInfo.toggle();
                }}
              >
                <MdOutlineClose size={49} color="gray" />
              </button>

              <div className="w-[839px] h-[250px] bg-white rounded-xl shadow-figma flex items-center justify-around">
                {/* 차량 사진 */}
                <div className="w-[345px] h-[210px] bg-blue-200 rounded-2xl">
                  <img
                    className="object-fill w-full h-full rounded-2xl"
                    src={`http://deploytest.iptime.org:8080/api/v1/images/display/${carInfo.photoUrl}.png`}
                    alt=""
                  />
                </div>
                {/* 차량 설명 */}
                <div className="w-[345px] h-[210px] flex flex-col items-start">
                  <div>
                    <div className="font-bold text-[30px]">
                      {carInfo.carName}
                    </div>
                    <div className="font-semibold text-[24px] text-gray-500 -mt-2">
                      {carInfo.carNumber}
                    </div>
                  </div>
                  <p className="mt-1">{carInfo.carDescription}</p>
                </div>
              </div>

              {/* 차량 정보 */}
              <div className="w-[839px] h-[300px] bg-blue-200 rounded-xl grid grid-cols-3 gap-3 p-3">
                {/* 차량 특징 */}
                <div className="grid grid-cols-2 col-span-2 gap-3 p-3 bg-white rounded-xl">
                  {detailTemplate.map((v, i) => {
                    return (
                      <div
                        className="flex flex-col items-center justify-center rounded-xl bg-sky-100"
                        key={i}
                      >
                        <div className="flex items-center text-[20px] font-semibold self-start px-4">
                          <span>{v.title}</span>
                          <span className="ml-4 text-[28px]">{v.icons}</span>
                        </div>
                        <div className="text-[24px] font-semibold text-blue-900 self-end px-4">
                          {`${carInfo[v.engTitle]}${v.unit || ""}`}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* 차량 결제 정보 */}
                <div className="flex flex-col justify-around col-span-1 pl-5 bg-white rounded-xl">
                  <div className="text-[20px] font-semibold text-blue-900 mt-[15px]">
                    결제정보
                  </div>
                  <div>
                    <div className="text-[14px] font-medium">{`${selectedFinderInfo.province} ${selectedFinderInfo.store}`}</div>
                    <div className="text-[19px] font-semibold -mt-2">
                      {`
                      ${dayjs(selectedFinderInfo.startDate).format("MM/DD")} 
                      ${selectedFinderInfo.startTime}
                      ~
                      ${dayjs(selectedFinderInfo.endDate).format("MM/DD")}
                      ${selectedFinderInfo.endTime}`}
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div>
                      <div className="text-[14px] font-medium">할인</div>
                      <div className="-mt-1 font-semibold text-gray-400 line-through text-[20px]">
                        ₩{`${carInfo.beforePrice}`}
                      </div>
                    </div>
                    <div className="flex flex-col items-end pr-5 mt-1">
                      <div className="text-[12px] font-medium">
                        {carInfo.discountReason}
                      </div>
                      <div className="-mt-1 font-semibold text-red-500">
                        {`-${carInfo.discountRate}%`}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 ">
                    <div className="text-[16px] font-medium">예상 결제액</div>
                    <div className="text-[24px] -mt-1 font-semibold text-blue-500">
                      ₩{carInfo.afterPrice}
                    </div>
                  </div>
                  <button
                    className="w-[110px] h-[44px] bg-amber-400 rounded-xl font-semibold text-[20px] self-end mb-[10px] mr-3"
                    onClick={() => {
                      getWaitingResvInfo()
                        .then((response) => {
                          popUpInfo.toggle();
                          navigate("/reservation", {
                            state: {
                              carNumber: carNumber,
                              province: selectedFinderInfo.province,
                              store: selectedFinderInfo.store,
                            },
                          });
                        })
                        .catch((error) => {
                          alert.onAndOff("이미 예약했던 차량이 있습니다.");
                        });
                    }}
                  >
                    예약하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarDetail;
