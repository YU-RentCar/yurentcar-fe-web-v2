import { atom } from "recoil";

export const userAtom = atom({
  key: "userAtom",
  default: {
    name: "홍길동",
  },
});
