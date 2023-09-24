import { useRecoilState } from "recoil";
import { userSelector } from "recoil/userAtom";
import { alertSelector } from "recoil/alertAtom";
import UserInfo from "./UserInfo";

/**
 * userInfo : 사용자 정보
 * alertState : 알림창 상태
 */
const UserInfoContainer = () => {
  const [userInfo, setUserInfo] = useRecoilState(userSelector);
  const [alertState, setAlertState] = useRecoilState(alertSelector);

  return (
    <div>
      <UserInfo
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        setAlertState={setAlertState}
      ></UserInfo>
    </div>
  );
};

export default UserInfoContainer;
