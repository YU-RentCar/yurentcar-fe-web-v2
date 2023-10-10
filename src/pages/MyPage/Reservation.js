import { useRecoilValue } from "recoil";
import { userAtom } from "recoil/userAtom";
import { useEffect, useState } from "react";
import Car from "assets/Car.png";
import {
  MdOutlineTimer,
  MdOutlinePlace,
  MdOutlineDirectionsCarFilled,
  MdOutlineConfirmationNumber,
  MdOutlinePerson,
} from "react-icons/md";
import { getWaitingResvInfo } from "api/myPageAxios";
import dayjs from "dayjs";
import "dayjs/locale/ko";

const Reservation = () => {
  dayjs.locale("ko"); // dayjs 에 한국어 적용
  const [iconList, setIconList] = useState([
    // 아이콘
    <MdOutlineTimer className="ml-4 text-[26px] text-blue-600" />,
    <MdOutlinePlace className="ml-4 text-[26px] text-blue-600" />,
    <MdOutlineDirectionsCarFilled className="ml-4 text-[26px] text-blue-600" />,
    <MdOutlineConfirmationNumber className="ml-4 text-[26px] text-blue-600" />,
  ]);
  const userInfo = useRecoilValue(userAtom).name; // 사용자 이름
  const [resvInfo, setResvInfo] = useState({}); // 예약 정보
  useEffect(() => {
    // 서버로부터 정보 요청
    getWaitingResvInfo()
      .then((response) => {
        const tmp = {};
        console.log("렌트 대기 예약 정보 응답 : ", response.data);
        // 데이터 가공
        tmp["렌트 기간"] = ` : ${dayjs(response.data.startDate).format(
          "MM.DD.(ddd) HH:mm"
        )} ~ ${dayjs(response.data.endDate).format("MM.DD.(ddd) HH:mm")}`;
        tmp["렌트 지점"] = ` : ${response.data.branchName}`;
        tmp["차량"] = ` : ${response.data.carName}`;
        tmp["차 번호"] = ` : ${response.data.carNumber}`;
        setResvInfo(tmp);
      })
      .catch((error) =>
        console.log("렌트 대기 예약 정보 에러 : ", error.reponse)
      );
  }, []);
  return (
    <>
      <div className="flex flex-col items-center w-full py-4 bg-sky-50 rounded-2xl shadow-figma">
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
            {Object.keys(resvInfo).map((v, i) => {
              return (
                <div
                  className="w-[600px] h-[50px] bg-sky-200 flex items-center rounded-2xl mt-2"
                  key={i}
                >
                  {iconList[i]}
                  <span className="ml-5 text-xl font-semibold ">
                    {v + resvInfo[v]}
                  </span>
                </div>
              );
            })}
            {/* 운전자 */} {/* 서버에서 구현된 후에 추가될 예정 */}
            {/*resvInfo.drivers.map((driver, index) => {
              return (
                <div
                  className="w-[600px] h-[50px] bg-sky-200 flex items-center rounded-2xl mt-2"
                  key={index}
                >
                  <MdOutlinePerson className="ml-4 text-[26px] text-blue-600" />
                  <span className="ml-5 text-xl font-semibold ">
                    {`제 ${index + 1} 운전자 : ${driver[index + 1]}`}
                  </span>
                </div>
              );
            })*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
