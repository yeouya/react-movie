import Main from "./Main";
import MessageCard from "./MessageCard";

interface FailureProps {
  error: {
    name: string;
    message: string;
  };
}

export default function Failure({ error: { name, message } }: FailureProps) {
  return (
    <Main style={{ display: "grid", placeContent: "center" }}>
      <MessageCard
        title={`${name}: ${message}`}
        text="잠시 후에 다시 시도해주세요."
      />
    </Main>
  );
}
