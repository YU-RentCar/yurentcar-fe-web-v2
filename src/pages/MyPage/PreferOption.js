import { useRecoilValue, useRecoilState } from "recoil";
import { userPreferSelector } from "recoil/userAtom";
import { preferOptionAtom } from "recoil/preferOptionAtom";
import { useAlert } from "utils/useAlert";
import PreferContent from "./PreferContent";
import { useState } from "react";

const PreferOption = () => {
  const preferOption = useRecoilValue(preferOptionAtom); // 선호 옵션 데이터
  const [userInfo, setUserInfo] = useRecoilState(userPreferSelector); // 사용자의 선호 옵션 정보
  const [titles, setTitles] = useState(["차량 크기", "유종", "구동기"]); // 옵션 타이틀
  const alert = useAlert(); // Alert 제어
  /* 변경 정보 수집 함수 */
  const gatherInfo = () => {
    let newPrefer = {
      carSizes: [],
      oilTypes: [],
      transmissions: [],
    };
    /* 정보 수집 */
    Object.keys(newPrefer).forEach((v) => {
      preferOption[v].forEach((val) =>
        newPrefer[v].push(document.getElementById(val).checked)
      ); // 체크 여부 확인
    });
    newPrefer.minCount = document.getElementById("minCount").value;
    return newPrefer;
  };
  return (
    <div className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl">
      {/* 타이틀 */}
      <div className="w-[1010px] h-[70px] flex justify-between items-center">
        <span className="text-blue-800 text-[45px] font-extrabold">
          선호 차량
        </span>
        <button
          className="text-xl font-semibold w-44 h-14 rounded-2xl bg-amber-400"
          onClick={() => {
            if (document.getElementById("minCount").value.trim() === "") {
              // 최소 인원 수가 입력되지않은 경우
              alert.onAndOff("최소 인원 수를 입력해주세요.");
            } else {
              alert.onAndOff("옵션을 변경하였습니다.");
              setUserInfo(gatherInfo());
            }
          }}
        >
          변경 저장
        </button>
      </div>
      {/* 차량 크기, 유종, 구동기 */}
      {Object.keys(preferOption).map((v, i) => {
        return (
          <PreferContent
            title={titles[i]}
            content={preferOption[v]}
            userPrefer={userInfo.prefer[v]}
            key={i}
          />
        );
      })}
      {/* 최소 인원 */}
      <PreferContent title="최소 인원" userInfo={userInfo} />
    </div>
  );
};

export default PreferOption;
