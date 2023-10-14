import { atom, selector } from "recoil";

export const rentAtom = atom({
  key: "rentAtom",
  default: {
    beforePrice: -1,
    afterPrice: -1,
    insurance: -1,
    point: -1,
    drivers: [],
  },
});

export const rentBeforeSelector = selector({
  key: "rentBeforeSelector",
  get: ({ get }) => get(rentAtom),
  set: ({ set, get }, newValue) => {
    const rentInfo = get(rentAtom);
    const tmp = {
      ...rentInfo,
      beforePrice: newValue,
    };
    set(rentAtom, tmp);
  },
});
export const rentAfterSelector = selector({
  key: "rentAfterSelector",
  get: ({ get }) => get(rentAtom),
  set: ({ set, get }, newValue) => {
    const rentInfo = get(rentAtom);
    const tmp = {
      ...rentInfo,
      afterPrice: newValue,
    };
    set(rentAtom, tmp);
  },
});

export const rentInsuranceSelector = selector({
  key: "rentInsuranceSelector",
  get: ({ get }) => get(rentAtom),
  set: ({ set, get }, newValue) => {
    const rentInfo = get(rentAtom);
    const tmp = {
      ...rentInfo,
      insurance: newValue,
    };
    set(rentAtom, tmp);
  },
});

export const rentPointSelector = selector({
  key: "rentPointSelector",
  get: ({ get }) => get(rentAtom),
  set: ({ set, get }, newValue) => {
    const rentInfo = get(rentAtom);
    const tmp = {
      ...rentInfo,
      point: newValue,
    };
    set(rentAtom, tmp);
  },
});

export const driversSelector = selector({
  key: "driversSelector",
  get: ({ get }) => get(rentAtom),
  set: ({ set, get }, newName) => {
    const rentInfo = get(rentAtom);
    const newDrivers = [...rentInfo.drivers];
    newDrivers.splice(newName.idx, 1, newName.name);
    const tmp = {
      ...rentInfo,
      drivers: [...newDrivers],
    };
    set(rentAtom, tmp);
  },
});
