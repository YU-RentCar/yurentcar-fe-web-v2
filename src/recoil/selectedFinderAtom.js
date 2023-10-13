import { atom } from "recoil";

export const selectedFinderAtom = atom({
  key: "selectedFinderAtom",
  default: {
    province: null,
    store: null,
    startDate: null,
    startTime: null,
    endDate: null,
    endTime: null,
  },
});
