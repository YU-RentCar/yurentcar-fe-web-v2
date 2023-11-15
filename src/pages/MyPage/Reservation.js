import { useEffect, useState } from "react";
import { getWaitingResvInfo, getUserInfo, cancelResv } from "api/myPageAxios";
import {
  MdOutlineTimer,
  MdOutlinePlace,
  MdOutlineDirectionsCarFilled,
  MdOutlineConfirmationNumber,
  MdOutlinePerson,
} from "react-icons/md";
import dayjs from "dayjs";
import "dayjs/locale/ko";

const Reservation = ({ setResvState }) => {
  dayjs.locale("ko"); // dayjs 에 한국어 적용
  const [iconList, setIconList] = useState([
    // 아이콘
    <MdOutlineTimer className="ml-4 text-[22px] text-blue-600" />,
    <MdOutlinePlace className="ml-4 text-[22px] text-blue-600" />,
    <MdOutlineDirectionsCarFilled className="ml-4 text-[22px] text-blue-600" />,
    <MdOutlineConfirmationNumber className="ml-4 text-[22px] text-blue-600" />,
  ]);
  const [userInfo, setUserName] = useState(""); // 사용자 이름
  const [resvInfo, setResvInfo] = useState({}); // 예약 정보
  const [driversInfo, setDriversInfo] = useState([]); // 등록된 운전자 정보
  const [idInfo, setIdInfo] = useState(-1); // 예약 번호 정보
  useEffect(() => {
    const img = document.getElementById("mypageImg");
    getWaitingResvInfo()
      .then((response) => {
        // 객체가 없다면 대기 중인 예약이 없으니 해당 컴포넌트 off
        if (response.data == null) setResvState(false);
        else {
          setResvState(true);
          getUserInfo() // 사용자 이름을 위한 api
            .then((response) => {
              setUserName(response.data.nickname);
            })
            .catch((error) =>
              console.log("마이페이지 / 사용자기본정보1에러 : ", error.response)
            );
          const tmp = {};
          // 데이터 가공
          tmp["렌트 기간"] = ` :   ${dayjs(response.data.startDate).format(
            "MM.DD.(ddd) HH:mm"
          )} ~ ${dayjs(response.data.endDate).format("MM.DD.(ddd) HH:mm")}`;
          tmp["렌트 지점"] = ` :   ${response.data.branchName}`;
          tmp["차량"] = ` :   ${response.data.carName}`;
          tmp["차 번호"] = ` :   ${response.data.carNumber}`;
          setResvInfo(tmp);
          setDriversInfo([...response.data.drivers]);
          setIdInfo(Number(response.data.reservationId));
          img.src = `http://deploytest.iptime.org:8080/api/v1/images/display/${response.data.carName}.png`;
        }
      })
      .catch((error) => {
        console.log("마이페이지 / 렌트대기예약정보에러 : ", error.response);
        setResvState(false);
      });
  }, []);
  return (
    <div
      className="flex flex-col items-center w-full py-4 mb-12 bg-sky-50 rounded-2xl shadow-figma"
      id="MyPage/Reservation"
    >
      {/* 멘트 */}
      <span className="text-black text-[30px] font-bold">
        <span className="text-amber-400 ">{userInfo}</span>님이 예약하신 차량이
        준비 중이에요
      </span>
      {/* 차량 정보 */}
      <div className="flex items-center justify-around w-full mt-3">
        <div className="flex flex-col w-[300px]">
          {/* 차량 사진 */}
          <img
            id="mypageImg"
            src=""
            alt="차량 사진"
            className="object-cover w-full rounded-2xl"
          ></img>
          {/* 예약 취소 버튼 */}
          <button
            className="w-full h-10 text-lg font-bold rounded-2xl bg-amber-400"
            onClick={() => {
              cancelResv(idInfo)
                .then((response) => {
                  console.log("예약 / 예약취소 : ", response.data);
                  window.location.reload();
                })
                .catch((error) =>
                  console.log("예약 / 예약취소에러 : ", error.response)
                );
            }}
          >
            예약 취소
          </button>
        </div>

        {/* 렌트 정보 */}
        <div className="w-[450px] flex flex-col justify-around items-center bg-blue-100 rounded-2xl py-4">
          {/* 예약 기간, 예약 지점, 차량, 차 번호 */}
          {Object.keys(resvInfo).map((v, i) => {
            return (
              <div
                className="w-[420px] h-[35px] bg-sky-200 flex items-center rounded-lg mt-2"
                key={i}
              >
                {iconList[i]}
                <span className="ml-3 text-base font-semibold ">
                  {v + resvInfo[v]}
                </span>
              </div>
            );
          })}
          {/* 운전자 */}
          {driversInfo.map((driver, index) => {
            return (
              <div
                className="w-[420px] h-[35px] bg-sky-200 flex items-center rounded-lg mt-2"
                key={index}
              >
                <MdOutlinePerson className="ml-4 text-[22px] text-blue-600" />
                <span className="ml-3 text-base font-semibold ">
                  {`제 ${index + 1} 운전자 : ${driver}`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reservation;
