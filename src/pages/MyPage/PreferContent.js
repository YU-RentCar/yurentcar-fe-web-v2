import { Checkbox, Input } from "@material-tailwind/react";

const PreferContent = ({
  title,
  content,
  userPrefer,
  minCount,
  setUserPrefer,
  gatherInfo,
}) => {
  return (
    <div className="w-[1010px] h-40 bg-white rounded-2xl flex items-center px-8 mt-7">
      <div className="flex flex-col justify-between w-full h-24 text-2xl font-bold">
        <div className="text-slate-400">{title}</div>
        {title !== "최소 인원" ? (
          /* 차량 크기, 유종, 구동기 -> Checkbox */
          <div className="flex items-center mx-auto">
            {content.map((v, i) => {
              return (
                <div className="w-32 mx-4" key={i}>
                  <Checkbox
                    id={v}
                    label={v}
                    ripple={true}
                    labelProps={{ className: "font-semibold text-black" }}
                    checked={userPrefer[i]}
                    onChange={setUserPrefer(gatherInfo())}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          /* 최소 인원 -> Input */
          <div className="flex items-center w-48 h-full mx-auto">
            <Input
              id="minCount"
              type="number"
              className="!text-3xl !font-bold !text-black !h-[65px]"
              value={minCount}
              label="숫자만 입력가능"
              labelProps={{ className: "border-black text-lg" }}
              onChange={setUserPrefer(gatherInfo())}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PreferContent;
