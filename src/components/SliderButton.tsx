import { MouseEvent } from "react";
import { Props } from "../types";
import style from "./SliderButton.module.css";

const { button } = style;

interface SliderButtonProps extends Props {
  direction: "left" | "right";
  onClick(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void;
}

export default function SliderButton({
  direction,
  onClick,
  children,
}: SliderButtonProps) {
  return (
    <button
      className={button}
      type="button"
      data-direction={direction}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
