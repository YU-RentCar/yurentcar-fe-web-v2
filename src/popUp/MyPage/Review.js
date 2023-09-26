import { usePopUp } from "utils/usePopUp";
import { MdOutlineClose } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { userAtom } from "recoil/userAtom";
import { Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import ResvCard from "pages/MyPage/ResvCard";

const Review = ({ idx }) => {
  const popUpReview = usePopUp("MyPage/Review"); // Reivew 팝업 제어
  const reviewTarget = useRecoilValue(userAtom).resvRecord[idx]; // 어떤 예약 내역에 대한 리뷰인가
  let [title, setTitle] = useState(""); // 리뷰 제목
  let [content, setContent] = useState(""); // 리뷰 내용
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
            onClick={() => popUpReview.toggle()}
          />
        </div>
        <div className="w-[1050px] h-[650px] rounded-2xl bg-sky-50 mx-auto mt-4 flex items-center justify-around">
          <div className="w-[350px] h-[600px] flex flex-col justify-around items-center">
            {/* 리뷰 타겟 */}
            <ResvCard resvInfo={reviewTarget} />
            {/* 리뷰의 버튼들 */}
            <button
              className="w-full h-20 text-2xl font-bold rounded-2xl bg-amber-300"
              onClick={console.log(`제목 : ${title}\n내용 : ${content}`)}
            >
              작성완료
              <br />
              +500P
            </button>
            <button
              className="w-full h-16 text-2xl font-bold rounded-2xl bg-slate-300"
              onClick={() => popUpReview.toggle()}
            >
              취소
            </button>
          </div>
          <div className="w-[630px] h-[600px] flex flex-col justify-between items-center">
            {/* 리뷰 제목 */}
            <Input
              className="!border !border-black !text-xl !font-bold !text-black h-[80px]"
              placeholder="제목을 입력해주세요"
              labelProps={{ className: "hidden" }}
              onChange={(e) => setTitle(e.target.value)}
            />
            {/* 리뷰 내용 */}
            <Textarea
              className="!border !border-black !text-lg !font-semibold !text-black h-[480px]"
              placeholder="내용을 입력해주세요"
              labelProps={{ className: "hidden" }}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
