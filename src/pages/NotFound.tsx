import Main from "../components/Main";
import style from "./NotFound.module.css";

const { article } = style;

export default function NotFound() {
  return (
    <Main style={{ display: "grid", placeContent: "center" }}>
      <article className={article}>
        <h1>404 Error</h1>
        <p>요청하신 페이지를 찾지 못했습니다.</p>
      </article>
    </Main>
  );
}
