import { useState } from "react";
import {
  MdNotificationsNone,
  MdInfoOutline,
  MdDoneAll,
  MdList,
  MdCreditCard,
  MdOutlineAccountBox,
} from "react-icons/md";

const SideMenu = ({ withResv }) => {
  const [ids, setIds] = useState({
    0: ["대기 예약", "MyPage/Reservation"],
    1: ["기본 정보", "MyPage/UserInfo"],
    2: ["선호 차량", "MyPage/PreferOption"],
    3: ["내역 조회", "MyPage/Record"],
    4: ["면허 정보", "MyPage/License"],
    5: ["계정 관리", "MyPage/Account"],
  });
  const [icons, setIcons] = useState([
    <MdInfoOutline className="text-3xl" />,
    <MdDoneAll className="text-3xl" />,
    <MdList className="text-3xl" />,
    <MdCreditCard className="text-3xl" />,
    <MdOutlineAccountBox className="text-3xl" />,
  ]);
  function direct(idx) {
    // 해당 컴포넌트로 이동
    const target = document.getElementById(ids[idx][1]);
    const targetTop = window.scrollY + target.getBoundingClientRect().top; // 절대좌표(y)
    window.scrollTo(window.scrollY, targetTop - 144);
  }
  return (
    <div className="w-[300px] h-[270px] rounded-2xl sticky top-36 bg-sky-50 shadow-figma flex flex-col items-center">
      <div className="flex items-center justify-center w-full mt-4 text-2xl font-bold text-blue-800">
        메뉴
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        {withResv ? (
          <button
            className="w-[90px] h-[90px] bg-white border-2 border-blue-200 rounded-xl flex flex-col justify-between items-center py-3 hover:shadow-figma active:bg-blue-200"
            onClick={() => {
              direct(0);
            }}
          >
            <MdNotificationsNone className="text-3xl" />
            <span className="font-semibold ">대기 예약</span>
          </button>
        ) : null}
        {Array(5)
          .fill(0)
          .map((v, i) => {
            return (
              <button
                key={i}
                className="w-[90px] h-[90px] bg-white border-2 border-blue-200 rounded-xl flex flex-col justify-between items-center py-3 hover:shadow-figma active:bg-blue-200"
                onClick={() => {
                  direct(`${i + 1}`);
                }}
              >
                {icons[i]}
                <span className="font-semibold">{ids[`${i + 1}`][0]}</span>
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default SideMenu;
