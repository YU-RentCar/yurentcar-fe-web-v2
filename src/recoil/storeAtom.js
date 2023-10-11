import { atom } from "recoil";

export const storeAtom = atom({
  key: "storeAtom",
  default: {
    gangwon: {
      engName: "gangwon",
      korName: "강원도",
      stores: [],
    },
    gyeongi: {
      engName: "gyeongi",
      korName: "경기도",
      stores: [],
    },
    seoul: {
      engName: "seoul",
      korName: "서울",
      stores: [],
    },
    incheon: {
      engName: "incheon",
      korName: "인천",
      stores: [],
    },
    chungbook: {
      engName: "chungbook",
      korName: "충청북도",
      stores: [],
    },
    chungnam: {
      engName: "chungnam",
      korName: "충청남도",
      stores: [],
    },
    saejong: {
      engName: "saejong",
      korName: "세종",
      stores: [],
    },
    daejeon: {
      engName: "daejeon",
      korName: "대전",
      stores: [],
    },
    gyungbook: {
      engName: "gyungbook",
      korName: "경상북도",
      stores: [],
    },
    daegu: {
      engName: "daegu",
      korName: "대구",
      stores: [],
    },
    jeonbook: {
      engName: "jeonbook",
      korName: "전라북도",
      stores: [],
    },
    jeonnam: {
      engName: "jeonnam",
      korName: "전라남도",
      stores: [],
    },
    gwangju: {
      engName: "gwangju",
      korName: "광주",
      stores: [],
    },
    gyungnam: {
      engName: "gyungnam",
      korName: "경상남도",
      stores: [],
    },
    ulsan: {
      engName: "ulsan",
      korName: "울산",
      stores: [],
    },
    busan: {
      engName: "busan",
      korName: "부산",
      stores: [],
    },
    jeju: {
      engName: "jeju",
      korName: "제주",
      stores: [],
    },
  },
});
