import { atom } from "recoil";

export const resvAtom = atom({
  key: "resvAtom",
  default: {
    period: "05.08(월) 08:00 ~ 05.15(월) 22:00",
    store: "달성군지점",
    car: "그랜저 HG",
    number: "58부 7792",
    drivers: [{ 1: "홍길동" }, { 2: "둘리" }, { 3: "최요하" }],
  },
});
