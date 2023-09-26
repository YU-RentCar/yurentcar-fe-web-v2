import { atom } from "recoil";

export const carAtom = atom({
  key: "carAtom",
  default: {
    car: "그랜저 HG",
    number: "12삼 4567",
    odo: 50000,
    price: 200000,
  },
});
