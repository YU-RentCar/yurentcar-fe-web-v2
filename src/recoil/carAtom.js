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
    size: "중형",
    repair: [
      {
        date: "2022.05.07",
        title: "냉각수 교체",
        content: "사설 수리 업체 경산점에서 냉각수 교체(B1000H)",
      },
      {
        date: "2022.11.14",
        title: "타이어 교체",
        content: "타이어 교체",
      },
      {
        date: "2023.03.17",
        title: "엔진오일 교체",
        content: "엔진오일 교체",
      },
    ],
    accident: [
      {
        date: "2022.05.07",
        title: "냉각수 펌프 터짐",
        content: "냉각수 펌프 터짐",
      },
      {
        date: "2022.11.14",
        title: "전봇대 들이받음",
        content: "영남대학교 입구 전봇대 들이받음",
      },
      {
        date: "2023.03.17",
        title: "침수",
        content: "영남대학교 남매지로 돌진",
      },
    ],
  },
});
