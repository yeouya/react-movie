import { HTMLAttributes } from "react";
import style from "./SliderButton.module.css";

const { button } = style;

export default function SliderButton({
  children,
  ...restProps
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={button} type="button" {...restProps}>
      {children}
    </button>
  );
}
