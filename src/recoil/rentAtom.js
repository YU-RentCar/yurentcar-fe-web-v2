import { atom, selector } from "recoil";

export const rentAtom = atom({
  key: "rentAtom",
  default: {
    price: 20000,
    insurance: 0,
    point: 0,
  },
});

export const rentInsuranceSelector = selector({
  key: "rentInsuranceSelector",
  get: ({ get }) => get(rentAtom),
  set: ({ set, get }, newValue) => {
    console.log("insurance", newValue);
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
    console.log("point", newValue);
    const rentInfo = get(rentAtom);
    const tmp = {
      ...rentInfo,
      point: newValue,
    };
    set(rentAtom, tmp);
  },
});
