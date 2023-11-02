import { useState, useEffect } from "react";
import { getUserInfo } from "api/myPageAxios";
import UserContent from "./UserContent";
import UserNickChange from "./UserNickChange";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({}); // 사용자 정보
  const [isChanging, setIsChanging] = useState(true); // 닉네임 변경 상태
  useEffect(() => {
    getUserInfo() // 사용자 기본 정보 api
      .then((response) => {
        console.log("마이페이지 / 사용자기본정보2 : ", response.data);
        setUserInfo(response.data);
      })
      .catch((error) =>
        console.log("마이페이지 / 사용자기본정보2에러 : ", error.response)
      );
  }, []);
  return (
    <div
      className="flex flex-col items-center w-full py-8 bg-sky-50 rounded-2xl shadow-figma"
      id="MyPage/UserInfo"
    >
      {/* 타이틀 */}
      <div className="w-[700px] h-[35px] flex justify-between items-center">
        <span className="text-blue-800 text-[30px] font-extrabold">
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
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
      )}
      {/* 사용자 정보 - 전화번호 */}
      <UserContent title="전화번호" content={userInfo.phoneNumber} />
      {/* 사용자 정보 - 이메일 */}
      <UserContent title="이메일" content={userInfo.username} />
    </div>
  );
};

export default UserInfo;
