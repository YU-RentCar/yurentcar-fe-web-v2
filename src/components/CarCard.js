import Car from "assets/Car.png";
import { useRecoilValue } from "recoil";
import { carAtom } from "recoil/carAtom";
import { Chip } from "@material-tailwind/react";

const CarCard = () => {
  const carInfo = useRecoilValue(carAtom); // 차량 정보
  return (
    <div className="w-[270px] h-[376px] rounded-2xl bg-white mt-8">
      {/* 차량 사진 */}
      <img
        src={Car}
        alt="차량 사진"
        className="object-cover h-[164px] w-full rounded-t-2xl"
      ></img>
      {/* 차량 해쉬태그 */}
      <div className="flex flex-wrap items-center justify-center mt-2">
        <Chip
          value={`# ${carInfo.car}`}
          className="text-[13px] font-semibold text-white bg-blue-500 w-[88px] h-[22px] flex justify-center items-center rounded-[5px] m-1"
        />
        <Chip
          value={`# ${carInfo.number}`}
          className="text-[13px] font-semibold text-white bg-blue-400 w-[88px] h-[22px] flex justify-center items-center rounded-[5px] m-1"
        />
        <Chip
          value={`# ${carInfo.odo}km`}
          className="text-[13px] font-semibold text-blue-900 bg-blue-300 w-[88px] h-[22px] flex justify-center items-center rounded-[5px] m-1"
        />
        <Chip
          value={`# ${carInfo.price / 10000}만원대`}
          className="text-[13px] font-semibold text-blue-900 bg-blue-100 w-[88px] h-[22px] flex justify-center items-center rounded-[5px] m-1"
        />
      </div>
      {/* 차량 이름 */}
      <div className="pl-4 mt-4 text-2xl font-extrabold">GRANDEUR HG</div>
      {/* 차량 가격 */}
      <div className="pl-4 mt-4 text-xl font-bold">
        <span className="line-through text-slate-500">{`₩${
          carInfo.price * 1.3
        }`}</span>
        <span className="ml-2 text-red-500">-30%</span>
      </div>
      <div className="flex justify-end pr-4 mt-2 font-extrabold text-[28px] text-blue-500">{`₩${carInfo.price}`}</div>
    </div>
  );
};

export default CarCard;
