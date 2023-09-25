import { useRecoilValue } from "recoil";
import { userAtom } from "recoil/userAtom";
import { resvAtom } from "recoil/resvAtom";
import { useState } from "react";
import Car from "assets/Car.png";
import {
  MdOutlineTimer,
  MdOutlinePlace,
  MdOutlineDirectionsCarFilled,
  MdOutlineConfirmationNumber,
  MdOutlinePerson,
} from "react-icons/md";

/**
 * userInfo : 사용자 정보
 * resvInfo : 예약 정보
 * titles : 제목
 * iconList : 아이콘
 */
const Reservation = () => {
  const userInfo = useRecoilValue(userAtom);
  const resvInfo = useRecoilValue(resvAtom);
  const [titles, setTitles] = useState({
    "예약 기간": "period",
    "예약 지점": "store",
    차량: "car",
    "차 번호": "number",
  });
  const [iconList, setIconList] = useState([
    <MdOutlineTimer className="ml-4 text-[26px] text-blue-600" />,
    <MdOutlinePlace className="ml-4 text-[26px] text-blue-600" />,
    <MdOutlineDirectionsCarFilled className="ml-4 text-[26px] text-blue-600" />,
    <MdOutlineConfirmationNumber className="ml-4 text-[26px] text-blue-600" />,
  ]);
  return (
    <>
      <div className="flex flex-col items-center w-full py-4 bg-sky-50 rounded-2xl ">
        {/* 멘트 */}
        <span className="text-black text-[30px] font-bold">
          <span className="text-amber-400 ">{userInfo.name}</span>님이 예약하신
          차량이 준비 중이에요
        </span>
        {/* 차량 정보 */}
        <div className="flex items-center justify-around w-full mt-3">
          {/* 차량 사진 */}
          <img src={Car} alt="차량 사진"></img>
          {/* 렌트 정보 */}
          <div className="w-[660px] flex flex-col justify-around items-center bg-blue-100 rounded-2xl py-4">
            {/* 예약 기간, 예약 지점, 차량, 차 번호 */}
            {Object.keys(titles).map((v, i) => {
              return (
                <div className="w-[600px] h-[50px] bg-sky-200 flex items-center rounded-2xl mt-2">
                  {iconList[i]}
                  <span className="ml-5 text-xl font-semibold ">
                    {v + " : " + resvInfo[titles[v]]}
                  </span>
                </div>
              );
            })}
            {/* 운전자 */}
            {resvInfo.drivers.map((driver, index) => {
              return (
                <div className="w-[600px] h-[50px] bg-sky-200 flex items-center rounded-2xl mt-2">
                  <MdOutlinePerson className="ml-4 text-[26px] text-blue-600" />
                  <span className="ml-5 text-xl font-semibold ">
                    {`제 ${index + 1} 운전자 : ${driver[index + 1]}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
