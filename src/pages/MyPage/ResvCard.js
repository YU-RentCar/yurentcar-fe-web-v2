import { Chip } from "@material-tailwind/react";
import { MdOutlineTimer, MdOutlinePlace, MdOutlineMoney } from "react-icons/md";
import { usePopUp } from "utils/usePopUp";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { rtSelector } from "recoil/reviewTargetAtom";
import Car from "assets/Car.png";
import dayjs from "dayjs";
import "dayjs/locale/ko";

const ResvCard = ({ resvInfo, idx, type }) => {
  const [reviewTarget, setReviewTarget] = useRecoilState(rtSelector); // 리뷰 타겟 selector
  const popUpReview = usePopUp("MyPage/Review"); // Review 팝업 제어
  const popUpResv = usePopUp("MyPage/Resv"); // Resv 팝업 제어
  dayjs.locale("ko");
  useEffect(() => {
    const btn = document.getElementById(`reviewBtn${idx}`);
    if (type === "review") {
      btn.classList.add("hidden");
    } else if (resvInfo.reviewType === "POSSIBLE_POINT") {
      btn.classList.add("bg-amber-300");
      btn.textContent = "리뷰 작성 가능 (포인트 적립 가능)";
    } else if (resvInfo.reviewType === "POSSIBLE_NO_POINT") {
      btn.classList.add("bg-amber-300");
      btn.textContent = "리뷰 작성 가능 (포인트 적립 불가능)";
    } else if (resvInfo.reviewType === "IMPOSSIBLE") {
      btn.classList.add("bg-slate-300");
      btn.textContent = "리뷰 작성 불가능 (기간 만료)";
      btn.disabled = true;
    } else if (resvInfo.reviewType === "WRITTEN") {
      btn.classList.add("bg-amber-300");
      btn.textContent = "리뷰 작성 완료";
    }
  }, []);
  return (
    <>
      <div className="w-[350px] h-[373px] rounded-2xl bg-white mx-auto hover:shadow-figma">
        {/* 차량 사진 */}
        <img
          src={Car}
          alt="차량 사진"
          className="w-full h-[196px] rounded-t-2xl object-cover"
        ></img>
        {/* 차량 해쉬태그 */}
        <div className="flex items-center justify-around w-full px-8 mt-2">
          <Chip
            value={`# 더미`}
            className="text-[13px] font-semibold w-[88px] h-[22px] flex justify-center items-center rounded-[5px] m-1 bg-blue-500"
          />
          <Chip
            value={`# 더미`}
            className="text-[13px] font-semibold w-[88px] h-[22px] flex justify-center items-center rounded-[5px] m-1 bg-blue-400"
          />
          <Chip
            value={`# 더미`}
            className="text-[13px] font-semibold w-[88px] h-[22px] flex justify-center items-center rounded-[5px] m-1 bg-blue-300 text-blue-900"
          />
        </div>
        {/* 예약 간단 정보 */}
        <div className="flex flex-col items-start justify-between w-full h-24 px-8 mt-4">
          <div className="flex items-center text-base font-bold">
            <MdOutlineTimer className="mr-3 text-xl text-blue-600" />
            {dayjs(resvInfo.startDate).format("MM.DD(ddd) HH:mm")} ~{" "}
            {dayjs(resvInfo.endDate).format("MM.DD(ddd) HH:mm")}
          </div>
          <div className="flex items-center text-base font-bold">
            <MdOutlinePlace className="mr-3 text-xl text-blue-600" />
            {`예약 지점 : ${resvInfo.branchName}`}
          </div>
          <div className="flex items-center text-base font-bold">
            <MdOutlineMoney className="mr-3 text-xl text-blue-600" />
            {`₩ 더미`}
          </div>
          <button
            id={`reviewBtn${idx}`}
            className="w-full h-5 text-lg rounded-2xl"
            onClick={() => {
              setReviewTarget(resvInfo);
              popUpReview.toggle();
              popUpResv.toggle();
            }}
          ></button>
        </div>
      </div>
    </>
  );
};

export default ResvCard;
