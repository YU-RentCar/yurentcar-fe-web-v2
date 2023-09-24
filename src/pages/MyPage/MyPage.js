import ReservationContainer from "./components/ReservationContainer";
import UserInfoContainer from "./components/UserInfoContainer";

const MyPage = () => {
  return (
    <>
      <div className="w-[1140px] mx-auto mt-[176px]">
        <ReservationContainer /> {/* 예약 대기 정보 */}
        <UserInfoContainer /> {/* 사용자 정보 */}
      </div>
    </>
  );
};

export default MyPage;
