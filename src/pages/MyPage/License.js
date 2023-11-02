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
    <div
      className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl shadow-figma"
      id="MyPage/License"
    >
      {/* 타이틀 */}
      <div className="w-[700px] h-[40px] flex justify-between items-center">
        <span className="text-blue-800 text-[30px] font-extrabold">
          면허 정보
        </span>
        <button
          className="w-32 h-10 text-lg font-semibold rounded-xl bg-sky-200 hover:shadow-figma"
          onClick={() => alert.onAndOff("추후 개발될 예정입니다")}
        >
          면허 인증
        </button>
      </div>
      {/* 면허 정보들 */}
      {Object.keys(licenseInfo).map((v, i) => {
        return (
          <div
            className="w-[700px] h-24 bg-white rounded-2xl flex flex-col justify-between px-8 py-[15px] mt-4 font-bold"
            key={i}
          >
            <div className="text-slate-400">{v}</div>
            <div className="text-xl">{licenseInfo[v]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default License;
