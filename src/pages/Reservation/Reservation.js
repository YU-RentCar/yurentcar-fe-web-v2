import DefaultInfo from "./DefaultInfo";
import DetailInfo from "./DetailInfo";
import Repair from "./Repair";
import Accident from "./Accident";
import Map from "./Map";
import Insurance from "./Insurance";
import Drivers from "./Drivers";
import Point from "./Point";
import Final from "./Final";
import SelectDateTime from "popUp/SelectDateTime";
import SelectStore from "popUp/SelectStore";
import Finder from "components/Finder";
import { usePopUp } from "utils/usePopUp";

const Reservation = () => {
  const storePopUp = usePopUp("Reservation/SelectStore"); // 지점 선택 팝업
  const dateTimePopUp = usePopUp("Reservation/SelectDateTime"); // 날짜, 시간 선택 팝업
  return (
    <>
      {/* 렌트 날짜, 지점 선택 컴포넌트 */}
      <div className="w-[860px] h-[70px] rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-20 mx-auto bg-white flex items-center justify-between z-10">
        <Finder storePopUp={storePopUp} dateTimePopUp={dateTimePopUp} />
      </div>
      <div className="w-[1140px] mx-auto mt-10">
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
      {/* 팝업 구역 */}
      {storePopUp.isClicked ? (
        <SelectStore popUpInfo={storePopUp} />
      ) : undefined}
      {dateTimePopUp.isClicked ? (
        <SelectDateTime popUpInfo={dateTimePopUp} />
      ) : undefined}
    </>
  );
};

export default Reservation;
