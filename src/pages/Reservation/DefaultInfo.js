import Car from "assets/Car.png";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { carAtom } from "recoil/carAtom";
import {
  MdOutlineDirectionsCarFilled,
  MdOutlineConfirmationNumber,
  MdOutlineEditRoad,
} from "react-icons/md";

const DefaultInfo = () => {
  const carInfo = useRecoilValue(carAtom); // 차량 정보
  const [titles, setTitles] = useState({
    // 제목
    차종: "car",
    "차 번호": "number",
    "총 주행거리 ": "odo",
  });
  const [iconList, setIconList] = useState([
    // 아이콘
    <MdOutlineDirectionsCarFilled className="ml-4 text-[26px] text-blue-600" />,
    <MdOutlineConfirmationNumber className="ml-4 text-[26px] text-blue-600" />,
    <MdOutlineEditRoad className="ml-4 text-[26px] text-blue-600" />,
  ]);
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
          {Object.keys(titles).map((v, i) => {
            return (
              <div
                className="w-[600px] h-[50px] bg-sky-200 flex items-center rounded-2xl mt-2"
                key={i}
              >
                {iconList[i]}
                <span className="ml-5 text-xl font-medium">
                  {`${v} : ${carInfo[titles[v]]}${i === 2 ? "km" : ""}`}
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
