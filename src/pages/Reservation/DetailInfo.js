import { useState, useEffect } from "react";
import { getCarInfo } from "api/reservationAxios";
import { useLocation } from "react-router-dom";
import {
  MdLocalCarWash,
  MdOutlineDateRange,
  MdDateRange,
  MdPeopleAlt,
  MdSettings,
  MdTag,
  MdOutlineFlag,
  MdPhotoSizeSelectSmall,
} from "react-icons/md";
import dayjs from "dayjs";

const DetailInfo = () => {
  const location = useLocation(); // location state 제어
  const [carInfo, setCarInfo] = useState({}); // 차량 정보
  const [iconList, setIconList] = useState([
    // 아이콘
    <MdLocalCarWash className="text-[45px]" />,
    <MdPhotoSizeSelectSmall className="text-[45px]" />,
    <MdOutlineDateRange className="text-[45px]" />,
    <MdDateRange className="text-[45px]" />,
    <MdPeopleAlt className="text-[45px]" />,
    <MdSettings className="text-[45px]" />,
    <MdTag className="text-[45px]" />,
    <MdOutlineFlag className="text-[45px]" />,
  ]);
  useEffect(() => {
    getCarInfo(location.state.carNumber) // 차량 정보 조회
      .then((response) => {
        console.log("예약 / 상세정보 : ", response.data);
        // 데이터 가공
        const tmp = {
          유종: response.data.oilType,
          "차량 크기": response.data.carSize,
          출시일: `${dayjs(response.data.releaseDate).format("YYYY")}년`,
          등록일: `${dayjs(response.data.createdAt).format("YYYY")}년`,
          "승차 인원": response.data.maxPassenger,
          구동기: response.data.transmission,
          브랜드: response.data.carBrand,
          "국산/외제": response.data.isKorean ? "국산" : "외제",
        };
        setCarInfo(tmp);
      })
      .catch((error) => {
        console.log("예약 / 상세정보에러 : ", error.response);
      });
  }, []);
  return (
    <div
      className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl shadow-figma"
      id="Reservation/DetailInfo"
    >
      {/* 타이틀 */}
      <div className="w-[700px] h-[35px] flex justify-between items-center text-blue-800 text-[30px] font-extrabold">
        차량 상세 정보
      </div>
      {/* 상세 정보 */}
      <div className="w-[750px] h-[510px] mx-auto bg-blue-200 rounded-2xl mt-4 flex justify-center items-center">
        <div className="grid w-full grid-cols-4 gap-y-2">
          {Object.keys(carInfo).map((v, i) => {
            return (
              <div
                className="w-[150px] h-[150px] bg-sky-50 flex flex-col justify-around rounded-xl mx-6 pl-3 py-3"
                key={i}
              >
                {iconList[i]}
                <span className="text-lg font-semibold">{v}</span>
                <span className="text-2xl font-bold text-blue-900">
                  {carInfo[v]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailInfo;
