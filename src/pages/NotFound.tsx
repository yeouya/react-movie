import Main from "../components/Main";
import MessageCard from "../components/MessageCard";

export default function NotFound() {
  return (
    <Main style={{ display: "grid", placeContent: "center" }}>
      <MessageCard
        title="404 Error"
        text="요청하신 페이지를 찾지 못했습니다."
      />
    </Main>
  );
}
