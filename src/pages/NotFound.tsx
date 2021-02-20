import style from "./NotFound.module.css";

const { main, container, article } = style;

export default function NotFound() {
  return (
    <main className={main}>
      <div className={container}>
        <article className={article}>
          <h1>404 Error</h1>
          <p>요청하신 페이지를 찾지 못했습니다.</p>
        </article>
      </div>
    </main>
  );
}
