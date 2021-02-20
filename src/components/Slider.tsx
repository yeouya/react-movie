import { useRef, UIEvent, MouseEvent } from "react";
import SliderButton from "./SliderButton";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Props } from "../types";
import style from "./Slider.module.css";

const { wrapper, slider } = style;

interface SliderProps extends Props {
  onScroll(e: UIEvent<HTMLDivElement, globalThis.UIEvent>): void;
}

export default function Slider({ onScroll, children }: SliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleClick = ({
    currentTarget: {
      dataset: { direction },
    },
  }: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    const slider = sliderRef.current;

    if (slider) {
      const { clientWidth } = slider;
      const sliderGap = parseInt(getComputedStyle(slider).gap);
      const movement = clientWidth + sliderGap;

      switch (direction) {
        case "left":
          slider.scrollLeft -= movement;
          break;
        case "right":
          slider.scrollLeft += movement;
          break;
      }
    }
  };

  return (
    <div className={wrapper}>
      <SliderButton direction="left" onClick={handleClick}>
        <MdKeyboardArrowLeft />
      </SliderButton>
      <div className={slider} ref={sliderRef} onScroll={onScroll}>
        {children}
      </div>
      <SliderButton direction="right" onClick={handleClick}>
        <MdKeyboardArrowRight />
      </SliderButton>
    </div>
  );
}
