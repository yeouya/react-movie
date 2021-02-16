import YouTube from "react-youtube";
import style from "./Trailer.module.css";

const { wrapper, container, iframe } = style;

interface TrailerProps {
  videoId: string;
}

export default function Trailer({ videoId }: TrailerProps) {
  return (
    <figure className={wrapper}>
      <YouTube
        containerClassName={container}
        className={iframe}
        videoId={videoId}
      />
    </figure>
  );
}
