import { usePopUp } from "utils/usePopUp";
import { useState, useEffect } from "react";
import { useAuth } from "utils/useAuth";
import SideMenu from "./SideMenu";
import Reservation from "./Reservation";
import UserInfo from "./UserInfo";
import PreferOption from "./PreferOption";
import Record from "./Record";
import License from "./License";
import Account from "./Account";
import Point from "popUp/MyPage/Point";
import Resv from "popUp/MyPage/Resv";
import Review from "popUp/MyPage/Review";
import Quit from "popUp/MyPage/Quit";

const MyPage = () => {
  const auth = useAuth();
  const popUpQuit = usePopUp("MyPage/Quit"); // Quit 팝업 제어
  const popUpPoint = usePopUp("MyPage/Point"); // Point 팝업 제어
  const popUpResv = usePopUp("MyPage/Resv"); // Resv 팝업 제어
  const popUpReview = usePopUp("MyPage/Review"); // Review 팝업 제어
  const [resvState, setResvState] = useState(true); // 예약 대기 중인 정보의 유무
  useEffect(() => {
    auth.loginCheck();
  });
  return (
    <>
      <div className="w-[1140px] h-auto mx-auto mt-36 flex justify-between">
        <div className="w-[800px]">
          {/* 예약 대기 정보 */}
          {/* 대기 중인 예약이 없을 경우 보이지 않음 */}
          {resvState ? <Reservation setResvState={setResvState} /> : null}
          {/* 사용자 정보 */}
          <UserInfo />
          {/* 사용자 선호 차량 옵션 */}
          <PreferOption />
          {/* 사용자 사용 내역 */}
          <Record />
          {/* 사용자 면허 정보 */}
          <License />
          {/* 사용자 계정 관리 */}
          <Account />
        </div>
        {/* 사이드 메뉴 */}
        <div className="flex flex-col h-auto w-[300px]">
          <SideMenu withResv={resvState} />
        </div>
      </div>
      {popUpQuit.isClicked ? <Quit /> : null}
      {popUpPoint.isClicked ? <Point /> : null}
      {popUpResv.isClicked ? <Resv /> : null}
      {popUpReview.isClicked ? <Review /> : null}
    </>
  );
};

export default MyPage;
