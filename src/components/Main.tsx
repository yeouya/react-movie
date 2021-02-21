import { HTMLAttributes } from "react";
import style from "./Main.module.css";

interface MainProps extends HTMLAttributes<HTMLDivElement> {
  center?: boolean;
}

const { main, container, placeCenter } = style;

export default function Main({ center, children, ...restProps }: MainProps) {
  return (
    <main className={main}>
      <div className={`${container} ${center && placeCenter}`} {...restProps}>
        {children}
      </div>
    </main>
  );
}
