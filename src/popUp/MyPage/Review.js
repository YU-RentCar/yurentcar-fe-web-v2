import { usePopUp } from "utils/usePopUp";
import { MdOutlineClose } from "react-icons/md";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { reviewTargetAtom } from "recoil/reviewTargetAtom";
import { writeReview } from "api/myPageAxios";
import { useAlert } from "utils/useAlert";
import ResvCard from "pages/MyPage/ResvCard";

const Review = () => {
  const alert = useAlert(); // Alert 제어
  const reviewTarget = useRecoilValue(reviewTargetAtom); // 리뷰 타겟
  const popUpReview = usePopUp("MyPage/Review"); // Reivew 팝업 제어
  const popUpResv = usePopUp("MyPage/Resv"); // Resv 팝업 제어
  const [title, setTitle] = useState(""); // 리뷰 제목
  const [content, setContent] = useState(""); // 리뷰 내용
  useEffect(() => {
    const btn = document.getElementById("writeBtn");
    const reviewTitle = document.getElementById("reviewTitle");
    const reviewContent = document.getElementById("reviewContent");
    if (reviewTarget.reviewType === 1) {
      btn.classList.add("bg-amber-300");
      btn.textContent = "작성 완료\n+500P";
    } else if (reviewTarget.reviewType === 2) {
      btn.classList.add("bg-amber-300");
      btn.textContent = "작성 완료\n+0P";
    } else if (reviewTarget.reviewType === 3) {
      btn.classList.add("bg-slate-300");
      btn.textContent = "작성 불가능";
      btn.disabled = true;
      reviewTitle.disabled = true;
      reviewContent.disabled = true;
    } else if (reviewTarget.reviewType === 4) {
      btn.classList.add("bg-amber-300");
      btn.textContent = "작성 완료";
      btn.disabled = true;
      reviewTitle.disabled = true;
      reviewContent.disabled = true;
    }
  }, []);
  return (
    <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-screen h-screen bg-black bg-opacity-40">
      <div className="w-[1100px] h-[780px] rounded-2xl bg-white">
        <div className="flex justify-between pr-4 mt-4 pl-14">
          {/* 타이틀 */}
          <div className="font-extrabold text-[40px] text-blue-600 mt-4">
            후기 작성
          </div>
          {/* 팝업 끄기 위한 아이콘 */}
          <MdOutlineClose
            size={35}
            color="gray"
            onClick={() => {
              popUpReview.toggle();
              popUpResv.toggle();
            }}
          />
        </div>
        <div className="w-[1050px] h-[650px] rounded-2xl bg-sky-50 mx-auto mt-4 flex items-center justify-around">
          <div className="w-[350px] h-[600px] flex flex-col justify-around items-center">
            {/* 리뷰 타겟 */}
            <ResvCard resvInfo={reviewTarget} type="review" />
            {/* 리뷰의 버튼들 */}
            <button
              id="writeBtn"
              className="w-full h-20 text-2xl font-bold rounded-2xl bg-amber-300"
              onClick={async () => {
                if (title.trim() === "" || content.trim() === "") {
                  alert.onAndOff("제목 혹은 내용을 입력해주세요");
                } else {
                  const newReview = {
                    reservationId: reviewTarget.reservationId,
                    title: title,
                    description: content,
                  };
                  await writeReview(newReview)
                    .then((response) => {
                      console.log("마이페이지 / 후기작성 : ", response.data);
                    })
                    .catch((error) =>
                      console.log(
                        "마이페이지 / 후기작성에러 : ",
                        error.response
                      )
                    );
                }
              }}
            >
              작성완료
              <br />
              +500P
            </button>
            <button
              className="w-full h-16 text-2xl font-bold rounded-2xl bg-slate-300"
              onClick={() => {
                popUpReview.toggle();
                popUpResv.toggle();
              }}
            >
              취소
            </button>
          </div>
          <div className="w-[630px] h-[600px] flex flex-col justify-between items-center">
            {/* 리뷰 제목 */}
            <input
              id="reviewTitle"
              type="text"
              className="border border-black text-xl font-bold text-black w-full h-[80px] placeholder:text-slate-300"
              placeholder="제목을 입력해주세요"
              onChange={(e) => setTitle(e.target.value)}
            />
            {/* 리뷰 내용 */}
            <textarea
              id="reviewContent"
              className="border border-black text-lg font-semibold text-black w-full h-[480px] placeholder:text-slate-300"
              placeholder="내용을 입력해주세요"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
