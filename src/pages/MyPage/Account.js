import { usePopUp } from "utils/usePopUp";

const Account = () => {
  const popUpInfo = usePopUp("MyPage/Quit"); // 팝업 제어
  return (
    <div className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl shadow-figma">
      {/* 타이틀 */}
      <div className="w-[1010px] h-[70px] flex justify-between items-center">
        <span className="text-blue-800 text-[45px] font-extrabold">
          계정 관리
        </span>
      </div>
      {/* 회원 탈퇴 */}
      <div className="w-[1010px] h-40 bg-white rounded-2xl flex items-center px-8 mt-7">
        <div className="flex items-center justify-between w-full h-24 text-2xl font-bold">
          <div>회원 탈퇴</div>
          <button
            className="w-56 h-16 text-2xl font-bold text-white bg-red-500 rounded-2xl"
            onClick={() => popUpInfo.toggle()}
          >
            탈퇴하기
          </button>
        </div>
      </div>
      {/* 로그아웃 */}
      <div className="w-[1010px] h-40 bg-white rounded-2xl flex items-center px-8 mt-7">
        <div className="flex items-center justify-between w-full h-24 text-2xl font-bold">
          <div>로그아웃</div>
          <button
            className="w-56 h-16 text-2xl font-bold text-red-500 bg-sky-200 rounded-2xl"
            onClick={() => console.log("로그아웃")}
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
