import { getUserInfo } from "api/myPageAxios";
import { resvRent } from "api/reservationAxios";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { rentAtom } from "recoil/rentAtom";
import { useAlert } from "utils/useAlert";

const Pay = () => {
  const nav = useNavigate(); // nav 제어
  const alert = useAlert(); // Alert 제어
  const rentInfo = useRecoilValue(rentAtom); // 예약 결제 금액 정보
  return (
    <div className="w-full h-[320px] rounded-2xl sticky top-[576px] bg-sky-50 shadow-figma flex flex-col items-center">
      <div className="flex items-center justify-center w-full mt-4 text-2xl font-bold text-blue-800">
        최종 결제
      </div>
      <div className="w-[280px] h-[260px] flex flex-col justify-around items-center mt-2">
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
          className="flex items-center justify-center w-4/5 h-10 mb-2 text-lg font-bold rounded-lg bg-amber-400 hover:shadow-figma"
          onClick={async () => {
            if (rentInfo.insurance < 0) alert.onAndOff("보험을 선택해주세요");
            else if (rentInfo.point < 0)
              alert.onAndOff("0 이상의 포인트를 입력해주세요");
            else if (rentInfo.drivers.length === 0)
              alert.onAndOff("1명 이상의 운전자를 등록해주세요");
            else {
              const IMP = window.IMP;
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
              await getUserInfo()
                .then((response) => {
                  IMP.init("imp71037182"); // 가맹점 식별코드
                  IMP.request_pay(
                    {
                      pg: "kakaopay.TC0ONETIME", // PG사 코드표에서 선택
                      pay_method: "card", // 결제 방식
                      merchant_uid:
                        "IMP" + dayjs(new Date()).format("YYYYMMDDHHmmss"), // 결제 고유 번호
                      name: data.carNumber, // 제품명
                      amount: data.price, // 가격
                      buyer_email: response.data.username, // 구매자 이메일
                      buyer_name: response.data.nickname, // 구매자 닉네임
                    },
                    async function (rsp) {
                      if (rsp.success) {
                        alert.onAndOff("결제에 성공했습니다");
                        await resvRent(data)
                          .then(() => nav("/mypage"))
                          .catch((error) =>
                            console.log("예약 / 예약에러 : ", error.response)
                          );
                      } else if (!rsp.success) {
                        alert.onAndOff("결제에 실패했습니다");
                      }
                    }
                  );
                })
                .catch((error) => console.log(error.response));
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
