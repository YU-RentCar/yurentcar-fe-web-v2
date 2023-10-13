import { atom, selector } from "recoil";

export const navStateAtom = atom({
  key: "navStateAtom",
  default: false,
});

export const navStateSelector = selector({
  key: "navStateSelector",
  get: ({ get }) => {
    return get(navStateAtom);
  },
  set: ({ set, get }, newState) => {
    set(navStateAtom, newState);
  },
});
