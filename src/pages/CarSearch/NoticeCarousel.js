import { Carousel } from "@material-tailwind/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
export default function CarouselWithContent() {
  const dummy = [
    {
      image: "https://thecatapi.com/api/images/get?format=src&type=gif",
      title: "Take a look Take a look",
      paragragh:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, vitae! Quam nemo, recusandae ipsum ab impedit illo, harum fuga repellendus quo esse quisquam vitae explicabo et ipsa, ut perferendis ducimus.",
    },
    {
      image: "https://thecatapi.com/api/images/get?format=src&type=gif",
      title: "떼껄룩",
      paragragh: "카짓은 죽여도 현상금이 걸리지 않는다.",
    },
    {
      image: "https://thecatapi.com/api/images/get?format=src&type=gif",
      title:
        "제목이 매우 김 제목이 매우 김 제목이 매우 김 제목이 매우 김 제목이",
      paragragh:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, vitae! Quam nemo, recusandae ipsum ab impedit illo, harum fuga repellendus quo esse quisquam vitae explicabo et ipsa, ut perferendis ducimus.",
    },
  ];

  return (
    <Carousel
      className="select-none rounded-xl shadow-figma"
      prevArrow={prevArrowCustom}
      nextArrow={nextArrowCustom}
      navigation={navigationCustom}
      autoplay={true}
      loop={true}
    >
      {dummy.map((v, i) => {
        return (
          <div className="relative w-full h-full" key={i}>
            <div className="absolute inset-0 grid w-full h-full bg-blue-100 place-items-center">
              <div className="flex flex-col items-center justify-start w-full h-full">
                <img
                  className="w-[160px] h-[114px] object-cover mt-[23px] rounded-xl"
                  src={v.image}
                  alt=""
                />

                <h1 className="w-[200px] text-xl font-bold text-center text-blue-900 line-clamp-2 m-4">
                  {v.title}
                </h1>

                <p className=" w-[200px] line-clamp-6">{v.paragragh}</p>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

function prevArrowCustom({ loop, handlePrev, firstIndex }) {
  return (
    <button
      onClick={handlePrev}
      disabled={!loop && firstIndex}
      className="!absolute top-[80px] left-1 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
    >
      <MdChevronLeft color="black" size={30} className="-ml-1 h-7 w-7" />
    </button>
  );
}

function nextArrowCustom({ loop, handleNext, lastIndex }) {
  return (
    <button
      onClick={handleNext}
      disabled={!loop && lastIndex}
      className="!absolute top-[80px] right-1 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
    >
      <MdChevronRight color="black" size={30} className="ml-1 h-7 w-7" />
    </button>
  );
}

function navigationCustom({ setActiveIndex, activeIndex, length }) {
  return (
    <div className="absolute z-50 flex gap-2 bottom-10 left-2/4 -translate-x-2/4">
      {new Array(length).fill("").map((_, i) => (
        <span
          key={i}
          className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] border-2 border-black ${
            activeIndex === i ? "bg-blue-500" : "bg-white"
          }`}
          onClick={() => setActiveIndex(i)}
        />
      ))}
    </div>
  );
}
