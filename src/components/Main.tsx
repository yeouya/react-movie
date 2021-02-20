import { HTMLAttributes } from "react";
import style from "./Main.module.css";

const { main, container } = style;

export default function Main({
  children,
  ...restProps
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <main className={main}>
      <div className={container} {...restProps}>
        {children}
      </div>
    </main>
  );
}
