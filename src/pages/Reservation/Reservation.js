import DefaultInfo from "./DefaultInfo";
import DetailInfo from "./DetailInfo";

const Reservation = () => {
  return (
    <>
      <div className="w-[1140px] mx-auto mt-[176px]">
        {/* 차량 기본 정보 */}
        <DefaultInfo />
        {/* 차량 상세 정보 */}
        <DetailInfo />
      </div>
    </>
  );
};

export default Reservation;
