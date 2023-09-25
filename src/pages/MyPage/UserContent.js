/* 사용자 기본 정보 컨텐츠들을 보여줄 박스 */
const UserContent = ({ title, content, changeSetter }) => {
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
              onClick={() => changeSetter(false)} // 변경 모드로 진입
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

export default UserContent;
