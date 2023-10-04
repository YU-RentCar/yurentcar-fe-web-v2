const Close = ({ index, name, cardStatus, setCardStatus, subDriver }) => {
  return (
    <div className="w-[1100px] h-20 flex justify-between items-center rounded-2xl bg-sky-200 px-14 mt-4">
      {/* 이름 */}
      <span className="text-2xl font-bold">{name}</span>
      <div className="w-[200px] h-12 flex justify-between items-center">
        {/* 카드 펼치기 버튼 */}
        <button
          className="w-[140px] h-full rounded-2xl bg-blue-400 text-white font-bold text-xl shadow-figma"
          onClick={() => {
            const tmp = [...cardStatus];
            tmp.splice(index, 1, true); // 해당 카드의 상태를 true로 바꾸기
            setCardStatus([...tmp]);
          }}
        >
          카드 펴기
        </button>
        {/* 카드 삭제 버튼 */}
        <button
          className="w-7 h-7 bg-slate-500"
          onClick={() => {
            subDriver(index);
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
};
export default Close;
