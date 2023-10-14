import NoticeCard from "./NoticeCard";
import { MdOutlineArrowBack } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getNoticeList } from "api/noticeAxios";

const Notice = () => {
  const location = useLocation(); // location state 제어
  const nav = useNavigate(); // nav 제어
  const [notices, setNotices] = useState([]); // 공지사항 정보
  useEffect(() => {
    const params = {
      province: location.state.province,
      branchName: location.state.store,
      count: 0,
    };
    getNoticeList(params) // 리스트 조회
      .then((response) => {
        console.log("공지사항 / 리스트조회 : ", response.data);
        setNotices(response.data);
      })
      .catch((error) =>
        console.log("공지사항 / 리스트조회에러 : ", error.response)
      );
  }, []);
  return (
    <>
      <div className="w-[1140px] mx-auto mt-[120px]">
        {/* 뒤로 가기 */}
        <div className="flex">
          <MdOutlineArrowBack
            className="text-4xl font-bold text-black"
            onClick={() => {
              nav("/carsearch");
            }}
          />
          <span className="ml-4 text-4xl font-bold text-indigo-900">
            뒤로 가기
          </span>
        </div>
        {/* 지점 */}
        <p className="text-[40px] font-extrabold mt-10">공지사항</p>
        <p className="text-[30px] font-bold text-blue-600 mt-4">
          {location.state.store}
        </p>
        {/* 공지사항 리스트 */}
        <div className="grid w-full grid-cols-3 mt-4 gap-y-4">
          {notices.map((v, i) => {
            return <NoticeCard key={i} noticeInfo={v} index={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notice;
