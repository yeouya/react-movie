import style from "./MessageCard.module.css";

interface MessageCardProps {
  title: string;
  text: string;
}

const { article, heading } = style;

export default function MessageCard({ title, text }: MessageCardProps) {
  return (
    <article className={article}>
      <h1 className={heading}>{title}</h1>
      <p>{text}</p>
    </article>
  );
}
