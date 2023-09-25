import { useRecoilValue } from "recoil";
import { userAtom } from "recoil/userAtom";
import License from "./License";

/**
 * licenseInfo : 사용자 면허 정보
 */
const LicenseContainer = () => {
  const licenseInfo = useRecoilValue(userAtom).license;
  return (
    <div>
      <License licenseInfo={licenseInfo} />
    </div>
  );
};

export default LicenseContainer;
