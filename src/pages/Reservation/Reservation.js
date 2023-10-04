import DefaultInfo from "./DefaultInfo";
import DetailInfo from "./DetailInfo";
import Repair from "./Repair";
import Accident from "./Accident";

const Reservation = () => {
  return (
    <>
      <div className="w-[1140px] mx-auto mt-[176px]">
        {/* 차량 기본 정보 */}
        <DefaultInfo />
        {/* 차량 상세 정보 */}
        <DetailInfo />
        {/* 차량 수리 내역 */}
        <Repair />
        {/* 차량 사고 내역 */}
        <Accident />
      </div>
    </>
  );
};

export default Reservation;
