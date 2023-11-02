import { getCarAccident } from "api/reservationAxios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import dayjs from "dayjs";

const Accident = () => {
  const location = useLocation(); // location state 제어
  const [accident, setAccident] = useState([]); // 차량 사고 정보
  const [open, setOpen] = useState(1); // 아코디언 제어
  const handleOpen = (value) => setOpen(open === value ? 0 : value); // 아코디언 on/off
  useEffect(() => {
    getCarAccident(location.state.carNumber) // 차량 사고 내역
      .then((response) => {
        console.log("예약 / 사고 : ", response.data);
        setAccident([...response.data]);
      })
      .catch((error) => console.log("예약 / 사고에러 : ", error.response));
  }, []);
  return (
    <div
      className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl shadow-figma"
      id="Reservation/Accident"
    >
      {/* 타이틀 */}
      <div className="w-[1010px] h-[70px] flex justify-between items-center text-blue-800 text-[45px] font-bold">
        차량 사고 내역
      </div>
      {/* 상세 정보 */}
      <div className="w-[1100px] h-[500px] rounded-2xl bg-blue-200 mt-4 pt-4 overflow-y-scroll">
        {accident.map((v, i) => {
          return (
            <Accordion
              key={i}
              open={open === i + 1}
              className="w-[1040px] bg-white rounded-2xl border-2 border-blue-600 mx-auto mt-2"
            >
              {/* 타이틀, 위에서 지정한 아코디언에 제어 기능 부여 */}
              <AccordionHeader
                onClick={() => handleOpen(i + 1)}
                className={`px-8 text-2xl font-bold line-clamp-1 ${
                  open === i + 1 ? "!text-red-500" : ""
                }`}
              >
                {`${dayjs(v["eventDate"]).format("YYYY.MM.DD")}     ${
                  v["title"]
                }`}
              </AccordionHeader>
              {/* 컨텐츠 */}
              <AccordionBody className="px-8 text-xl font-bold text-slate-700">
                {v["content"]}
              </AccordionBody>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default Accident;
