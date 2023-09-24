import React from "react";
import { Checkbox, Input } from "@material-tailwind/react";

const PreferOption = ({
  preferOption,
  userInfo,
  setUserInfo,
  setAlertState,
}) => {
  /* 변경 정보 수집 함수 */
  const gatherInfo = () => {
    let newPrefer = {
      carSizes: [],
      minCount: 3,
      oilTypes: [],
      transmissions: [],
    };
    /* 정보 수집 */
    Object.keys(newPrefer).forEach((v) => {
      if (v !== "minCount") {
        preferOption[v].forEach(
          (val) => newPrefer[v].push(document.getElementById(val).checked) // 체크 여부 확인
        );
      }
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
              setAlertState({
                msg: "최소 인원 수를 입력해주세요.",
                state: true,
              });
              setTimeout(() => setAlertState({ msg: "", state: false }), 2000);
            } else {
              setAlertState({ msg: "옵션을 변경하였습니다.", state: true });
              setTimeout(() => setAlertState({ msg: "", state: false }), 2000);
              setUserInfo(gatherInfo());
            }
          }}
        >
          변경 저장
        </button>
      </div>
      {/* 차량 크기 */}
      <ContentBox
        title="차량 크기"
        content={preferOption.carSizes}
        userPrefer={userInfo.prefer.carSizes}
      />
      {/* 유종 */}
      <ContentBox
        title="유종"
        content={preferOption.oilTypes}
        userPrefer={userInfo.prefer.oilTypes}
      />
      {/* 구동기 */}
      <ContentBox
        title="구동기"
        content={preferOption.transmissions}
        userPrefer={userInfo.prefer.transmissions}
      />
      {/* 최소 인원 */}
      <div className="w-[1010px] h-40 bg-white rounded-2xl flex items-center px-8 mt-7">
        <div className="flex flex-col justify-between w-full h-24 text-2xl font-bold">
          <div className="text-slate-400">최소 인원</div>
          <div className="flex items-center w-48 h-full mx-auto">
            <Input
              id="minCount"
              type="number"
              className="!text-3xl !font-bold !text-black !h-[65px]"
              defaultValue={userInfo.prefer.minCount}
              label="숫자만 입력가능"
              labelProps={{ className: "border-black text-lg" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/* 컨텐츠들을 보여줄 박스 */
const ContentBox = ({ title, content, userPrefer }) => {
  return (
    <div className="w-[1010px] h-40 bg-white rounded-2xl flex items-center px-8 mt-7">
      <div className="flex flex-col justify-between w-full h-24 text-2xl font-bold">
        <div className="text-slate-400">{title}</div>
        {/* 닉네임이라면 변경 버튼을 추가 */}
        <div className="flex items-center mx-auto">
          {content.map((v, i) => {
            return (
              <div className="w-32 mx-4">
                <Checkbox
                  id={v}
                  label={v}
                  ripple={true}
                  labelProps={{ className: "font-semibold text-black" }}
                  defaultChecked={userPrefer[i]}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PreferOption;
