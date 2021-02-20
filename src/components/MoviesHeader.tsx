import { forwardRef } from "react";
import Indicator from "../common/Indicator";
import style from "./MoviesHeader.module.css";

const { header, heading } = style;

interface MoviesHeaderProps {
  title: string;
}

export default forwardRef<HTMLDivElement, MoviesHeaderProps>(
  function MoviesHeader({ title }, ref) {
    return (
      <header className={header}>
        <h1 className={heading}>{title}</h1>
        <Indicator ref={ref} />
      </header>
    );
  }
);
