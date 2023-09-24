import { useRecoilValue } from "recoil";
import { userLicenseAtom } from "recoil/userLicenseAtom";
import License from "./License";

const LicenseContainer = () => {
  const licenseInfo = useRecoilValue(userLicenseAtom);
  return (
    <div>
      <License licenseInfo={licenseInfo} />
    </div>
  );
};

export default LicenseContainer;
