import { atom, selector } from "recoil";

export const userAtom = atom({
  key: "userAtom",
  default: {
    name: "홍길동",
    nickname: "손씻은지도벌써백년",
    phone: "010-0000-0000",
    email: "honggilding@naver.com",
    license: {
      kind: "1종 보통",
      number: "00-11-222222-33",
      issuance: "2023-01-01",
      expire: "2033-12-31",
    },
    prefer: {
      carSizes: [true, false, true, false],
      minCount: 3,
      oilTypes: [false, true, false, true],
      transmissions: [true, false],
    },
  },
});

export const userSelector = selector({
  key: "userSelector",
  get: ({ get }) => get(userAtom),
  set: ({ set, get }, newValue) => {
    const userInfo = get(userAtom);
    const tmp = {
      ...userInfo,
      nickname: newValue,
    };
    set(userAtom, tmp);
  },
});

export const userPreferSelector = selector({
  key: "userPreferSelector",
  get: ({ get }) => get(userAtom),
  set: ({ set, get }, newPreferOption) => {
    const userInfo = get(userAtom);
    const tmp = {
      ...userInfo,
      prefer: { ...newPreferOption },
    };
    set(userAtom, tmp);
  },
});
