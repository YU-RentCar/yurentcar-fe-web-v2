import { getUserInfo } from "api/reservationAxios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { driversSelector } from "recoil/rentAtom";
import { useAlert } from "utils/useAlert";
import React from "react";
import dayjs from "dayjs";

const Open = React.memo(
  ({
    index,
    info,
    cardStatus,
    setCardStatus,
    drivers,
    setDrivers,
    isInclude,
    setIsInclude,
  }) => {
    const alert = useAlert(); // Alert 제어
    const [newDriver, setNewDriver] = useRecoilState(driversSelector); // 운전자 이름 저장
    // 입력 양식 placeholder
    const [placeholders, setPlaceholders] = useState([
      "이름을 입력해주세요",
      "YYYY-MM-DD",
      "010-0000-0000",
      "",
      "",
      "",
      "",
    ]);
    return (
      <div className="w-[1100px] rounded-2xl bg-white pb-6 pt-4 mt-4 relative">
        {/* 항목 수만큼 생성 */}
        {Object.keys(info).map((v, i) => {
          return (
            <div
              key={i}
              className="w-[1000px] h-[105px] flex flex-col justify-between mx-auto mt-6"
            >
              {/* 항목 타이틀 */}
              <span className="text-2xl font-bold text-slate-600">{v}</span>
              {/* 컨텐츠 입력 */}
              <input
                type="text"
                className="w-full h-16 px-4 text-2xl font-bold border-2 border-black rounded-2xl"
                value={info[v]}
                placeholder={placeholders[i]}
                onChange={(e) => {
                  // 새로운 내용이 입력되면 수정
                  const tmp = {
                    ...info,
                    [v]: e.target.value,
                  }; // 해당 객체의 정보 변경
                  const tmpDrivers = [...drivers];
                  tmpDrivers.splice(index, 1, tmp); // 변경된 객체로 수정
                  setDrivers([...tmpDrivers]);
                  if (i === 0)
                    // 변경된 이름으로 atom 수정
                    setNewDriver({ name: e.target.value, idx: index });
                }}
              />
            </div>
          );
        })}
        <div className="w-[330px] h-12 flex justify-between items-center absolute right-0 top-0 mr-12 mt-4">
          {/* 사용자 정보 가져오기 버튼 */}
          <button
            className="w-[160px] h-full rounded-2xl bg-amber-300 font-bold text-xl shadow-figma"
            onClick={async () => {
              if (isInclude.state)
                alert.onAndOff(
                  `이미 사용자의 정보를 등록하였습니다 (${
                    isInclude.index + 1
                  }번째)`
                );
              else {
                await getUserInfo()
                  .then((response) => {
                    console.log("예약 / 사용자조회 : ", response.data);
                    // 사용자의 정보 채워넣기 + 면허 정보는 더미 데이터
                    const tmp = {
                      이름: response.data.name,
                      //생년월일: dayjs(response.data.birth).format("YYYY-MM-DD"),
                      생년월일: "1999-03-13",
                      전화번호: response.data.phoneNumber,
                      "면허 종류": "1종 보통",
                      "면허 번호": "00-11-222222-33",
                      "발급 일자": "2023-01-01",
                      "만료 일자": "2033-12-31",
                    }; // 해당 객체의 정보 변경
                    const tmpDrivers = [...drivers];
                    tmpDrivers.splice(index, 1, tmp); // 변경된 객체로 수정
                    setDrivers([...tmpDrivers]);
                    setIsInclude({ state: true, index: index });
                  })
                  .catch((error) =>
                    console.log("예약 / 사용자조회에러 : ", error.response)
                  );
              }
            }}
          >
            사용자와 동일
          </button>
          {/* 카드 접기 버튼 */}
          <button
            className="w-[140px] h-full rounded-2xl bg-blue-400 font-bold text-xl text-white shadow-figma"
            onClick={() => {
              const tmp = [...cardStatus];
              tmp.splice(index, 1, false); // 해당 카드의 상태를 false로 바꾸기
              setCardStatus([...tmp]);
            }}
          >
            카드 접기
          </button>
        </div>
      </div>
    );
  }
);
export default Open;
