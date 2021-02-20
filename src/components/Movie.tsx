import { Link } from "react-router-dom";
import { getImage } from "../urls";
import { MovieData } from "../types";
import style from "./Movie.module.css";

interface MovieProps {
  movie: MovieData;
}

const { img } = style;

export default function Movie({
  movie: { id, title, poster_path },
}: MovieProps) {
  const src = getImage(500, poster_path);

  return (
    <figure>
      <Link to={`/detail/${id}`}>
        <img className={img} src={src} alt={title} />
      </Link>
    </figure>
  );
}
