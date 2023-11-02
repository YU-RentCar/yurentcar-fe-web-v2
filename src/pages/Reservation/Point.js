import { useRecoilState } from "recoil";
import { rentPointSelector } from "recoil/rentAtom";
import { useState, useEffect } from "react";
import { getUserPoint } from "api/reservationAxios";
import React from "react";

const Point = React.memo(() => {
  const [rentPoint, setRentPoint] = useRecoilState(rentPointSelector); // 포인트 사용 양 저장
  const [userPoint, setUserPoint] = useState(0); // 사용자 보유 포인트
  useEffect(() => {
    getUserPoint()
      .then((response) => {
        // 포인트 조회
        setUserPoint(response.data);
      })
      .catch((error) =>
        console.log("예약 / 포인트조회에러 : ", error.response)
      );
  }, []);
  return (
    <div
      className="flex flex-col items-center w-full py-8 mt-12 mb-40 bg-sky-50 rounded-2xl shadow-figma"
      id="Reservation/Point"
    >
      {/* 타이틀 */}
      <div className="w-[700px] h-[35px] flex justify-between items-center text-blue-800 text-[30px] font-bold">
        포인트 사용
      </div>
      <div className="w-[750px] h-28 flex justify-between items-center mt-4">
        {/* 보유 포인트 */}
        <div className="w-[350px] h-full rounded-2xl bg-white flex flex-col justify-around pl-4 py-2">
          <span className="text-lg font-semibold text-slate-600">
            현재 포인트
          </span>
          <span className="text-2xl font-bold">{userPoint}P</span>
        </div>
        {/* 포인트 사용 */}
        <div className="w-[350px] h-full rounded-2xl bg-white flex flex-col justify-around items-center py-2">
          <div className="flex w-[330px] items-center justify-between text-lg font-semibold">
            <span className="text-slate-600">사용 포인트</span>
            <span id="ment" className="text-red-500"></span>
          </div>
          <input
            type="number"
            className="w-[280px] h-10 text-xl text-black font-bold border-2 border-black rounded-lg px-2 placeholder:text-lg"
            placeholder="사용할 포인트를 입력해주세요."
            onChange={(e) => {
              // 입력된 값에 따른 멘트 변화
              let ment = document.getElementById("ment");
              if (e.target.value === "" || Number(e.target.value) < 0) {
                ment.textContent = "0 이상의 숫자를 입력해주세요";
                setRentPoint(-1);
              } else if (Number(e.target.value) > userPoint) {
                ment.textContent = "보유 포인트를 초과할 수 없습니다";
                setRentPoint(-1);
              } else {
                ment.textContent = "";
                setRentPoint(Number(e.target.value));
              }
            }}
          ></input>
        </div>
      </div>
    </div>
  );
});

export default Point;
