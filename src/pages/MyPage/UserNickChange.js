import { useState } from "react";
import { useAlert } from "utils/useAlert";
import { Input } from "@material-tailwind/react";

/* 닉네임 변경 시 사용할 박스 */
const UserNickChange = ({ before, setUserInfo, changeSetter }) => {
  let [tmpNick, setTmpNick] = useState(""); // 새로 입력된 닉네임
  let [newNick, setNewNick] = useState(""); // 최종적으로 변경할 닉네임
  let [isChekced, setIsChecked] = useState(false); // 중복 검사 여부
  const alert = useAlert();
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
                  alert.onAndOff("닉네임을 입력해주세요");
                } else if (tmpNick === before) {
                  alert.onAndOff("기존과 동일한 닉네임입니다.");
                } else {
                  alert.onAndOff("중복된 or 사용가능한 닉네임입니다.");
                  setNewNick(tmpNick);
                  setIsChecked(true);
                }
              }}
            >
              중복 확인
            </button>
            <button
              className="w-40 h-12 ml-2 text-xl font-semibold text-white bg-blue-500 rounded-xl"
              onClick={() => {
                if (!isChekced || newNick !== tmpNick) {
                  alert.onAndOff("중복 검사가 되지 않았습니다.");
                } else {
                  alert.onAndOff("닉네임이 변경되었습니다.");
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

export default UserNickChange;
