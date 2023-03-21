import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const HandleNext = () => {
    console.log("next");
    setTtranslateSize(ttranslateSize + 100);
    if (ttranslateSize == (images.length - 2) * 100) {
      setTtranslateSize(0);
    }
    console.log(ttranslateSize);
  };

  const HandlePrev = () => {
    console.log("prev");
    setTtranslateSize(ttranslateSize - 100);

    if (ttranslateSize == 0) {
      setTtranslateSize((images.length - 2) * 100);
    }

    console.log(ttranslateSize);
  };

  const [current, setCurrent] = useState(0);

  const [ttranslateSize, setTtranslateSize] = useState(0);

  const images = [
    "https://aseelapp.com/media/wysiwyg/slider/aseel-banner-1.jpg",
    "https://aseelapp.com/media/wysiwyg/slider/aseel-banner-2.jpg",
    "https://aseelapp.com/media/wysiwyg/slider/aseel-banner-3.jpg",
    "https://aseelapp.com/media/wysiwyg/slider/aseel-banner-4.jpg",
  ];
  return (
    <>
      <div className="w-full h-[80vh] my-[10vh]">
        <div className="z-10 absolute top-[50%] left-[1%]" onClick={HandlePrev}>
          {/* clippath for prev button circle inside arrow */}
          <div className="w-[40px] h-[40px] bg-[rgba(100, 100, 100, 0.5)] border-black border-2 hover:bg-[rgb(0,94,142)] rounded-full flex justify-center items-center hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-row overflow-hidden">
          {images.map((image, index) => (
            <img
              src={image}
              alt=""
              className={`w-full min-w-[100%] h-full -translate-x-[${ttranslateSize}%] transition-all duration-500 ease-in-out `}
              key={index}
            />
          ))}
        </div>

        <div
          className="z-10 absolute top-[50%] right-[1%]"
          onClick={HandleNext}
        >
          {/* clippath for next button circle inside arrow */}
          <div className="w-[40px] h-[40px] bg-[rgba(100, 100, 100, 0.5)] border-black border-2 hover:bg-[rgb(0,94,142)] rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

// drag with mouse instead of click the buttons mind map

/**
 * scroll.left, get width of element
 * then pass it to scroll.left and onClick scroll it by that amount!
 *
 */

export default Home;
