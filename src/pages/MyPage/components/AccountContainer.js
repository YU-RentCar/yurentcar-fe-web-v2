import Account from "./Account";
import { usePopUp } from "utils/popUp/usePopUp";

/**
 * popUpInfo : 팝업 컨트롤러
 */
const AccountContainer = () => {
  const popUpInfo = usePopUp("MyPage/Quit");
  return (
    <div>
      <Account popUpInfo={popUpInfo} />
    </div>
  );
};

export default AccountContainer;
