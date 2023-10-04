import CarCard from "components/CarCard";
import { useRecoilValue } from "recoil";
import { userAtom } from "recoil/userAtom";
import { usePopUp } from "utils/usePopUp";

const Record = () => {
  const userInfo = useRecoilValue(userAtom); // 사용자 정보
  const popUpPoint = usePopUp("MyPage/Point"); // Point 팝업 제어
  const popUpResv = usePopUp("MyPage/Resv"); // Resv 팝업 제어
  return (
    <div className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl shadow-figma">
      {/* 타이틀 */}
      <div className="w-[1010px] h-[70px] flex justify-between items-center">
        <span className="text-blue-800 text-[45px] font-extrabold">
          내역 조회
        </span>
      </div>
      {/* 포인트 사용 내역 */}
      <div className="w-[1010px] h-40 bg-white rounded-2xl flex items-center justify-between px-8 mt-7">
        <div className="flex flex-col justify-between h-24 text-2xl font-bold w-fit">
          <div className="text-slate-400">포인트 사용 내역</div>
          <div className="flex items-center justify-between w-full text-2xl font-bold">
            현재 포인트 : {userInfo.point}
          </div>
        </div>
        <button
          className="w-56 h-16 text-2xl font-bold bg-sky-200 rounded-2xl"
          onClick={() => popUpPoint.toggle()}
        >
          사용 내역 확인
        </button>
      </div>
      {/* 예약 내역 조회 */}
      <div className="w-[1010px] h-40 bg-white rounded-2xl flex items-center px-8 mt-7">
        <div className="flex items-center justify-between w-full h-24 text-2xl font-bold">
          <div>예약 내역 조회</div>
          <button
            className="w-56 h-16 text-2xl font-bold bg-sky-200 rounded-2xl"
            onClick={() => popUpResv.toggle()}
          >
            예약 내역 확인
          </button>
        </div>
      </div>
      {/* 최근 본 차량 조회 */}
      <div className="w-[1010px] bg-white rounded-2xl flex items-center px-8 py-8 mt-7">
        <div className="flex flex-col justify-between w-full text-2xl font-bold">
          최근 본 차량 조회
          <div className="grid w-full grid-cols-3 px-8 pb-8 mt-4 bg-blue-100 rounded-2xl">
            {Array(5)
              .fill(0)
              .map((v, i) => {
                return <CarCard key={i} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record;
