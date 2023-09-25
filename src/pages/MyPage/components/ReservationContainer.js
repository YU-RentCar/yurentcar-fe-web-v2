import { useRecoilValue } from "recoil";
import { userAtom } from "recoil/userAtom";
import { resvAtom } from "recoil/resvAtom";
import Reservation from "./Reservation";
/**
 * userInfo : 사용자 정보
 * resvInfo : 예약 정보
 */
const ReservationContainer = () => {
  const userInfo = useRecoilValue(userAtom);
  const resvInfo = useRecoilValue(resvAtom);

  return (
    <div>
      <Reservation userInfo={userInfo} resvInfo={resvInfo}></Reservation>
    </div>
  );
};

export default ReservationContainer;
