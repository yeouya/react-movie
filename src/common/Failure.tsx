import style from "./Failure.module.css";

const { wrapper, container } = style;

interface FailureProps {
  error: {
    name: string;
    message: string;
  };
}

export default function Failure({ error: { name, message } }: FailureProps) {
  return (
    <main className={wrapper}>
      <article className={container}>
        <h1>{`${name}: ${message}`}</h1>
        <p>잠시 후에 다시 시도해주세요.</p>
      </article>
    </main>
  );
}
