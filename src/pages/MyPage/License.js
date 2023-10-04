import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userAtom } from "recoil/userAtom";

const License = () => {
  const licenseInfo = useRecoilValue(userAtom).license; // 면허 정보
  const [titles, setTitles] = useState({
    kind: "종류", // 정보 titles
    number: "번호",
    issuance: "발급 일자",
    expire: "만료 일자",
  });
  return (
    <div className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl shadow-figma">
      {/* 타이틀 */}
      <div className="w-[1010px] h-[70px] flex justify-between items-center">
        <span className="text-blue-800 text-[45px] font-extrabold">
          면허 정보
        </span>
        <button className="w-40 h-12 text-xl font-semibold rounded-2xl bg-sky-200">
          면허 인증
        </button>
      </div>
      {/* 면허 정보들 */}
      {Object.keys(titles).map((v, i) => {
        return (
          <div
            className="w-[1010px] h-40 bg-white rounded-2xl flex items-center px-8 mt-7"
            key={i}
          >
            <div className="flex flex-col justify-between w-full h-24 text-2xl font-bold">
              <div className="text-slate-400">{titles[v]}</div>
              <div className="text-2xl font-bold">{licenseInfo[v]}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default License;
