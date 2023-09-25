import ReservationContainer from "./components/ReservationContainer";
import UserInfoContainer from "./components/UserInfoContainer";
import AlertContainer from "./AlertContainer";

const MyPage = ({ alertState }) => {
  return (
    <>
      <div className="w-[1140px] mx-auto mt-[176px]">
        {/* 예약 대기 정보 */}
        <ReservationContainer />
        {/* 사용자 정보 */}
        <UserInfoContainer />
      </div>
      {alertState ? <AlertContainer /> : null}
    </>
  );
};

export default MyPage;
