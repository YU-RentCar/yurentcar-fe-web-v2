import { useRecoilValue } from "recoil";
import { preferOptionAtom } from "recoil/preferOptionAtom";
import { useAlert } from "utils/useAlert";
import { useEffect, useState } from "react";
import { changePreferOption, getPreferOption } from "api/myPageAxios";
import PreferContent from "./PreferContent";

const PreferOption = () => {
  const preferOption = useRecoilValue(preferOptionAtom); // 선호 옵션 데이터
  const [userPrefer, setUserPrefer] = useState({
    // 초기 정보
    carSizes: [false, false, false, false],
    oilTypes: [false, false, false, false],
    transmissions: [false, false],
    minCount: 0,
  }); // 사용자의 선호 옵션 정보
  const [titles, setTitles] = useState(["차량 크기", "유종", "구동기"]); // 옵션 타이틀
  const alert = useAlert(); // Alert 제어
  /* 변경 정보 수집 함수 */
  const gatherInfo = () => {
    const newPrefer = {
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
  useEffect(() => {
    getPreferOption() // 사용자 선호 옵션 api
      .then((response) => {
        console.log("마이페이지 / 선호옵션 : ", response.data);
        setUserPrefer(response.data);
      })
      .catch((error) =>
        console.log("마이페이지 / 선호옵션에러 : ", error.response)
      );
  }, []);
  return (
    <div className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl shadow-figma">
      {/* 타이틀 */}
      <div className="w-[1010px] h-[70px] flex justify-between items-center">
        <span className="text-blue-800 text-[45px] font-extrabold">
          선호 차량
        </span>
        <button
          className="text-xl font-semibold w-44 h-14 rounded-2xl bg-amber-400"
          onClick={async () => {
            const minCount = document.getElementById("minCount").value;
            if (minCount.trim() === "") {
              alert.onAndOff("최소 인원 수를 입력해주세요");
            } else if (Number(minCount) <= 0) {
              alert.onAndOff("1명 이상 입력해주세요");
            } else {
              const newPrefer = gatherInfo();
              // 사용자 선호 옵션 변경 api
              await changePreferOption(newPrefer)
                .then((response) => {
                  console.log("마이페이지 / 선호옵션변경 : ", response.data);
                  alert.onAndOff("옵션을 변경하였습니다");
                  setUserPrefer(newPrefer);
                })
                .catch((error) =>
                  console.log(
                    "마이페이지 / 선호옵션변경에러 : ",
                    error.response
                  )
                );
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
            userPrefer={userPrefer[v]}
            key={i}
          />
        );
      })}
      {/* 최소 인원 */}
      <PreferContent title="최소 인원" minCount={userPrefer.minCount} />
    </div>
  );
};

export default PreferOption;
