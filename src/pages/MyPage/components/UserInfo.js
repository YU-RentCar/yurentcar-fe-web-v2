import { useState } from "react";
import { Input } from "@material-tailwind/react";

const UserInfo = ({ userInfo, setUserInfo, setAlertState }) => {
  let [isChanging, setIsChanging] = useState(true); // 닉네임 변경 상태
  return (
    <>
      <div className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl">
        {/* 타이틀 */}
        <div className="w-[1010px] h-[70px] flex justify-between items-center">
          <span className="text-blue-800 text-[45px] font-extrabold">
            기본 정보
          </span>
        </div>
        {/* 사용자 정보 - 이름 */}
        <ContentBox title="이름" content={userInfo.name} />
        {/* 사용자 정보 - 닉네임 */}
        {isChanging ? (
          <ContentBox
            title="닉네임"
            content={userInfo.nickname}
            changeSetter={setIsChanging}
          />
        ) : (
          <ChangeNickname
            before={userInfo.nickname}
            changeSetter={setIsChanging}
            setUserInfo={setUserInfo}
            setAlertState={setAlertState}
          />
        )}
        {/* 사용자 정보 - 전화번호 */}
        <ContentBox title="전화번호" content={userInfo.phone} />
        {/* 사용자 정보 - 이메일 */}
        <ContentBox title="이메일" content={userInfo.email} />
      </div>
    </>
  );
};

/* 컨텐츠들을 보여줄 박스 */
const ContentBox = ({ title, content, changeSetter }) => {
  return (
    <div className="w-[1010px] h-40 bg-white rounded-2xl flex items-center px-8 mt-7">
      <div className="flex flex-col justify-between w-full h-24 text-2xl font-bold">
        <div className="text-slate-400">{title}</div>
        {/* 닉네임이라면 변경 버튼을 추가 */}
        {title === "닉네임" ? (
          <div className="flex items-center justify-between w-full text-2xl font-bold">
            {content}
            <button
              className="text-slate-400"
              onClick={() => changeSetter(false)}
            >
              변경
            </button>
          </div>
        ) : (
          <div className="text-2xl font-bold">{content}</div>
        )}
      </div>
    </div>
  );
};

/* 닉네임 변경 시 사용할 박스 */
const ChangeNickname = ({
  before,
  changeSetter,
  setUserInfo,
  setAlertState,
}) => {
  let [tmpNick, setTmpNick] = useState(""); // 새로 입력된 닉네임
  let [newNick, setNewNick] = useState(""); // 최종적으로 변경할 닉네임
  let [isChekced, setIsChecked] = useState(false); // 중복 검사 여부
  return (
    <div className="w-[1010px] h-40 bg-white rounded-2xl flex items-center px-8 mt-7">
      <div className="flex flex-col justify-between w-full h-24">
        {/* 기존 닉네임 */}
        <div className="text-xl font-bold text-slate-400">{before}</div>
        <div className="flex items-center justify-between w-full h-20 text-2xl font-bold">
          {/* 새로운 닉네임 입력 */}
          <div className="flex items-center h-full w-96">
            <Input
              className="!border !border-black !text-2xl !font-bold !text-black h-[60px]"
              placeholder="닉네임을 입력해주세요"
              labelProps={{ className: "hidden" }}
              onChange={(e) => setTmpNick(e.target.value)}
            />
          </div>
          {/* 중복 확인 & 닉네임 변경 버튼 */}
          <div className="flex items-end justify-between h-full">
            <button
              className="w-40 h-12 mr-2 text-xl font-semibold bg-amber-200 rounded-xl"
              onClick={() => {
                if (tmpNick.trim() === "") {
                  setAlertState({ msg: "닉네임을 입력해주세요.", state: true });
                  setTimeout(
                    () => setAlertState({ msg: "", state: false }),
                    2000
                  );
                } else if (tmpNick === before) {
                  setAlertState({
                    msg: "기존과 동일한 닉네임입니다.",
                    state: true,
                  });
                  setTimeout(
                    () => setAlertState({ msg: "", state: false }),
                    2000
                  );
                } else {
                  setAlertState({
                    msg: "중복된 닉네임입니다. / 사용가능한 닉네임입니다.",
                    state: true,
                  });
                  setTimeout(
                    () => setAlertState({ msg: "", state: false }),
                    2000
                  );
                }
                setNewNick(tmpNick);
                setIsChecked(true);
              }}
            >
              중복 확인
            </button>
            <button
              className="w-40 h-12 ml-2 text-xl font-semibold text-white bg-blue-500 rounded-xl"
              onClick={() => {
                if (!isChekced || newNick !== tmpNick) {
                  setAlertState({
                    msg: "중복 검사가 되지 않았습니다.",
                    state: true,
                  });
                  setTimeout(
                    () => setAlertState({ msg: "", state: false }),
                    2000
                  );
                } else {
                  setAlertState({
                    msg: "닉네임이 변경되었습니다.",
                    state: true,
                  });
                  setTimeout(
                    () => setAlertState({ msg: "", state: false }),
                    2000
                  );
                  setUserInfo(newNick);
                  changeSetter(true);
                }
              }}
            >
              닉네임 변경
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
