import { useRecoilValue } from "recoil";
import MyPage from "./MyPage";
import { alertAtom } from "recoil/alertAtom";

/**
 * alertState : 알림창 상태
 */
const MyPageContainer = () => {
  const alertState = useRecoilValue(alertAtom).state;
  return (
    <div>
      <MyPage alertState={alertState}></MyPage>
    </div>
  );
};

export default MyPageContainer;
