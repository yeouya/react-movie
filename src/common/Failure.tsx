import style from "./Failure.module.css";

interface FailureProps {
  error: {
    name: string;
    message: string;
  };
}

const { main, container, article } = style;

export default function Failure({ error: { name, message } }: FailureProps) {
  return (
    <main className={main}>
      <div className={container}>
        <article className={article}>
          <h1>{`${name}: ${message}`}</h1>
          <p>잠시 후에 다시 시도해주세요.</p>
        </article>
      </div>
    </main>
  );
}