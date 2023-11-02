/* 사용자 기본 정보 컨텐츠들을 보여줄 박스 */
const UserContent = ({ title, content, changeSetter }) => {
  return (
    <div className="w-[700px] h-24 bg-white rounded-2xl flex flex-col justify-between px-8 py-[15px] mt-4">
      <div className="font-bold text-slate-400">{title}</div>
      {/* 닉네임이라면 변경 버튼을 추가 */}
      {title === "닉네임" ? (
        <div className="flex items-center justify-between w-full font-bold">
          {content}
          <button
            className="text-slate-400"
            onClick={() => changeSetter(false)} // 변경 모드로 진입
          >
            변경
          </button>
        </div>
      ) : (
        <div className="text-xl font-bold">{content}</div>
      )}
    </div>
  );
};

export default UserContent;
