import YouTube from "react-youtube";
import style from "./Trailer.module.css";

const { figure, container, iframe } = style;

interface TrailerProps {
  videoId: string;
}

export default function Trailer({ videoId }: TrailerProps) {
  return (
    <figure className={figure}>
      <YouTube
        containerClassName={container}
        className={iframe}
        videoId={videoId}
      />
    </figure>
  );
}
