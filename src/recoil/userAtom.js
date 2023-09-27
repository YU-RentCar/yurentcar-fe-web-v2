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
    point: 10000,
    pointRecord: [
      {
        date: "2023.05.03",
        reason: "사유1",
        type: 0,
        ammount: 500,
      },
      {
        date: "2023.05.04",
        reason: "사유2",
        type: 1,
        ammount: 500,
      },
      {
        date: "2023.05.05",
        reason: "사유3",
        type: 0,
        ammount: 500,
      },
    ],
    resvRecord: [
      {
        car: "그랜저 HG",
        number: "12삼4567",
        odo: 50000,
        period: "05.08(월) 08:00 ~ 05.15(월) 22:00",
        store: "달성군지점",
        price: 200000,
      },
      {
        car: "그랜저 HG",
        number: "12삼4567",
        odo: 50000,
        period: "05.08(월) 08:00 ~ 05.15(월) 22:00",
        store: "달성군지점",
        price: "200000",
      },
      {
        car: "그랜저 HG",
        number: "12삼4567",
        odo: 50000,
        period: "05.08(월) 08:00 ~ 05.15(월) 22:00",
        store: "달성군지점",
        price: "200000",
      },
    ],
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
