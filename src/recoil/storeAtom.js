import { atom } from "recoil";

export const storeAtom = atom({
  key: "storeAtom",
  default: {
    gangwon: {
      engName: "gangwon",
      korName: "강원",
      stores: ["강원점"],
    },
    gyeongi: {
      engName: "gyeongi",
      korName: "경기",
      stores: ["경기점"],
    },
    seoul: {
      engName: "seoul",
      korName: "서울",
      stores: ["서울점", "점점"],
    },
    incheon: {
      engName: "incheon",
      korName: "인천",
      stores: [],
    },
    chungbook: {
      engName: "chungbook",
      korName: "충북",
      stores: ["강원점"],
    },
    chungnam: {
      engName: "chungnam",
      korName: "충남",
      stores: ["경기점"],
    },
    saejong: {
      engName: "saejong",
      korName: "세종",
      stores: ["서울점", "점점"],
    },
    daejeon: {
      engName: "daejeon",
      korName: "대전",
      stores: ["성심당"],
    },
    gyungbook: {
      engName: "gyungbook",
      korName: "경북",
      stores: ["경북점"],
    },
    daegu: {
      engName: "daegu",
      korName: "대구",
      stores: ["대구점"],
    },
    jeonbook: {
      engName: "jeonbook",
      korName: "전북",
      stores: ["전북점", "점점"],
    },
    jeonnam: {
      engName: "jeonnam",
      korName: "전남",
      stores: ["..?", "두개 뜨는지 체크"],
    },
    gwangju: {
      engName: "gwangju",
      korName: "광주",
      stores: ["광주점"],
    },
    gyungnam: {
      engName: "gyungnam",
      korName: "경남",
      stores: ["진주점", "공군훈련소점"],
    },
    ulsan: {
      engName: "ulsan",
      korName: "울산",
      stores: [
        "하나",
        "둘",
        "셋",
        "넷",
        "다섯",
        "여섯",
        "일곱",
        "여덟",
        "아홉",
        "열",
      ],
    },
    busan: {
      engName: "busan",
      korName: "부산",
      stores: ["하드코어"],
    },
    jeju: {
      engName: "jeju",
      korName: "제주",
      stores: ["..."],
    },
  },
});
