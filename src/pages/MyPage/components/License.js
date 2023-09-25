const License = ({ licenseInfo }) => {
  return (
    <div className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl">
      {/* 타이틀 */}
      <div className="w-[1010px] h-[70px] flex justify-between items-center">
        <span className="text-blue-800 text-[45px] font-extrabold">
          면허 정보
        </span>
        <button className="w-40 h-12 text-xl font-semibold rounded-2xl bg-sky-200">
          면허 인증
        </button>
      </div>
      {/* 면허 정보 - 종류 */}
      <ContentBox title="종류" content={licenseInfo.kind} />
      {/* 면허 정보 - 번호 */}
      <ContentBox title="번호" content={licenseInfo.number} />
      {/* 면허 정보 - 발급 일자 */}
      <ContentBox title="발급 일자" content={licenseInfo.issuance} />
      {/* 면허 정보 - 만료 일자 */}
      <ContentBox title="만료 일자" content={licenseInfo.expire} />
    </div>
  );
};

/* 컨텐츠들을 보여줄 박스 */
const ContentBox = ({ title, content }) => {
  return (
    <div className="w-[1010px] h-40 bg-white rounded-2xl flex items-center px-8 mt-7">
      <div className="flex flex-col justify-between w-full h-24 text-2xl font-bold">
        <div className="text-slate-400">{title}</div>
        <div className="text-2xl font-bold">{content}</div>
      </div>
    </div>
  );
};

export default License;
