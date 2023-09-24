import { useRecoilValue } from "recoil";
import { userLicenseAtom } from "recoil/userLicenseAtom";
import License from "./License";

/**
 * licenseInfo : 사용자 면허 정보
 */
const LicenseContainer = () => {
  const licenseInfo = useRecoilValue(userLicenseAtom);
  return (
    <div>
      <License licenseInfo={licenseInfo} />
    </div>
  );
};

export default LicenseContainer;
