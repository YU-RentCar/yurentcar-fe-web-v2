import { logout } from "api/myPageAxios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { navStateSelector } from "recoil/navStateAtom";
import { usePopUp } from "utils/usePopUp";

const Account = () => {
  const popUpInfo = usePopUp("MyPage/Quit"); // 팝업 제어
  const nav = useNavigate(); // 경로 이동
  const [navState, setNavState] = useRecoilState(navStateSelector); // 로그아웃 시 Nav 제어
  return (
    <div
      className="flex flex-col items-center w-full py-8 mt-12 mb-40 bg-sky-50 rounded-2xl shadow-figma"
      id="MyPage/Account"
    >
      {/* 타이틀 */}
      <div className="w-[700px] h-[35px] flex justify-between items-center">
        <span className="text-blue-800 text-[30px] font-extrabold">
          계정 관리
        </span>
      </div>
      {/* 회원 탈퇴 */}
      <div className="w-[700px] h-24 bg-white rounded-2xl flex justify-between items-center px-8 py-[15px] mt-4">
        <div className="text-xl font-bold">회원 탈퇴</div>
        <button
          className="w-32 text-xl font-bold text-white bg-red-500 h-11 rounded-xl hover:shadow-figma"
          onClick={() => popUpInfo.toggle()}
        >
          탈퇴하기
        </button>
      </div>
      {/* 로그아웃 */}
      <div className="w-[700px] h-24 bg-white rounded-2xl flex justify-between items-center px-8 py-[15px] mt-4">
        <div className="text-xl font-bold">로그아웃</div>
        <button
          className="w-32 text-xl font-bold text-red-500 h-11 bg-sky-200 rounded-xl hover:shadow-figma"
          onClick={async () => {
            await logout()
              .then((response) => {
                setNavState(false);
                nav("/auth");
              })
              .catch((error) =>
                console.log("마이페이지 / 로그아웃에러 : ", error.response)
              );
          }}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default Account;
