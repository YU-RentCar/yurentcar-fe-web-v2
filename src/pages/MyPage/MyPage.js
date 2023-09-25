import Reservation from "./Reservation";
import UserInfo from "./UserInfo";
import PreferOption from "./PreferOption";
import License from "./License";
import Account from "./Account";
import Quit from "./Quit";
import Alert from "./Alert";
import { usePopUp } from "utils/usePopUp";
import { alertAtom } from "recoil/alertAtom";
import { useRecoilValue } from "recoil";

const MyPage = () => {
  const alertState = useRecoilValue(alertAtom).state; // Alert 제어
  const popUpInfo = usePopUp("MyPage/Quit"); // 팝업 제어
  return (
    <>
      <div className="w-[1140px] mx-auto mt-[176px]">
        {/* 예약 대기 정보 */}
        <Reservation />
        {/* 사용자 정보 */}
        <UserInfo />
        {/* 사용자 선호 차량 옵션 */}
        <PreferOption />
        {/* 사용자 면허 정보 */}
        <License />
        {/* 사용자 계정 관리 */}
        <Account />
      </div>
      {alertState ? <Alert /> : null}
      {popUpInfo.isClicked ? <Quit /> : null}
    </>
  );
};

export default MyPage;
