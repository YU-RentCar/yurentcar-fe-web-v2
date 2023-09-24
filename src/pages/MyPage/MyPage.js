import ReservationContainer from "./components/ReservationContainer";
import UserInfoContainer from "./components/UserInfoContainer";
import LicenseContainer from "./components/LicenseContainer";
import AlertContainer from "./AlertContainer";
import AccountContainer from "./components/AccountContainer";
import { usePopUp } from "utils/popUp/usePopUp";
import Quit from "./Quit";

const MyPage = ({ alertState }) => {
  const popUpInfo = usePopUp("MyPage/Quit");
  return (
    <>
      <div className="w-[1140px] mx-auto mt-[176px]">
        {/* 예약 대기 정보 */}
        <ReservationContainer />
        {/* 사용자 정보 */}
        <UserInfoContainer />
        {/* 사용자 면허 정보 */}
        <LicenseContainer />
        {/* 사용자 계정 관리 */}
        <AccountContainer />
      </div>
      {alertState ? <AlertContainer /> : null}
      {popUpInfo.isClicked ? <Quit /> : null}
    </>
  );
};

export default MyPage;
