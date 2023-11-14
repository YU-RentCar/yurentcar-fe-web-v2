import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCarInfo } from "api/reservationAxios";
import { useRecoilState, useRecoilValue } from "recoil";
import { rentInfoSelector } from "recoil/rentAtom";
import { selectedFinderAtom } from "recoil/selectedFinderAtom";
import {
  MdOutlineDirectionsCarFilled,
  MdOutlineConfirmationNumber,
  MdOutlineEditRoad,
  MdMoney,
  MdOutlineDiscount,
  MdOutlineArticle,
} from "react-icons/md";
import dayjs from "dayjs";

const DefaultInfo = () => {
  const location = useLocation(); // location state 제어
  const [carInfo, setCarInfo] = useState({}); // 차량 정보
  const [rentInfo, setRentInfo] = useRecoilState(rentInfoSelector); // 최종 결제 시 필요 정보 저장
  const dateInfo = useRecoilValue(selectedFinderAtom); // 예약 기간
  const [iconList, setIconList] = useState([
    // 아이콘
    <MdOutlineDirectionsCarFilled className="ml-4 text-[22px] text-blue-600" />,
    <MdOutlineConfirmationNumber className="ml-4 text-[22px] text-blue-600" />,
    <MdOutlineEditRoad className="ml-4 text-[22px] text-blue-600" />,
    <MdMoney className="ml-4 text-[22px] text-blue-600" />,
    <MdOutlineDiscount className="ml-4 text-[22px] text-blue-600" />,
    <MdOutlineArticle className="ml-4 text-[22px] text-blue-600" />,
  ]);
  useEffect(() => {
    getCarInfo(location.state.carNumber) // 차량 기본 정보
      .then((response) => {
        console.log("예약 / 기본정보 : ", response.data);
        // 데이터 가공
        const tmp = {
          차종: response.data.carName,
          "차 번호": response.data.carNumber,
          "총 주행거리": response.data.totalDistance,
          가격: response.data.beforePrice,
          할인율: response.data.discountRate,
          "할인 사유": response.data.discountReason,
          사진: response.data.photoUrl,
        };
        setCarInfo(tmp);
        setRentInfo({
          carNumber: response.data.carNumber,
          startDate: dayjs(dateInfo.startDate).format("YYYY. MM. DD. HH:mm"),
          endDate: dayjs(dateInfo.endDate).format("YYYY. MM. DD. HH:mm"),
          beforePrice: response.data.beforePrice,
          afterPrice: response.data.afterPrice,
        });
      })
      .catch((error) => {
        console.log("예약 / 기본정보에러 : ", error.response);
      });
  }, []);
  return (
    <div
      className="flex flex-col items-center w-full py-4 bg-sky-50 rounded-2xl shadow-figma"
      id="Reservation/DefaultInfo"
    >
      {/* 타이틀 */}
      <div className="w-[700px] h-[35px] flex justify-between items-center text-blue-800 text-[30px] font-extrabold">
        차량 기본 정보
      </div>
      {/* 차량 정보 */}
      <div className="flex items-center justify-around w-full mt-3">
        {/* 차량 사진 */}
        <img
          src={`http://deploytest.iptime.org:8080/api/v1/images/display/${carInfo["사진"]}`}
          alt="차량 사진"
          className="object-cover h-[200px] w-[300px] rounded-2xl"
        ></img>
        {/* 기본 정보 */}
        <div className="w-[450px] flex flex-col justify-around items-center bg-blue-100 rounded-2xl py-4">
          {/* 차종, 차 번호, 총 주행거리 */}
          {Object.keys(carInfo).map((v, i) => {
            if (v !== "사진") {
              return (
                <div
                  className="w-[420px] h-[35px] bg-sky-200 flex items-center rounded-lg mt-2"
                  key={i}
                >
                  {iconList[i]}
                  <span className="ml-3 text-base font-semibold">
                    {`${v} : ${carInfo[v]}${
                      i === 2 ? "km" : i === 3 ? "원" : i === 4 ? "%" : ""
                    }`}
                  </span>
                </div>
              );
            } else return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default DefaultInfo;
