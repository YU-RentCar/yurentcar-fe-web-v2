import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { rentInsuranceSelector } from "recoil/rentAtom";

const Insurance = () => {
  const [rentIns, setRentIns] = useRecoilState(rentInsuranceSelector); // 보험 금액 저장
  const [contents, setContents] = useState({
    무보험: ["전액부담", "+0원"],
    "일반 자차": ["30만원 부담", "+15,000원"],
    "완전 자차": ["부담금 면제", "+30,000원"],
  }); // 보험 정보
  const [ins, setIns] = useState(-1); // 선택한 보험
  function cancle(insurance) {
    // 선택 취소에 따른 스타일 변경
    insurance.classList.remove("bg-sky-600", "shadow-figma");
    insurance.classList.add("bg-sky-200");
    insurance.childNodes[0].classList.remove("text-white");
    insurance.childNodes[0].classList.add("text-blue-800");
    insurance.childNodes[1].classList.remove("text-white");
  }
  function choice(insurance) {
    // 새로운 보험 선택에 따른 스타일 변경
    insurance.classList.remove("bg-sky-200");
    insurance.classList.add("bg-sky-600", "shadow-figma");
    insurance.childNodes[0].classList.add("text-white");
    insurance.childNodes[0].classList.remove("text-blue-800");
    insurance.childNodes[1].classList.add("text-white");
  }
  useEffect(() => {
    const insurances = document.getElementsByName("ins");
    // 각 보험들에 click 이벤트 추가
    insurances.forEach((v, i) => {
      v.addEventListener("click", () => {
        if (ins === -1) choice(v);
        else if (i !== ins) {
          cancle(insurances[ins]); // 기존 보험 선택 취소
          choice(v); // 새로운 보험 선택
        }
        setIns(i);
        setRentIns(
          Number(contents[Object.keys(contents)[i]][1].replace(/[원+,]/g, ""))
        );
      });
    });
  }, [ins]);
  return (
    <div
      className="flex flex-col items-center w-full h-[450px] pt-8 mt-12 bg-sky-50 rounded-2xl shadow-figma"
      id="Reservation/Insurance"
    >
      {/* 타이틀 */}
      <div className="w-[700px] h-[35px] flex justify-between items-center text-blue-800 text-[30px] font-bold">
        차량 종합 보험
      </div>
      {/* 보험 정보 */}
      <div className="w-[750px] h-[360px] mt-4 rounded-2xl bg-white flex justify-around items-center">
        {Object.keys(contents).map((v, i) => {
          return (
            <div
              key={i}
              name="ins"
              className="w-[230px] h-[340px] rounded-lg bg-sky-200 flex flex-col justify-around items-center"
            >
              <span className="text-2xl font-extrabold text-blue-800">{v}</span>
              <div className="text-lg font-bold text-center">
                {contents[v][0]}
                <br />
                <br />
                {contents[v][1]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Insurance;
