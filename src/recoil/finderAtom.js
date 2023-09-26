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

export const finderStartSelector = selector({
  key: "finderStartSelector",
  get: ({ get }) => {
    const finderInfo = get(finderAtom);
    return [finderInfo.startDate, finderInfo.startTime];
  },
  set: ({ get, set }, newValue) => {
    const finderInfo = get(finderAtom);
    const [startDate, startTime] = newValue;
    const temp = {
      ...finderInfo,
      startDate: startDate,
      startTime: startTime,
    };

    set(finderAtom, temp);
  },
});

export const finderEndSelector = selector({
  key: "finderEndSelector",
  get: ({ get }) => {
    const finderInfo = get(finderAtom);
    return [finderInfo.endDate, finderInfo.endTime];
  },
  set: ({ get, set }, newValue) => {
    const finderInfo = get(finderAtom);
    const [endDate, endTime] = newValue;
    const temp = {
      ...finderInfo,
      endDate: endDate,
      endTime: endTime,
    };

    set(finderAtom, temp);
  },
});
