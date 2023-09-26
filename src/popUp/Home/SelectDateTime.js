import { MdOutlineClose } from "react-icons/md";
import { usePopUp } from "utils/usePopUp";
import { Timeit } from "react-timeit";
import { useEffect, useState, useRef } from "react";

import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import dayjs from "dayjs";

const SelectDateTime = () => {
  const popUpInfo = usePopUp("Home/SelectDateTime");

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  useEffect(() => {
    console.log(startDate, endDate, startTime, endTime);

    console.log(
      dayjs(startDate).year(),
      dayjs(startDate).month() + 1,
      dayjs(startDate).date()
    );
  }, [endDate, endTime, startDate, startTime]);

  return (
    <>
      {/* 팝업 뒤의 어두운 화면 */}
      <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-screen h-screen bg-black bg-opacity-40">
        {/* 팝업 본체 */}
        <div className="bg-white w-[1000px] h-[640px] rounded-2xl flex justify-center items-center ">
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
                        minuteExclude={[
                          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                          17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                          31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
                          44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
                          57, 58, 59,
                        ]}
                        onChange={(value) => setStartTime(value)}
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <h1 className="mb-2 text-2xl font-medium">도착시간</h1>
                      <Timeit
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
              <div className="flex flex-col w-[400px] h-[200px] justify-center items-center">
                {/* 날짜 시간 리마인더 */}
                <div className="">
                  <div className="mb-5">
                    <h1>출발</h1>
                    <div className="text-2xl">
                      <span>
                        {isNaN(dayjs(startDate).year())
                          ? ""
                          : dayjs(startDate).year()}
                      </span>
                      <span> 년 </span>
                      <span>
                        {isNaN(dayjs(startDate).month() + 1)
                          ? ""
                          : dayjs(startDate).month() + 1}
                      </span>
                      <span> 월 </span>
                      <span>
                        {isNaN(dayjs(startDate).date())
                          ? ""
                          : dayjs(startDate).date()}
                      </span>
                      <span> 일 </span>
                    </div>
                  </div>
                  <div>
                    <h1>도착</h1>
                    <div className="text-2xl">
                      <span>
                        {isNaN(dayjs(endDate).year())
                          ? ""
                          : dayjs(endDate).year()}
                      </span>
                      <span> 년 </span>
                      <span>
                        {isNaN(dayjs(endDate).month() + 1)
                          ? ""
                          : dayjs(endDate).month() + 1}
                      </span>
                      <span> 월 </span>
                      <span>
                        {isNaN(dayjs(endDate).date())
                          ? ""
                          : dayjs(endDate).date()}
                      </span>
                      <span> 일 </span>
                    </div>
                  </div>
                </div>
                <button>helllo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectDateTime;
