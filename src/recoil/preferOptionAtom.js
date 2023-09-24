const { atom } = require("recoil");

export const preferOptionAtom = atom({
  key: "preferOptionAtom",
  default: {
    carSizes: ["소형", "준중형", "중형", "대형"],
    oilTypes: ["휘발유", "경유", "소수", "전기"],
    transmissions: ["수동", "자동"],
  },
});
