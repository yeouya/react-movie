import { forwardRef } from "react";
import style from "./Indicator.module.css";

const { wrapper } = style;

export default forwardRef<HTMLDivElement>(function Indicator(_, ref) {
  return <div className={wrapper} ref={ref}></div>;
});
