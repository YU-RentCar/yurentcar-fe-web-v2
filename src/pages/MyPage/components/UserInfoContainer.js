import { useRecoilState } from "recoil";
import { userSelector } from "recoil/userAtom";
import UserInfo from "./UserInfo";

/**
 * userInfo : 사용자 정보
 */
const UserInfoContainer = () => {
  const [userInfo, setUserInfo] = useRecoilState(userSelector);
  return (
    <div>
      <UserInfo userInfo={userInfo} setUserInfo={setUserInfo}></UserInfo>
    </div>
  );
};

export default UserInfoContainer;
