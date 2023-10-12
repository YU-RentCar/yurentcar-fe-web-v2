import { atom, selector } from "recoil";

export const reviewTargetAtom = atom({
  key: "reviewTargetAtom",
  default: {},
});

export const rtSelector = selector({
  key: "rtSelector",
  get: ({ get }) => get(reviewTargetAtom),
  set: ({ set, get }, newValue) => {
    const tmp = { ...newValue };
    set(reviewTargetAtom, tmp);
  },
});
