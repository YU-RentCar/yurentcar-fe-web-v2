import { Checkbox } from "@material-tailwind/react";

const PreferContent = ({
  title,
  content,
  userPrefer,
  minCount,
  setUserPrefer,
  gatherInfo,
}) => {
  return (
    <div className="w-[700px] h-24 bg-white rounded-2xl flex flex-col justify-between px-8 py-[15px] mt-4">
      <div className="font-bold text-slate-400">{title}</div>
      {title !== "최소 인원" ? (
        /* 차량 크기, 유종, 구동기 -> Checkbox */
        <div className="flex items-center mx-auto">
          {content.map((v, i) => {
            return (
              <div className="mx-4 w-28" key={i}>
                <Checkbox
                  id={v}
                  label={v}
                  ripple={true}
                  labelProps={{ className: "font-semibold text-black" }}
                  checked={userPrefer[i]}
                  onChange={() => {
                    setUserPrefer(gatherInfo());
                  }}
                />
              </div>
            );
          })}
        </div>
      ) : (
        /* 최소 인원 -> Input */
        <div className="flex items-center w-32 mx-auto">
          <input
            id="minCount"
            type="number"
            className="w-full px-2 text-xl font-bold text-black border border-black rounded-lg"
            value={minCount}
            label="숫자만 입력가능"
            onChange={() => {
              setUserPrefer(gatherInfo());
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PreferContent;
