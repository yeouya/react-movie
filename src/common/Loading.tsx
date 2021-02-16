import style from "./Loading.module.css";

const { main, container } = style;

export default function Loading() {
  return (
    <main className={main}>
      <div className={container}></div>
    </main>
  );
}
