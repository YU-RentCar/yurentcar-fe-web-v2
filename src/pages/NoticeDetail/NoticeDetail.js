import dayjs from "dayjs";
import { MdOutlineArrowBack } from "react-icons/md";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getNotice } from "api/noticeAxios";
import { useRecoilValue } from "recoil";
import { selectedFinderAtom } from "recoil/selectedFinderAtom";

const NoticeDetail = () => {
  const location = useLocation(); // location state 제어
  const nav = useNavigate(); // nav 제어
  const selectedFinderInfo = useRecoilValue(selectedFinderAtom); // 시/도 지점 정보
  const [noticeInfo, setNoticeInfo] = useState({}); // 공지사항 정보
  const [leftDate, setLeftDate] = useState(); // 남은 날짜
  useEffect(() => {
    // 공지사항 조회
    getNotice(location.state.noticeId)
      .then((response) => {
        console.log("공지사항 / 조회 : ", response.data);
        setNoticeInfo(response.data);
      })
      .catch((error) => console.log("공지사항 / 조회에러 : ", error.response));
  }, []);
  useEffect(() => {
    // 남은 날짜 계산
    setLeftDate(dayjs(noticeInfo.finishDate).diff(dayjs(new Date()), "day"));
  }, [noticeInfo]);
  return (
    <>
      <div className="w-[1140px] mx-auto mt-[120px]">
        {/* 뒤로 가기 */}
        <div className="flex">
          <MdOutlineArrowBack
            className="text-4xl font-bold text-black"
            onClick={() => {
              nav("/notice", {
                state: {
                  province: selectedFinderInfo.province,
                  store: selectedFinderInfo.store,
                },
              });
            }}
          />
          <span className="ml-4 text-4xl font-bold text-indigo-900">
            리스트로 돌아가기
          </span>
        </div>
        <div className="w-[1100px] h-[307px] rounded-2xl bg-sky-50 mx-auto mt-12 shadow-figma flex flex-col justify-between px-8 py-10">
          {/* 공지사항 제목 */}
          <span className="text-4xl font-extrabold text-blue-900">
            {noticeInfo.title}
          </span>
          {/* 지점 */}
          <span className="text-3xl font-bold text-blue-600">
            {`${location.state.province}  ${location.state.store}`}
          </span>
          {/* 이벤트 기간 & 디데이 */}
          <span className="text-3xl font-semibold text-gray-600">
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
            <span className="ml-12 text-red-500">
              {leftDate > 0
                ? `${leftDate}일 남았어요!`
                : leftDate === 0
                ? "오늘까지에요!!"
                : `종료된 이벤트에요`}
            </span>
          </span>
          {/* 최종 작성일 */}
          <span className="text-3xl font-semibold text-blue-600">
            최종 작성일 {dayjs(noticeInfo.modifiedAt).format("YY년 MM월 DD일")}
          </span>
        </div>
        {/* 공지사항 사진 */}
        <img
          src="https://thecatapi.com/api/images/get?format=src&type=gif"
          alt="공지사항 사진"
          className="w-[1100px] h-[500px] mx-auto mt-4 rounded-2xl"
        ></img>
        {/* 본문 내용 */}
        <p className="w-[1100px] mx-auto mt-4 mb-40 text-3xl font-normal">
          {noticeInfo.description}
        </p>
      </div>
    </>
  );
};

export default NoticeDetail;
