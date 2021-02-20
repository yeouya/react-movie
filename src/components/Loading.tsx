import Main from "./Main";
import style from "./Loading.module.css";

const { spinner } = style;

export default function Loading() {
  return (
    <Main style={{ display: "grid", placeContent: "center" }}>
      <div className={spinner}></div>
    </Main>
  );
}
