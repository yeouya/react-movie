import style from "./Loading.module.css";

const { wrapper, container } = style;

export default function Loading() {
  return (
    <main className={wrapper}>
      <div className={container}></div>
    </main>
  );
}
