import { useRef, HTMLAttributes, MouseEvent } from "react";
import SliderButton from "./SliderButton";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import style from "./Slider.module.css";

const { wrapper, slider } = style;

export default function Slider({
  children,
  ...restProps
}: HTMLAttributes<HTMLDivElement>) {
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
      <SliderButton data-direction="left" onClick={handleClick}>
        <MdKeyboardArrowLeft />
      </SliderButton>
      <div className={slider} ref={sliderRef} {...restProps}>
        {children}
      </div>
      <SliderButton data-direction="right" onClick={handleClick}>
        <MdKeyboardArrowRight />
      </SliderButton>
    </div>
  );
}
