import ReservationContainer from "./components/ReservationContainer";
import UserInfoContainer from "./components/UserInfoContainer";
import LicenseContainer from "./components/LicenseContainer";
import AlertContainer from "./AlertContainer";

const MyPage = ({ alertState }) => {
  return (
    <>
      <div className="w-[1140px] mx-auto mt-[176px]">
        {/* 예약 대기 정보 */}
        <ReservationContainer />
        {/* 사용자 정보 */}
        <UserInfoContainer />
        {/* 사용자 면허 정보 */}
        <LicenseContainer />
      </div>
      {alertState ? <AlertContainer /> : null}
    </>
  );
};

export default MyPage;
