import Car from "assets/Car.png";
import { useRecoilValue } from "recoil";
import { carAtom } from "recoil/carAtom";
import { Chip } from "@material-tailwind/react";

const CarCard = ({ name, number, odo, price, imageURI, discountRatio }) => {
  return (
    <div className="w-[270px] h-[376px] rounded-2xl bg-white mt-8 hover:shadow-figma mx-auto border-2">
      {/* 차량 사진 */}
      <img
        // 일시적으로 고양이 움짤로 대체
        src="https://thecatapi.com/api/images/get?format=src&type=gif"
        alt="차량 사진"
        className="object-cover h-[164px] w-full rounded-t-2xl"
      ></img>
      {/* 차량 해쉬태그 */}
      <div className="flex flex-wrap items-center justify-center mt-2">
        <Chip
          value={`# ${name}`}
          className="text-[13px] font-semibold w-[88px] h-[22px] flex justify-center items-center rounded-[5px] m-1 bg-blue-500"
        />
        <Chip
          value={`# ${number}`}
          className="text-[13px] font-semibold w-[88px] h-[22px] flex justify-center items-center rounded-[5px] m-1 bg-blue-400"
        />
        <Chip
          value={`# ${odo}km`}
          className="text-[13px] font-semibold w-[88px] h-[22px] flex justify-center items-center rounded-[5px] m-1 bg-blue-300 text-blue-900"
        />
        <Chip
          value={`# ${price / 10000}만원대`}
          className="text-[13px] font-semibold w-[88px] h-[22px] flex justify-center items-center rounded-[5px] m-1 bg-blue-200 text-blue-900"
        />
      </div>
      {/* 차량 이름 */}
      <div className="pl-4 mt-4 text-2xl font-extrabold">{name}</div>
      {/* 차량 가격 */}
      <div className="pl-4 mt-4 text-xl font-bold">
        <span className="line-through text-slate-500">{`₩${
          price * (1.0 + discountRatio / 100)
        }`}</span>
        <span className="ml-2 text-red-500">{-`${discountRatio}%`}</span>
      </div>
      <div className="flex justify-end pr-4 mt-2 font-extrabold text-[28px] text-blue-500">{`₩${price}`}</div>
    </div>
  );
};

export default CarCard;
