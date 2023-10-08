import { useState } from "react";
import { useRecoilValue } from "recoil";
import { carAtom } from "recoil/carAtom";
import {
  MdLocalCarWash,
  MdOutlineDateRange,
  MdDateRange,
  MdPeopleAlt,
  MdSettings,
  MdTag,
  MdOutlineFlag,
  MdPhotoSizeSelectSmall,
} from "react-icons/md";

const DetailInfo = () => {
  const carInfo = useRecoilValue(carAtom); // 차량 정보
  const [titles, setTitles] = useState({
    // 제목
    oil: "유종",
    release: "출시일",
    upload: "등록일",
    passengers: "승차 인원",
    transmission: "구동기",
    brand: "브랜드",
    domestic: "국산/외제",
    size: "크기",
  });
  const [iconList, setIconList] = useState([
    // 아이콘
    <MdLocalCarWash className="text-[60px]" />,
    <MdOutlineDateRange className="text-[60px]" />,
    <MdDateRange className="text-[60px]" />,
    <MdPeopleAlt className="text-[60px]" />,
    <MdSettings className="text-[60px]" />,
    <MdTag className="text-[60px]" />,
    <MdOutlineFlag className="text-[60px]" />,
    <MdPhotoSizeSelectSmall className="text-[60px]" />,
  ]);
  return (
    <div className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl shadow-figma">
      {/* 타이틀 */}
      <div className="w-[1010px] h-[70px] flex justify-between items-center text-blue-800 text-[45px] font-bold">
        차량 상세 정보
      </div>
      {/* 상세 정보 */}
      <div className="w-[1100px] h-[510px] mx-auto bg-blue-200 rounded-2xl mt-4 flex flex-wrap justify-center items-center">
        {Object.keys(titles).map((v, i) => {
          return (
            <div
              className="w-[200px] h-[200px] bg-sky-50 flex flex-col justify-around rounded-2xl mx-8 pl-4 py-4"
              key={i}
            >
              {iconList[i]}
              <span className="text-2xl font-semibold">{titles[v]}</span>
              <span className="text-4xl font-bold text-blue-900">
                {carInfo[v]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailInfo;
