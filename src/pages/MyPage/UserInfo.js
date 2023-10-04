import { useState } from "react";
import { useRecoilState } from "recoil";
import { userSelector } from "recoil/userAtom";
import UserContent from "./UserContent";
import UserNickChange from "./UserNickChange";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useRecoilState(userSelector); // 사용자 정보
  let [isChanging, setIsChanging] = useState(true); // 닉네임 변경 상태
  return (
    <>
      <div className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl shadow-figma">
        {/* 타이틀 */}
        <div className="w-[1010px] h-[70px] flex justify-between items-center">
          <span className="text-blue-800 text-[45px] font-extrabold">
            기본 정보
          </span>
        </div>
        {/* 사용자 정보 - 이름 */}
        <UserContent title="이름" content={userInfo.name} />
        {/* 사용자 정보 - 닉네임 */}
        {isChanging ? (
          <UserContent
            title="닉네임"
            content={userInfo.nickname}
            changeSetter={setIsChanging}
          />
        ) : (
          <UserNickChange
            before={userInfo.nickname}
            changeSetter={setIsChanging}
            setUserInfo={setUserInfo}
          />
        )}
        {/* 사용자 정보 - 전화번호 */}
        <UserContent title="전화번호" content={userInfo.phone} />
        {/* 사용자 정보 - 이메일 */}
        <UserContent title="이메일" content={userInfo.email} />
      </div>
    </>
  );
};

export default UserInfo;
