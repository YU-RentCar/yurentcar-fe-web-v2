import { resvRent } from "api/reservationAxios";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { rentAtom } from "recoil/rentAtom";
import { useAlert } from "utils/useAlert";

const Final = () => {
  const nav = useNavigate(); // nav 제어
  const alert = useAlert(); // Alert 제어
  const rentInfo = useRecoilValue(rentAtom); // 예약 결제 금액 정보
  return (
    <div className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl shadow-figma">
      {/* 타이틀 */}
      <div className="w-[1010px] h-[70px] flex justify-between items-center text-blue-800 text-[45px] font-bold">
        최종 결제
      </div>
      <div className="w-[1040px] h-[380px] flex justify-between items-center mt-4">
        {/* 금액 결산 */}
        <div className="w-[500px] h-full rounded-2xl bg-white flex flex-col justify-between items-center py-8">
          <div className="w-[400px] h-[50px] flex justify-between items-center">
            <span className="text-3xl font-bold">할인 전</span>
            <span className="text-3xl font-bold line-through">
              {rentInfo.beforePrice}원
            </span>
          </div>
          <div className="w-[400px] h-[50px] flex justify-between items-center">
            <span className="text-3xl font-bold">할인 후</span>
            <span className="text-3xl font-bold text-red-500">
              {rentInfo.afterPrice}원
            </span>
          </div>
          <div className="w-[400px] h-[50px] flex justify-between items-center">
            <span className="text-3xl font-bold">보험료</span>
            <span className="text-3xl font-bold text-blue-600">
              +{rentInfo.insurance < 0 ? 0 : rentInfo.insurance}원
            </span>
          </div>
          <div className="w-[400px] h-[50px] flex justify-between items-center">
            <span className="text-3xl font-bold">포인트</span>
            <span className="text-3xl font-bold text-red-500">
              -{rentInfo.point < 0 ? 0 : rentInfo.point}P
            </span>
          </div>
          <hr className="border-2 border-black w-[400px]" />
          <div className="w-[400px] h-[50px] flex justify-between items-center">
            <span className="text-3xl font-bold">결제금액</span>
            <span className="text-3xl font-bold text-blue-600">
              {rentInfo.afterPrice +
                (rentInfo.insurance < 0 ? 0 : rentInfo.insurance) -
                (rentInfo.point < 0 ? 0 : rentInfo.point)}
            </span>
          </div>
        </div>
        {/* 최종 결제 버튼 */}
        <button
          className="w-[400px] h-[100px] rounded-2xl bg-amber-400 text-4xl font-bold flex justify-center items-center shadow-figma"
          onClick={() => {
            if (rentInfo.insurance < 0) alert.onAndOff("보험을 선택해주세요");
            else if (rentInfo.point < 0)
              alert.onAndOff("0 이상의 포인트를 입력해주세요");
            else if (rentInfo.drivers.length === 0)
              alert.onAndOff("1명 이상의 운전자를 등록해주세요");
            else {
              const data = {
                carNumber: rentInfo.carNumber,
                startDate: rentInfo.startDate,
                endDate: rentInfo.endDate,
                reservationPrice:
                  rentInfo.afterPrice + rentInfo.insurance - rentInfo.point,
                usePoint: -1 * rentInfo.point,
                reason: "차량 예약 사용",
                drivers: rentInfo.drivers,
              };
              resvRent(data)
                .then((response) => {
                  console.log("예약 / 예약 : ", response.data);
                  nav("/mypage");
                })
                .catch((error) =>
                  console.log("예약 / 예약에러 : ", error.response)
                );
            }
          }}
        >
          결제하기
        </button>
      </div>
    </div>
  );
};

export default Final;
