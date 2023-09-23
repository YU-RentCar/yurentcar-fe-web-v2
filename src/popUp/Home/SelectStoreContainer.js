import { useEffect, useState, useRef } from "react";
import SelectStore from "./SelectStore";

const SelectStoreContainer = ({ setIsClicked }) => {
  const storeObj = {
    강원: ["강원점"],
    경기: ["경기점"],
    서울: ["서울점", "점점"],
    인천: [],
    충북: ["강원점"],
    충남: ["경기점"],
    세종: ["서울점", "점점"],
    대전: ["성심당"],
    경북: ["경북점"],
    대구: ["대구점"],
    전북: ["전북점", "점점"],
    전남: ["..?", "두개 뜨는지 체크"],
    광주: ["광주점"],
    경남: ["진주점", "공군훈련소점"],
    울산: [
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
    부산: ["하드코어"],
    제주: ["..."],
  };

  return <SelectStore setIsClicked={setIsClicked} storeObj={storeObj} />;
};

export default SelectStoreContainer;
