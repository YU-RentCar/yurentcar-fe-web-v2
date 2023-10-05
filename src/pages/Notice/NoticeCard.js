import dayjs from "dayjs";
import { useState } from "react";

const NoticeCard = ({ noticeInfo }) => {
  // 남은 날짜 계산
  const [leftDate, setLeftDate] = useState(
    dayjs().diff(dayjs(noticeInfo.endDate), "day")
  );
  return (
    <div className="w-[360px] h-[600px] rounded-2xl bg-white border-2 hover:shadow-figma">
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
          {noticeInfo.content}
        </p>
        <div className="flex items-center justify-between w-full">
          {/* 이벤트 기간, 업데이트 날짜 */}
          <span className="text-sm font-medium text-gray-600">
            {dayjs(noticeInfo.startDate).format("YY년 MM월 DD일")} ~{" "}
            {dayjs(noticeInfo.endDate).format("YY년 MM월 DD일")}
            <br />
            최종 작성일 {dayjs(noticeInfo.recentEdit).format("YY년 MM월 DD일")}
          </span>
          {/* 디데이 계산 */}
          <span className="text-2xl font-bold text-red-500">
            {leftDate > 0
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
