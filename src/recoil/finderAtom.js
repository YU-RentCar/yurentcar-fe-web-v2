import { atom, selector } from "recoil";

export const finderAtom = atom({
  key: "finderAtom",
  default: {
    province: null,
    store: null,
    startDate: null,
    startTime: null,
    endDate: null,
    endTime: null,
  },
});

export const finderProvinceSelector = selector({
  key: "finderProvinceSelector",
  get: ({ get }) => {
    return get(finderAtom).province;
  },
  set: ({ set, get }, newValue) => {
    const finderInfo = get(finderAtom);
    const temp = {
      ...finderInfo,
      province: newValue,
    };

    set(finderAtom, temp);
  },
});

export const finderStoreSelector = selector({
  key: "finderStoreSelector",
  get: ({ get }) => {
    return get(finderAtom).store;
  },
  set: ({ get, set }, newValue) => {
    const finderInfo = get(finderAtom);
    const temp = {
      ...finderInfo,
      store: newValue,
    };

    set(finderAtom, temp);
  },
});

export const finderDateTimeSelector = selector({
  key: "finderDateTimeSelector",
  get: ({ get }) => {
    const finderInfo = get(finderAtom);
    return {
      startDate: finderInfo.startDate,
      startTime: finderInfo.startTime,
      endDate: finderInfo.endDate,
      endTime: finderInfo.endTime,
    };
  },
  set: ({ get, set }, newValue) => {
    const finderInfo = get(finderAtom);
    const temp = {
      ...finderInfo,
      startDate: newValue.startDate,
      startTime: newValue.startTime,
      endDate: newValue.endDate,
      endTime: newValue.endTime,
    };

    set(finderAtom, temp);
  },
});
