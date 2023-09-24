import { alertAtom } from "recoil/alertAtom";
import Alert from "./Alert";
import { useRecoilValue } from "recoil";

/**
 * alertMsg : 알림창 메시지
 */
const AlertContainer = () => {
  const alertMsg = useRecoilValue(alertAtom).msg;

  return (
    <div>
      <Alert message={alertMsg} />
    </div>
  );
};

export default AlertContainer;
