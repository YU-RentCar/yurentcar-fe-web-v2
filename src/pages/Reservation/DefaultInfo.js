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
import Car from "assets/Car.png";
import dayjs from "dayjs";

const DefaultInfo = () => {
  const location = useLocation(); // 받아온 props 받기 위함
  const [carInfo, setCarInfo] = useState({}); // 차량 정보
  const [rentInfo, setRentInfo] = useRecoilState(rentInfoSelector); // 최종 결제 시 필요 정보 저장
  const dateInfo = useRecoilValue(selectedFinderAtom); // 예약 기간
  const [iconList, setIconList] = useState([
    // 아이콘
    <MdOutlineDirectionsCarFilled className="ml-4 text-[26px] text-blue-600" />,
    <MdOutlineConfirmationNumber className="ml-4 text-[26px] text-blue-600" />,
    <MdOutlineEditRoad className="ml-4 text-[26px] text-blue-600" />,
    <MdMoney className="ml-4 text-[26px] text-blue-600" />,
    <MdOutlineDiscount className="ml-4 text-[26px] text-blue-600" />,
    <MdOutlineArticle className="ml-4 text-[26px] text-blue-600" />,
  ]);
  useEffect(() => {
    // location.state
    getCarInfo("99가9999") // 차량 기본 정보
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
        };
        setCarInfo(tmp);
        setRentInfo({
          carNumber: response.data.carNumber,
          startDate: dayjs(new Date()).format("YYYY. MM. DD. HH:mm"),
          endDate: dayjs(new Date()).format("YYYY. MM. DD. HH:mm"),
          beforePrice: response.data.beforePrice,
          afterPrice: response.data.afterPrice,
        });
      })
      .catch((error) => {
        console.log("예약 / 기본정보에러 : ", error.response);
      });
  }, []);
  return (
    <div className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl shadow-figma">
      {/* 타이틀 */}
      <div className="w-[1010px] h-[70px] flex justify-between items-center text-blue-800 text-[45px] font-bold">
        차량 기본 정보
      </div>
      {/* 차량 정보 */}
      <div className="flex items-center justify-center w-full mt-3">
        {/* 차량 사진 */}
        <img src={Car} alt="차량 사진" className="mr-2"></img>
        {/* 기본 정보 */}
        <div className="w-[660px] flex flex-col justify-around items-center bg-blue-100 rounded-2xl py-8 ml-2">
          {/* 차종, 차 번호, 총 주행거리 */}
          {Object.keys(carInfo).map((v, i) => {
            return (
              <div
                className="w-[600px] h-[50px] bg-sky-200 flex items-center rounded-2xl mt-2"
                key={i}
              >
                {iconList[i]}
                <span className="ml-5 text-xl font-medium">
                  {`${v} : ${carInfo[v]}${
                    i === 2 ? "km" : i === 3 ? "원" : i === 4 ? "%" : ""
                  }`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DefaultInfo;
