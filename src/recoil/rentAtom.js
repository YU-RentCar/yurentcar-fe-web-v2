import { atom, selector } from "recoil";

export const rentAtom = atom({
  key: "rentAtom",
  default: {
    carNumber: "",
    startDate: "",
    endDate: "",
    beforePrice: -1,
    afterPrice: -1,
    insurance: -1,
    point: -1,
    drivers: [],
  },
});

export const rentInfoSelector = selector({
  key: "rentDateSelector",
  get: ({ get }) => get(rentAtom),
  set: ({ set, get }, newValue) => {
    const rentInfo = get(rentAtom);
    const tmp = {
      ...rentInfo,
      carNumber: newValue.carNumber,
      startDate: newValue.startDate,
      endDate: newValue.endDate,
      beforePrice: newValue.beforePrice,
      afterPrice: newValue.afterPrice,
    };
    set(rentAtom, tmp);
  },
});

export const rentInsuranceSelector = selector({
  key: "rentInsuranceSelector",
  get: ({ get }) => get(rentAtom),
  set: ({ set, get }, newValue) => {
    const rentInfo = get(rentAtom);
    const tmp = {
      ...rentInfo,
      insurance: newValue,
    };
    set(rentAtom, tmp);
  },
});

export const rentPointSelector = selector({
  key: "rentPointSelector",
  get: ({ get }) => get(rentAtom),
  set: ({ set, get }, newValue) => {
    const rentInfo = get(rentAtom);
    const tmp = {
      ...rentInfo,
      point: newValue,
    };
    set(rentAtom, tmp);
  },
});

export const driversSelector = selector({
  key: "driversSelector",
  get: ({ get }) => get(rentAtom),
  set: ({ set, get }, newName) => {
    const rentInfo = get(rentAtom);
    const newDrivers = [...rentInfo.drivers];
    const tmpDriver = {
      name: newName.driver["이름"],
      birthdate: newName.driver["생년월일"],
      phoneNumber: newName.driver["전화번호"],
      licenseType: newName.driver["면허 종류"],
      licenseNumber: newName.driver["면허 번호"],
      issueDate: newName.drivier["발급 일자"],
      expirationDate: newName.driver["만료 일자"],
    };
    newDrivers.splice(newName.idx, 1, tmpDriver);
    const tmp = {
      ...rentInfo,
      drivers: [...newDrivers],
    };
    set(rentAtom, tmp);
  },
});
