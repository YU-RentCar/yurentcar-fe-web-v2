import { useState } from "react";
import {
  MdList,
  MdDriveEta,
  MdOutlineBuild,
  MdOutlineCarCrash,
  MdOutlinePlace,
  MdOutlineDocumentScanner,
  MdOutlinePerson,
  MdOutlineMoney,
} from "react-icons/md";

const SideMenu = () => {
  const [ids, setIds] = useState({
    0: ["기본 정보", "Reservation/DefaultInfo"],
    1: ["상세 정보", "Reservation/DetailInfo"],
    2: ["수리 내역", "Reservation/Repair"],
    3: ["사고 내역", "Reservation/Accident"],
    4: ["지도", "Reservation/Map"],
    5: ["종합 보험", "Reservation/Insurance"],
    6: ["운전자등록", "Reservation/Drivers"],
    7: ["포인트사용", "Reservation/Point"],
  });
  const [icons, setIcons] = useState([
    <MdDriveEta className="text-3xl" />,
    <MdList className="text-3xl" />,
    <MdOutlineBuild className="text-3xl" />,
    <MdOutlineCarCrash className="text-3xl" />,
    <MdOutlinePlace className="text-3xl" />,
    <MdOutlineDocumentScanner className="text-3xl" />,
    <MdOutlinePerson className="text-3xl" />,
    <MdOutlineMoney className="text-3xl" />,
  ]);
  function direct(idx) {
    // 해당 컴포넌트로 이동
    const target = document.getElementById(ids[idx][1]);
    const targetTop = window.scrollY + target.getBoundingClientRect().top; // 절대좌표(y)
    window.scrollTo(window.scrollY, targetTop - 176);
  }
  return (
    <div className="w-full h-[360px] rounded-2xl sticky top-44 bg-sky-50 shadow-figma flex flex-col items-center">
      <div className="flex items-center justify-center w-full mt-4 text-2xl font-bold text-blue-800">
        메뉴
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        {Array(8)
          .fill(0)
          .map((v, i) => {
            return (
              <button
                key={i}
                className="w-[90px] h-[90px] bg-white border-2 border-blue-200 rounded-xl flex flex-col justify-between items-center py-3 hover:shadow-figma active:bg-blue-200"
                onClick={() => {
                  direct(i);
                }}
              >
                {icons[i]}
                <span className="font-semibold">{ids[i][0]}</span>
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default SideMenu;
