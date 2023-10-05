const Open = ({
  index,
  info,
  cardStatus,
  setCardStatus,
  drivers,
  setDrivers,
}) => {
  return (
    <div className="w-[1100px] rounded-2xl bg-white pb-6 pt-4 mt-4 relative">
      {/* 항목 수만큼 생성 */}
      {Object.keys(info).map((v, i) => {
        return (
          <div
            key={i}
            className="w-[1000px] h-[105px] flex flex-col justify-between mx-auto mt-6"
          >
            {/* 항목 타이틀 */}
            <span className="text-2xl font-bold text-slate-600">{v}</span>
            {/* 컨텐츠 입력 */}
            <input
              type="text"
              className="w-full h-16 px-4 text-2xl font-bold border-2 border-black rounded-2xl"
              defaultValue={info[v]}
              onChange={(e) => {
                // 새로운 내용이 입력되면 수정
                const tmp = {
                  ...info,
                  [v]: e.target.value,
                }; // 해당 객체의 정보 변경
                const tmpDrivers = [...drivers];
                tmpDrivers.splice(index, 1, tmp); // 변경된 객체로 수정
                setDrivers([...tmpDrivers]);
              }}
            />
          </div>
        );
      })}
      <div className="w-[330px] h-12 flex justify-between items-center absolute right-0 top-0 mr-12 mt-4">
        {/* 사용자 정보 가져오기 버튼 */}
        <button className="w-[160px] h-full rounded-2xl bg-amber-300 font-bold text-xl shadow-figma">
          사용자와 동일
        </button>
        {/* 카드 접기 버튼 */}
        <button
          className="w-[140px] h-full rounded-2xl bg-blue-400 font-bold text-xl text-white shadow-figma"
          onClick={() => {
            const tmp = [...cardStatus];
            tmp.splice(index, 1, false); // 해당 카드의 상태를 false로 바꾸기
            setCardStatus([...tmp]);
          }}
        >
          카드 접기
        </button>
      </div>
    </div>
  );
};
export default Open;
