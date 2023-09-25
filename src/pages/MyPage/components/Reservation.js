import Car from "assets/Car.png";
import {
  MdOutlineTimer,
  MdOutlinePlace,
  MdOutlineDirectionsCarFilled,
  MdOutlineConfirmationNumber,
  MdOutlinePerson,
} from "react-icons/md";

const Reservation = ({ userInfo, resvInfo }) => {
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
            {/* 렌트 기간 */}
            <div className="w-[600px] h-[50px] bg-sky-200 flex items-center rounded-2xl">
              <MdOutlineTimer color="#0284c7" size="26" className="ml-4" />
              <span className="ml-5 text-xl font-semibold">
                {resvInfo.period}
              </span>
            </div>
            {/* 렌트 지점 */}
            <div className="w-[600px] h-[50px] bg-sky-200 flex items-center rounded-2xl mt-2">
              <MdOutlinePlace color="#0284c7" size="26" className="ml-4" />
              <span className="ml-5 text-xl font-semibold">
                예약 지점 : {resvInfo.store}
              </span>
            </div>
            {/* 차량 */}
            <div className="w-[600px] h-[50px] bg-sky-200 flex items-center rounded-2xl mt-2">
              <MdOutlineDirectionsCarFilled
                color="#0284c7"
                size="26"
                className="ml-4"
              />
              <span className="ml-5 text-xl font-semibold ">
                차량 : {resvInfo.car}
              </span>
            </div>
            {/* 차량 번호 */}
            <div className="w-[600px] h-[50px] bg-sky-200 flex items-center rounded-2xl mt-2">
              <MdOutlineConfirmationNumber
                color="#0284c7"
                size="26"
                className="ml-4"
              />
              <span className="ml-5 text-xl font-semibold">
                차 번호 : {resvInfo.number}
              </span>
            </div>
            {/* 운전자 */}
            {resvInfo.drivers.map((driver, index) => {
              return (
                <div
                  className="w-[600px] h-[50px] bg-sky-200 flex items-center rounded-2xl mt-2"
                  key={index}
                >
                  <MdOutlinePerson color="#0284c7" size="26" className="ml-4" />
                  <span className="ml-5 text-xl font-semibold">
                    제 {index + 1} 운전자 : {driver[String(index + 1)]}
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
