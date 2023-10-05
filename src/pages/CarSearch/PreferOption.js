import { Checkbox, Input } from "@material-tailwind/react";

const PreferOption = ({ title, content, userPrefer, userInfo }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full px-4 font-bold text-medium">
        {/* 항목 타이틀 */}
        <div className="text-gray-50000">{title}</div>
        {title !== "최소 인원" ? (
          /* 차량 크기, 유종, 구동기 -> Checkbox */
          <div className="grid grid-cols-2 ">
            {content.map((v, i) => {
              return (
                <div className="" key={i}>
                  <Checkbox
                    id={v}
                    label={v}
                    ripple={true}
                    labelProps={{
                      className: "font-semibold text-black !mt-1",
                    }}
                    defaultChecked={userPrefer[i]}
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
              className="!text-xl !font-bold !text-black !h-[45px]"
              defaultValue={userInfo.prefer.minCount}
              label="숫자만 입력가능"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PreferOption;
