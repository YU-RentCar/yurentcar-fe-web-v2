import { useRecoilValue } from "recoil";
import { userAtom } from "recoil/userAtom";
import { useRecoilState } from "recoil";
import { rentPointSelector } from "recoil/rentAtom";

const Point = () => {
  const [rentPoint, setRentPoint] = useRecoilState(rentPointSelector); // 포인트 사용 양 저장
  const userPoint = useRecoilValue(userAtom).point; // 사용자 보유 포인트
  return (
    <div className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl shadow-figma">
      {/* 타이틀 */}
      <div className="w-[1010px] h-[70px] flex justify-between items-center text-blue-800 text-[45px] font-bold">
        포인트 사용
      </div>
      <div className="w-[1040px] h-36 flex justify-between items-center mt-4">
        {/* 보유 포인트 */}
        <div className="w-[450px] h-full rounded-2xl bg-white flex flex-col justify-around pl-8 py-4">
          <span className="text-xl font-bold text-slate-600">현재 포인트</span>
          <span className="text-3xl font-extrabold">{userPoint}P</span>
        </div>
        {/* 포인트 사용 */}
        <div className="w-[450px] h-full rounded-2xl bg-white flex flex-col justify-around items-center py-4">
          <div className="flex w-[370px] items-center justify-between text-xl font-bold">
            <span className="text-slate-600">사용 포인트</span>
            <span id="ment" className="text-lg text-red-500"></span>
          </div>
          <input
            type="number"
            className="w-[370px] h-14 text-3xl text-black font-bold border-2 border-black rounded-2xl px-4 placeholder:text-lg"
            placeholder="사용할 포인트를 입력해주세요."
            onChange={(e) => {
              // 입력된 값에 따른 멘트 변화
              let ment = document.getElementById("ment");
              if (e.target.value === "" || Number(e.target.value) < 0) {
                ment.textContent = "0 이상의 숫자를 입력해주세요";
                setRentPoint(0);
              } else if (Number(e.target.value) > userPoint) {
                ment.textContent = "보유 포인트를 초과할 수 없습니다";
                setRentPoint(0);
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
};

export default Point;
