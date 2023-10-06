import Finder from "components/Finder";
import SelectDateTime from "popUp/SelectDateTime";
import SelectStore from "popUp/SelectStore";
import NoticeCard from "./NoticeCard";
import { usePopUp } from "utils/usePopUp";
import { noticeAtom } from "recoil/noticeAtom";
import { useRecoilValue } from "recoil";
import { finderAtom } from "recoil/finderAtom";

const Notice = () => {
  const storePopUp = usePopUp("Notice/SelectStore"); // 지점 선택 팝업
  const dateTimePopUp = usePopUp("Notice/SelectDateTime"); // 날짜, 시간 선택 팝업
  const notices = useRecoilValue(noticeAtom); // 공지사항 정보
  const finderInfo = useRecoilValue(finderAtom); // 지점, 날짜, 시간 정보
  return (
    <>
      {/* 렌트 날짜, 지점 선택 컴포넌트 */}
      <div className="w-[860px] h-[70px] rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-20 mx-auto bg-white flex items-center justify-between z-10">
        <Finder storePopUp={storePopUp} dateTimePopUp={dateTimePopUp} />
      </div>
      <div className="w-[1140px] mx-auto mt-10">
        {/* 지점 */}
        <p className="text-[40px] font-extrabold">공지사항</p>
        <p className="text-[30px] font-bold text-blue-600 mt-4">
          {finderInfo.store}
        </p>
        {/* 공지사항 리스트 */}
        <div className="grid w-full grid-cols-3 mt-4 gap-y-4">
          {notices.map((v, i) => {
            return <NoticeCard noticeInfo={v} />;
          })}
        </div>
      </div>
      {/* 팝업 구역 */}
      {storePopUp.isClicked ? (
        <SelectStore popUpInfo={storePopUp} />
      ) : undefined}
      {dateTimePopUp.isClicked ? (
        <SelectDateTime popUpInfo={dateTimePopUp} />
      ) : undefined}
    </>
  );
};

export default Notice;
