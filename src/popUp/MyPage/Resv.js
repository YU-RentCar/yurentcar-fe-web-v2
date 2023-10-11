import { usePopUp } from "utils/usePopUp";
import { MdOutlineClose } from "react-icons/md";
import { useState, useEffect } from "react";
import { getResvRecord } from "api/myPageAxios";
import ResvCard from "pages/MyPage/ResvCard";

const Resv = () => {
  const [resvRecord, setResvRecord] = useState([]); // 예약 내역
  const popUpResv = usePopUp("MyPage/Resv"); // Resv 팝업 제어
  useEffect(() => {
    getResvRecord() // 예약 내역 조회
      .then((response) => {
        console.log("마이페이지 / 예약내역 : ", response.data);
        setResvRecord([...response.data]);
      })
      .catch((error) => {
        console.log("마이페이지 / 예약내역에러 : ", error.response);
      });
  }, []);
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
          <div className="w-[950px] h-[850px] rounded-2xl bg-blue-100 mx-auto mt-4 grid grid-cols-2 pt-8 overflow-y-scroll">
            {resvRecord.map((v, i) => {
              return <ResvCard resvInfo={v} idx={i} type="noReview" key={i} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resv;
