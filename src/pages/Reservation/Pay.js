import { resvRent } from "api/reservationAxios";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { rentAtom } from "recoil/rentAtom";
import { useAlert } from "utils/useAlert";

const Pay = () => {
  const nav = useNavigate(); // nav 제어
  const alert = useAlert(); // Alert 제어
  const rentInfo = useRecoilValue(rentAtom); // 예약 결제 금액 정보
  return (
    <div className="w-[300px] h-[320px] rounded-2xl fixed top-[576px] right-[390px] bg-sky-50 shadow-figma flex flex-col items-center">
      <div className="flex items-center justify-center w-full mt-4 text-2xl font-bold text-blue-800">
        최종 결제
      </div>
      <div className="w-[280px] h-[260px] flex flex-col justify-between items-center mt-4">
        {/* 금액 결산 */}
        <div className="flex flex-col items-center justify-around w-full h-[200px] px-4 py-2 bg-white rounded-2xl">
          <div className="w-full h-[30px] flex justify-between items-center">
            <span className="text-lg font-bold">할인 전</span>
            <span className="text-lg font-bold line-through">
              {rentInfo.beforePrice}원
            </span>
          </div>
          <div className="w-full h-[30px] flex justify-between items-center">
            <span className="text-lg font-bold">할인 후</span>
            <span className="text-lg font-bold text-red-500">
              {rentInfo.afterPrice}원
            </span>
          </div>
          <div className="w-full h-[30px] flex justify-between items-center">
            <span className="text-lg font-bold">보험료</span>
            <span className="text-lg font-bold text-blue-600">
              +{rentInfo.insurance < 0 ? 0 : rentInfo.insurance}원
            </span>
          </div>
          <div className="w-full h-[30px] flex justify-between items-center">
            <span className="text-lg font-bold">포인트</span>
            <span className="text-lg font-bold text-red-500">
              -{rentInfo.point < 0 ? 0 : rentInfo.point}P
            </span>
          </div>
          <hr className="w-full border-2 border-black" />
          <div className="w-full h-[30px] flex justify-between items-center">
            <span className="text-lg font-bold">결제금액</span>
            <span className="text-lg font-bold text-blue-600">
              {rentInfo.afterPrice +
                (rentInfo.insurance < 0 ? 0 : rentInfo.insurance) -
                (rentInfo.point < 0 ? 0 : rentInfo.point)}
            </span>
          </div>
        </div>
        {/* 최종 결제 버튼 */}
        <button
          className="flex items-center justify-center w-3/5 text-lg font-bold rounded-lg h-9 bg-amber-400 hover:shadow-figma"
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
                price:
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

export default Pay;
