import { MdOutlineClose } from "react-icons/md";
import { usePopUp } from "utils/usePopUp";
import { Timeit } from "react-timeit";
import { useEffect, useState, useRef } from "react";

import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import dayjs from "dayjs";

import { MdInfoOutline } from "react-icons/md";
import { useRecoilState } from "recoil";
import { finderDateTimeSelector } from "recoil/finderAtom";

// 영업시간 체크 함수
function validationTime(time) {
  if (time === null) {
    time = "09:00";
  }
  const numberTime = +time.split(":").join("");

  if (numberTime < 900 || numberTime > 2100) {
    return false;
  }

  return true;
}

const SelectDateTime = ({ popUpInfo }) => {
  const [rclFinderDateTime, setRclFinderDateTime] = useRecoilState(
    finderDateTimeSelector
  );

  const [dateRange, setDateRange] = useState([
    rclFinderDateTime.startDate || null,
    rclFinderDateTime.endDate || null,
  ]);
  const [startDate, endDate] = dateRange;

  const [startTime, setStartTime] = useState(
    rclFinderDateTime.startTime || null
  );
  const [endTime, setEndTime] = useState(rclFinderDateTime.endTime || null);

  return (
    <>
      {/* 팝업 뒤의 어두운 화면 */}
      <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-screen h-screen bg-black bg-opacity-40">
        {/* 팝업 본체 */}
        <div className="bg-white w-[1000px] h-[640px] rounded-2xl flex justify-center items-center select-none">
          <div className="bg-sky-50 w-[960px] h-[600px] rounded-xl relative flex items-center justify-around">
            {/* 닫기 버튼 */}
            <button
              className="absolute top-2 left-2"
              onClick={() => {
                popUpInfo.toggle();
              }}
            >
              <MdOutlineClose size={49} color="gray" />
            </button>
            <div className="flex items-center justify-around ">
              {/* 날짜 시간 선택 메뉴 */}
              <div className="bg-sky-200 w-[400px] h-[400px] rounded-2xl flex flex-col justify-center items-center">
                <div>
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="mb-2 text-2xl font-medium">출발일자</h1>
                    <DatePicker
                      className="w-[300px] border-2 border-slate-300 p-4 mb-6"
                      dateFormat={"yyyy/MM/dd"}
                      selectsRange={true}
                      minDate={new Date()}
                      startDate={startDate}
                      endDate={endDate}
                      onChange={(update) => {
                        setDateRange(update);
                      }}
                      isClearable={true}
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col items-center">
                      <h1 className="mb-2 text-2xl font-medium">출발시간</h1>
                      <Timeit
                        defualtValue={rclFinderDateTime.startTime || "09:00"}
                        hourExclude={[0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23]}
                        minuteExclude={[
                          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                          17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                          31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
                          44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
                          57, 58, 59,
                        ]}
                        onChange={(value) => {
                          setStartTime(value);
                        }}
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <h1 className="mb-2 text-2xl font-medium">도착시간</h1>
                      <Timeit
                        defualtValue={rclFinderDateTime.endTime || "09:00"}
                        hourExclude={[0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23]}
                        minuteExclude={[
                          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                          17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                          31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
                          44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
                          57, 58, 59,
                        ]}
                        onChange={(value) => setEndTime(value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[400px] h-[200px] justify-start items-end">
                {/* 날짜 시간 리마인더 */}
                <div className="">
                  <div className="mb-5">
                    <h1 className="text-lg">출발</h1>
                    <div className="flex justify-between w-[300px] text-2xl">
                      {/* 시작 시간 날짜  */}
                      <div>
                        <span>
                          {isNaN(dayjs(startDate).year())
                            ? "출발일자 선택"
                            : dayjs(startDate).year()}
                        </span>
                        <span>
                          {isNaN(dayjs(startDate).year()) ? "" : "년 "}
                        </span>
                        <span>
                          {isNaN(dayjs(startDate).month() + 1)
                            ? ""
                            : dayjs(startDate).month() + 1}
                        </span>
                        <span>
                          {isNaN(dayjs(startDate).year()) ? "" : "월 "}
                        </span>
                        <span>
                          {isNaN(dayjs(startDate).date())
                            ? ""
                            : dayjs(startDate).date()}
                        </span>
                        <span>
                          {isNaN(dayjs(startDate).year()) ? "" : "일 "}
                        </span>
                      </div>
                      <div>
                        <span>
                          {startTime !== null ? startTime.split(":")[0] : null}
                        </span>
                        <span>시</span>
                        <span>
                          {startTime !== null ? startTime.split(":")[1] : null}
                        </span>
                        <span>분</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <h1 className="text-lg">도착</h1>
                    <div className="flex justify-between w-[300px] text-2xl">
                      <div>
                        <span>
                          {isNaN(dayjs(endDate).year())
                            ? "도착일자 선택"
                            : dayjs(endDate).year()}
                        </span>
                        <span>{isNaN(dayjs(endDate).year()) ? "" : "년 "}</span>
                        <span>
                          {isNaN(dayjs(endDate).month() + 1)
                            ? ""
                            : dayjs(endDate).month() + 1}
                        </span>
                        <span>
                          {isNaN(dayjs(endDate).month()) ? "" : "월 "}
                        </span>
                        <span>
                          {isNaN(dayjs(endDate).date())
                            ? ""
                            : dayjs(endDate).date()}
                        </span>
                        <span>{isNaN(dayjs(endDate).date()) ? "" : "일 "}</span>
                      </div>
                      <div>
                        <span>
                          {endTime !== null ? endTime.split(":")[0] : null}
                        </span>
                        <span>시</span>
                        <span>
                          {endTime !== null ? endTime.split(":")[1] : null}
                        </span>
                        <span>분</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 사용자가 잘못된 시간을 선택했을 경우 확인 버튼 비활성 */}
                {validationTime(startTime) && validationTime(endTime) ? (
                  <>
                    {/* 확인 버튼 */}
                    <button
                      className="flex items-center justify-center px-12 py-2 mt-5 text-xl transition-all ease-in bg-blue-200 rounded-lg hover:bg-amber-400"
                      onClick={() => {
                        const temp = {
                          ...rclFinderDateTime,
                          startDate: startDate,
                          startTime: startTime,
                          endDate: endDate,
                          endTime: endTime,
                        };

                        setRclFinderDateTime(temp);
                        popUpInfo.toggle();
                      }}
                    >
                      확인
                    </button>
                  </>
                ) : (
                  <>
                    <div className="flex items-center text-red-700">
                      <MdInfoOutline className="mr-2" />
                      <span>예약 가능 시간은 09:00 부터 21:00 까지입니다.</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectDateTime;
