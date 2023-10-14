import { useAlert } from "utils/useAlert";
import { useState } from "react";
import Close from "./Close";
import Open from "./Open";

const Drivers = () => {
  const alert = useAlert(); // Alert 제어
  // 운전자 추가 시 추가될 tmp 객체
  const [tmp, setTmp] = useState({
    이름: "",
    생년월일: "",
    전화번호: "",
    "면허 종류": "",
    "면허 번호": "",
    "발급 일자": "",
    "만료 일자": "",
  });
  // 사용자는 등록했는지 확인
  const [isInclude, setIsInclude] = useState({ state: false, index: -1 });
  // 운전자 카드 상태 true : 펼쳐짐, false : 접힘
  const [cardStatus, setCardStatus] = useState([true]);
  // 운전자 정보
  const [drivers, setDrivers] = useState([tmp]);
  // 운전자 추가
  const addDriver = function () {
    const before = [...drivers];
    before.push(tmp);
    setDrivers([...before]);
  };
  // 운전자 삭제
  const subDriver = function (idx) {
    const temp = [...drivers];
    if (temp.length === 1)
      alert.onAndOff("적어도 한명의 운전자가 등록되어야 합니다");
    else {
      if (idx === isInclude.index) setIsInclude({ state: false, index: -1 });
      else {
        temp.splice(idx, 1);
        setDrivers([...temp]);
      }
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
            isInclude={isInclude}
            setIsInclude={setIsInclude}
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
