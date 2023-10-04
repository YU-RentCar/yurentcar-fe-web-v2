import Close from "./Close";
import Open from "./Open";
import { useState } from "react";

const Drivers = () => {
  // 운전자 카드 상태 true : 펼쳐짐, false : 접힘
  const [cardStatus, setCardStatus] = useState([false]);
  // 운전자 정보
  const [drivers, setDrivers] = useState([
    {
      이름: "홍길동",
      생년월일: "",
      전화번호: "",
      "면허 종류": "",
      "면허 번호": "",
      "발급 일자": "",
      "만료 일자": "",
    },
  ]);
  // 운전자 추가
  const addDriver = function () {
    const tmp = [...drivers];
    tmp.push({
      // 기본 정보
      이름: "이름을 입력해주세요",
      생년월일: "",
      전화번호: "",
      "면허 종류": "",
      "면허 번호": "",
      "발급 일자": "",
      "만료 일자": "",
    });
    setDrivers([...tmp]);
  };
  // 운전자 삭제
  const subDriver = function (idx) {
    const tmp = [...drivers];
    if (tmp.length === 1) console.log("at least one driver should be exist");
    else {
      tmp.splice(idx, 1);
      setDrivers([...tmp]);
    }
  };
  return (
    <div className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl shadow-figma">
      {/* 타이틀 */}
      <div className="w-[1010px] h-[70px] flex justify-between items-center">
        <span className="text-blue-800 text-[45px] font-extrabold">
          운전자 등록
        </span>
        {/* 운전자 추가 */}
        <button
          className="w-40 h-12 text-xl font-semibold rounded-2xl bg-sky-200 shadow-figma"
          onClick={() => {
            addDriver();
          }}
        >
          운전자 추가
        </button>
      </div>
      {/* 운전자 정보 입력 */}
      {drivers.map((v, i) => {
        return cardStatus[i] ? (
          // 상태가 true -> 펼침 상태
          <Open
            key={i}
            info={v}
            index={i}
            cardStatus={cardStatus}
            setCardStatus={setCardStatus}
            drivers={drivers}
            setDrivers={setDrivers}
          />
        ) : (
          // 상태가 false -> 닫힘 상태
          <Close
            key={i}
            index={i}
            name={v["이름"]}
            cardStatus={cardStatus}
            setCardStatus={setCardStatus}
            subDriver={subDriver}
          />
        );
      })}
    </div>
  );
};

export default Drivers;
