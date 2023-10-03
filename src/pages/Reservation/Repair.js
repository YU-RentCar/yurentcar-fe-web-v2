import { useRecoilValue } from "recoil";
import { carAtom } from "recoil/carAtom";
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Repair = () => {
  const carInfo = useRecoilValue(carAtom); // 차량 정보
  const [open, setOpen] = useState(1); // 아코디언 제어
  const handleOpen = (value) => setOpen(open === value ? 0 : value); // 아코디언 on/off
  return (
    <div className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl shadow-figma">
      {/* 타이틀 */}
      <div className="w-[1010px] h-[70px] flex justify-between items-center text-blue-800 text-[45px] font-bold">
        차량 수리 내역
      </div>
      {/* 상세 정보 */}
      <div className="w-[1100px] h-[500px] rounded-2xl bg-blue-200 mt-4 pt-4">
        {carInfo.repair.map((v, i) => {
          return (
            <>
              {/* 몇번째 아코디언인지 지정 */}
              <Accordion
                open={open === i + 1}
                className="w-[1040px] bg-white rounded-2xl border-2 border-blue-600 mx-auto mt-2"
              >
                {/* 타이틀, 위에서 지정한 아코디언에 제어 기능 부여 */}
                <AccordionHeader
                  onClick={() => handleOpen(i + 1)}
                  className={`px-8 text-2xl font-bold ${
                    open === i + 1 ? "!text-red-500" : ""
                  }`}
                >
                  {v["date"]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {v["title"]}
                </AccordionHeader>
                {/* 컨텐츠 */}
                <AccordionBody className="px-8 text-xl font-bold text-slate-700">
                  {v["content"]}
                </AccordionBody>
              </Accordion>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Repair;
