import Main from "./Main";
import style from "./Loading.module.css";

const { spinner } = style;

export default function Loading() {
  return (
    <Main center>
      <div className={spinner}></div>
    </Main>
  );
}
