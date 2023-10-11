import { useState } from "react";
import { useAlert } from "utils/useAlert";

const License = () => {
  const alert = useAlert();
  const [licenseInfo, setTitles] = useState({
    종류: "1종 보통", // 정보 titles
    번호: "00-11-222222-33",
    "발급 일자": "2023-01-01",
    "만료 일자": "2033-12-31",
  });
  return (
    <div className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl shadow-figma">
      {/* 타이틀 */}
      <div className="w-[1010px] h-[70px] flex justify-between items-center">
        <span className="text-blue-800 text-[45px] font-extrabold">
          면허 정보
        </span>
        <button
          className="w-40 h-12 text-xl font-semibold rounded-2xl bg-sky-200"
          onClick={alert.onAndOff("추후 개발될 예정입니다")}
        >
          면허 인증
        </button>
      </div>
      {/* 면허 정보들 */}
      {Object.keys(licenseInfo).map((v, i) => {
        return (
          <div
            className="w-[1010px] h-40 bg-white rounded-2xl flex items-center px-8 mt-7"
            key={i}
          >
            <div className="flex flex-col justify-between w-full h-24 text-2xl font-bold">
              <div className="text-slate-400">{v}</div>
              <div className="text-2xl font-bold">{licenseInfo[v]}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default License;
