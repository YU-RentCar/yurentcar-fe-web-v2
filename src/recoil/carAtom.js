import { atom } from "recoil";

export const carAtom = atom({
  key: "carAtom",
  default: {
    car: "그랜저 HG",
    number: "12삼 4567",
    odo: 50000,
    price: 200000,
    oil: "가솔린",
    release: "2016년",
    upload: "2018년",
    passengers: "5명",
    transmission: "자동",
    brand: "현대",
    domestic: "국산",
  },
});
