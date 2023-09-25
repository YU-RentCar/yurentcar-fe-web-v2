import { preferOptionAtom } from "recoil/preferOptionAtom";
import PreferOption from "./PreferOption";
import { useRecoilValue, useRecoilState } from "recoil";
import { userPreferSelector } from "recoil/userAtom";
import { alertSelector } from "recoil/alertAtom";

const PreferOptionContainer = () => {
  const preferOption = useRecoilValue(preferOptionAtom);
  const [userInfo, setUserInfo] = useRecoilState(userPreferSelector);
  const [alertState, setAlertState] = useRecoilState(alertSelector);
  return (
    <div>
      <PreferOption
        preferOption={preferOption}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        setAlertState={setAlertState}
      />
    </div>
  );
};

export default PreferOptionContainer;
