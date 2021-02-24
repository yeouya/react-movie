import { Link } from "react-router-dom";
import { getImageUrl } from "../urls";
import { MovieData } from "../types";
import style from "./Movie.module.css";

interface MovieProps {
  movie: MovieData;
}

const { figure, img } = style;

export default function Movie({
  movie: { id, title, poster_path },
}: MovieProps) {
  const src = getImageUrl(500, poster_path);

  return (
    <figure className={figure}>
      <Link to={`/detail/${id}`}>
        <img className={img} src={src} alt={title} />
      </Link>
    </figure>
  );
}
