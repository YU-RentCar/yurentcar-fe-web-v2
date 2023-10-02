import DefaultInfo from "./DefaultInfo";
import Alert from "popUp/Alert";
import { alertAtom } from "recoil/alertAtom";
import { useRecoilValue } from "recoil";

const Reservation = () => {
  const alertState = useRecoilValue(alertAtom).state; // Alert 제어
  return (
    <>
      <div className="w-[1140px] mx-auto mt-[176px]">
        {/* 차량 기본 정보 */}
        <DefaultInfo />
      </div>
      {alertState ? <Alert /> : null}
    </>
  );
};

export default Reservation;
