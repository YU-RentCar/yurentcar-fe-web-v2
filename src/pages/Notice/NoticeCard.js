import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectedFinderAtom } from "recoil/selectedFinderAtom";

const NoticeCard = ({ noticeInfo, index }) => {
  const nav = useNavigate(); // nav 제어
  const selectedFinderInfo = useRecoilValue(selectedFinderAtom); // 시/도 지점 정보
  // 남은 날짜 계산
  const [leftDate, setLeftDate] = useState(
    dayjs(noticeInfo.finishDate).diff(dayjs(new Date()), "day")
  );
  // 각 카드마다 onclick 추가
  useEffect(() => {
    const card = document.getElementById(`notice${index}`);
    card.addEventListener("click", () => {
      nav("/noticedetail", {
        state: {
          province: selectedFinderInfo.province,
          store: selectedFinderInfo.store,
          noticeId: noticeInfo.noticeId,
        },
      });
    });
  }, []);
  return (
    <div
      id={`notice${index}`}
      className="w-[360px] h-[600px] rounded-2xl bg-white border-2 hover:shadow-figma"
    >
      {/* 공지사항 배너 -> 사진 */}
      <div className="w-full h-[380px] rounded-t-2xl bg-sky-200 flex justify-center items-center">
        공지사항 배너
      </div>
      <div className="w-full h-[220px] flex flex-col justify-between py-2 px-4">
        {/* 공지사항 제목 */}
        <span className="text-2xl font-bold text-sky-800">
          {noticeInfo.title}
        </span>
        {/* 공지사항 본문 */}
        <p className="text-xl font-semibold line-clamp-3">
          {noticeInfo.description}
        </p>
        <div className="flex items-center justify-between w-full">
          {/* 이벤트 기간, 업데이트 날짜 */}
          <span className="text-sm font-medium text-gray-600">
            {noticeInfo.startDate === null && noticeInfo.finishDate === null
              ? ""
              : `${
                  noticeInfo.startDate === null
                    ? ""
                    : dayjs(noticeInfo.startDate).format("YY년 MM월 DD일")
                } ~ ${
                  noticeInfo.finishDate === null
                    ? ""
                    : dayjs(noticeInfo.finishDate).format("YY년 MM월 DD일")
                }`}
            <br />
            최종 작성일 {dayjs(noticeInfo.modifiedAt).format("YY년 MM월 DD일")}
          </span>
          {/* 디데이 계산 */}
          <span className="text-2xl font-bold text-red-500">
            {noticeInfo.finishDate === null
              ? ""
              : leftDate > 0
              ? `D-${leftDate}`
              : leftDate === 0
              ? "D-Day"
              : `이벤트 종료`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
