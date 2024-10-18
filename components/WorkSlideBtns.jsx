"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSlideBtns = ({ containerStyle, btnStyle, icontStyle }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyle}>
      <button className={btnStyle} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={icontStyle} />
      </button>
      <button className={btnStyle} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={icontStyle} />
      </button>
    </div>
  );
};

export default WorkSlideBtns;
