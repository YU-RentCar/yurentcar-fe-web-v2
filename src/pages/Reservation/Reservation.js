import DefaultInfo from "./DefaultInfo";
import DetailInfo from "./DetailInfo";
import Repair from "./Repair";
import Accident from "./Accident";
import Map from "./Map";
import Insurance from "./Insurance";
import Drivers from "./Drivers";
import Point from "./Point";
import Final from "./Final";

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
        {/* 지점 지도 */}
        <Map />
        {/* 차량 종합 보험 */}
        <Insurance />
        {/* 운전자 등록 */}
        <Drivers />
        {/* 포인트 사용 */}
        <Point />
        {/* 최종 결제 */}
        <Final />
      </div>
    </>
  );
};

export default Reservation;
