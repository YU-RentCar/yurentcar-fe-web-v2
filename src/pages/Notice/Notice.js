import NoticeCard from "./NoticeCard";
import { noticeAtom } from "recoil/noticeAtom";
import { useRecoilValue } from "recoil";
import { finderAtom } from "recoil/finderAtom";
import { MdOutlineArrowBack } from "react-icons/md";

const Notice = () => {
  const notices = useRecoilValue(noticeAtom); // 공지사항 정보
  const finderInfo = useRecoilValue(finderAtom); // 지점, 날짜, 시간 정보
  return (
    <>
      <div className="w-[1140px] mx-auto mt-[120px]">
        {/* 뒤로 가기 */}
        <div className="flex">
          <MdOutlineArrowBack className="text-4xl font-bold text-black" />
          <span className="ml-4 text-4xl font-bold text-indigo-900">
            뒤로 가기
          </span>
        </div>
        {/* 지점 */}
        <p className="text-[40px] font-extrabold mt-10">공지사항</p>
        <p className="text-[30px] font-bold text-blue-600 mt-4">
          {finderInfo.store}
        </p>
        {/* 공지사항 리스트 */}
        <div className="grid w-full grid-cols-3 mt-4 gap-y-4">
          {notices.map((v, i) => {
            return <NoticeCard key={i} noticeInfo={v} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notice;
