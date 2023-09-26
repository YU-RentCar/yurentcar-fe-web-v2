import { usePopUp } from "utils/usePopUp";
import { MdOutlineClose } from "react-icons/md";
import ResvCard from "pages/MyPage/ResvCard";
import { userAtom } from "recoil/userAtom";
import { useRecoilValue } from "recoil";
import Review from "popUp/MyPage/Review";
import { useState, useEffect } from "react";

const Resv = () => {
  const popUpResv = usePopUp("MyPage/Resv"); // Resv 팝업 제어
  const resvRecord = useRecoilValue(userAtom).resvRecord; // 예약 내역
  const popUpReview = usePopUp("MyPage/Review"); // Review 팝업 제어
  let [idx, setIdx] = useState(0); // 후기 작성을 원할 때 몇번째 내역인지 저장
  useEffect(() => {
    // 각 resvCard 들에 click 이벤트 추가 + 클릭시 몇번째 내역인지 set
    document.getElementsByName("resvCard").forEach((v, i) => {
      v.addEventListener("click", () => {
        popUpReview.toggle();
        setIdx(i);
      });
    });
  });
  return (
    <>
      <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-screen h-screen bg-black bg-opacity-40">
        <div className="w-[1000px] h-[980px] rounded-2xl bg-white">
          <div className="flex justify-between pr-4 mt-4 pl-14">
            {/* 타이틀 */}
            <div className="font-extrabold text-[40px] text-blue-600 mt-4">
              예약 내역
            </div>
            {/* 팝업 끄기 위한 아이콘 */}
            <MdOutlineClose
              size={35}
              color="gray"
              onClick={() => popUpResv.toggle()}
            />
          </div>
          <div className="w-[950px] h-[850px] rounded-2xl bg-blue-100 mx-auto mt-4 grid grid-cols-2 pt-8">
            {resvRecord.map((v, i) => {
              return <ResvCard resvInfo={v} key={i} />;
            })}
          </div>
        </div>
      </div>
      {popUpReview.isClicked ? <Review idx={idx} /> : null}
    </>
  );
};

export default Resv;
