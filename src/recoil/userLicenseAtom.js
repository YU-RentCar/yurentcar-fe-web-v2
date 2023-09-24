const { atom } = require("recoil");

export const userLicenseAtom = atom({
  key: "userLicenseAtom",
  default: {
    kind: "1종 보통",
    number: "00-11-222222-33",
    issuance: "2023-01-01",
    expire: "2033-12-31",
  },
});
