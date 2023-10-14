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
    <MdLocalCarWash className="text-[60px]" />,
    <MdPhotoSizeSelectSmall className="text-[60px]" />,
    <MdOutlineDateRange className="text-[60px]" />,
    <MdDateRange className="text-[60px]" />,
    <MdPeopleAlt className="text-[60px]" />,
    <MdSettings className="text-[60px]" />,
    <MdTag className="text-[60px]" />,
    <MdOutlineFlag className="text-[60px]" />,
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
    <div className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl shadow-figma">
      {/* 타이틀 */}
      <div className="w-[1010px] h-[70px] flex justify-between items-center text-blue-800 text-[45px] font-bold">
        차량 상세 정보
      </div>
      {/* 상세 정보 */}
      <div className="w-[1100px] h-[510px] mx-auto bg-blue-200 rounded-2xl mt-4 flex flex-wrap justify-center items-center">
        {Object.keys(carInfo).map((v, i) => {
          return (
            <div
              className="w-[200px] h-[200px] bg-sky-50 flex flex-col justify-around rounded-2xl mx-8 pl-4 py-4"
              key={i}
            >
              {iconList[i]}
              <span className="text-2xl font-semibold">{v}</span>
              <span className="text-4xl font-bold text-blue-900">
                {carInfo[v]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailInfo;
