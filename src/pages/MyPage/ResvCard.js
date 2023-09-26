import Car from "assets/Car.png";
import { Chip } from "@material-tailwind/react";
import { MdOutlineTimer, MdOutlinePlace, MdOutlineMoney } from "react-icons/md";

const ResvCard = ({ resvInfo }) => {
  return (
    <div className="w-[350px] h-[373px] rounded-2xl bg-white mx-auto hover:shadow-figma">
      {/* 차량 사진 */}
      <img
        src={Car}
        alt="차량 사진"
        className="w-full h-[196px] rounded-t-2xl object-cover"
      ></img>
      {/* 차량 해쉬태그 */}
      <div className="flex items-center justify-around w-full px-8 mt-2">
        <Chip
          value={`# ${resvInfo.car}`}
          className="text-[13px] font-semibold w-[88px] h-[22px] flex justify-center items-center rounded-[5px] m-1 bg-blue-500"
        />
        <Chip
          value={`# ${resvInfo.number}`}
          className="text-[13px] font-semibold w-[88px] h-[22px] flex justify-center items-center rounded-[5px] m-1 bg-blue-400"
        />
        <Chip
          value={`# ${resvInfo.odo}km`}
          className="text-[13px] font-semibold w-[88px] h-[22px] flex justify-center items-center rounded-[5px] m-1 bg-blue-300 text-blue-900"
        />
      </div>
      {/* 예약 간단 정보 */}
      <div className="flex flex-col items-start justify-between w-full h-24 pl-8 mt-4">
        <div className="flex items-center text-base font-bold">
          <MdOutlineTimer className="mr-3 text-xl text-blue-600" />
          {resvInfo.period}
        </div>
        <div className="flex items-center text-base font-bold">
          <MdOutlinePlace className="mr-3 text-xl text-blue-600" />
          {`예약 지점 : ${resvInfo.store}`}
        </div>
        <div className="flex items-center text-base font-bold">
          <MdOutlineMoney className="mr-3 text-xl text-blue-600" />
          {`₩ ${resvInfo.price}`}
        </div>
      </div>
    </div>
  );
};

export default ResvCard;
