import Movie from "./Movie";
import { MovieData } from "../types";
import style from "./SearchResult.module.css";

interface SearchResultProps {
  title: string;
  movies: MovieData[];
}

const { section, heading, grid } = style;

export default function SearchResult({ title, movies }: SearchResultProps) {
  return (
    <section className={section}>
      <h1 className={heading}>{title}</h1>
      <div className={grid}>
        {movies.map((movie: MovieData) => {
          const { id, poster_path, backdrop_path } = movie;
          if (!poster_path || !backdrop_path) {
            return null;
          }
          return <Movie key={id} movie={movie} />;
        })}
      </div>
    </section>
  );
}
