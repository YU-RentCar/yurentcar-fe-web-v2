import { atom, selector } from "recoil";

export const userAtom = atom({
  key: "userAtom",
  default: {
    name: "홍길동",
    nickname: "손씻은지도벌써백년",
    phone: "010-0000-0000",
    email: "honggilding@naver.com",
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
