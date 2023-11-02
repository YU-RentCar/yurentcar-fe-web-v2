import { MdOutlineClose } from "react-icons/md";

const Close = ({ index, name, cardStatus, setCardStatus, subDriver }) => {
  return (
    <div className="w-[750px] h-14 flex justify-between items-center rounded-2xl bg-sky-200 px-8 mt-4">
      {/* 이름 */}
      <span className="text-xl font-bold">{name}</span>
      <div className="w-[150px] h-10 flex justify-between items-center">
        {/* 카드 펼치기 버튼 */}
        <button
          className="w-[100px] h-full rounded-2xl bg-blue-400 text-white font-bold text-base hover:shadow-figma"
          onClick={() => {
            const tmp = [...cardStatus];
            tmp.splice(index, 1, true); // 해당 카드의 상태를 true로 바꾸기
            setCardStatus([...tmp]);
          }}
        >
          카드 펴기
        </button>
        {/* 카드 삭제 버튼 */}
        <MdOutlineClose
          size={24}
          color="gray"
          onClick={() => subDriver(index)}
        />
      </div>
    </div>
  );
};
export default Close;
