import { FcCalendar, FcClock } from "react-icons/fc";
import { FaTags } from "react-icons/fa";
import { getImageUrl } from "../urls";
import StarRating from "../common/StarRating";
import { MovieData } from "../types";
import style from "./DetailHead.module.css";

interface BackdropProps {
  movie: MovieData;
}

const { wrapper, container, heading, movieInfo, subInfo } = style;

export default function Backdrop({
  movie: {
    backdrop_path,
    title,
    vote_average,
    vote_count,
    release_date,
    genres,
    runtime,
  },
}: BackdropProps) {
  const wrapperStyle = {
    backgroundImage: `url(${getImageUrl(1280, backdrop_path)})`,
  };

  return (
    <div className={wrapper} style={wrapperStyle}>
      <div className={container}>
        <h1 className={heading}>{title}</h1>
        <div className={movieInfo}>
          <StarRating value={Math.round(vote_average / 2)} />
          {`${vote_average} (${vote_count}명)`}
        </div>
        <div className={movieInfo}>
          <span className={subInfo}>
            <FcCalendar />
            {release_date}
          </span>
          <span className={subInfo}>
            <FaTags />
            {genres.map(({ name }: { name: string }) => name).join(", ")}
          </span>
          <span className={subInfo}>
            <FcClock />
            {`${runtime}분`}
          </span>
        </div>
      </div>
    </div>
  );
}
