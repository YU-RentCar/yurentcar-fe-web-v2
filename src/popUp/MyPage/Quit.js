import { useAlert } from "utils/useAlert";
import { usePopUp } from "utils/usePopUp";

const Quit = () => {
  const popUpInfo = usePopUp("MyPage/Quit"); // 팝업 제어
  const alert = useAlert(); // alert 제어
  return (
    <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-screen h-screen bg-black bg-opacity-40">
      <div className="w-[600px] h-[300px] rounded-2xl bg-white flex flex-col justify-center items-center">
        <div className="w-[550px] h-[200px] flex flex-col justify-between items-center">
          {/* 멘트 */}
          <span className="text-3xl font-bold">
            정말로 유렌트카에서 <span className="text-red-500">탈퇴</span>
            하시겠습니까?
          </span>
          {/* 탈퇴하기 버튼 */}
          <button
            className="w-[350px] h-16 bg-sky-200 rounded-2xl text-red-500 font-bold text-2xl"
            onClick={() => {
              alert.onAndOff("탈퇴되었습니다");
              popUpInfo.toggle();
            }}
          >
            탈퇴하기
          </button>
          {/* 취소 버튼 */}
          <button
            className="w-[350px] h-16 bg-slate-300 rounded-2xl font-bold text-2xl"
            onClick={() => {
              popUpInfo.toggle();
            }}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quit;
