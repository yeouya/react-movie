import { useRef, UIEvent } from "react";
import MoviesHeader from "./MoviesHeader";
import Slider from "./Slider";
import Movie from "./Movie";
import { MovieData } from "../types";
import style from "./Movies.module.css";

interface MoviesProps {
  title: string;
  movies: MovieData[];
}

const { section } = style;

export default function Movies({ title, movies }: MoviesProps) {
  const indicatorRef = useRef<HTMLDivElement>(null);

  const handleScroll = ({
    currentTarget: { scrollLeft, scrollWidth, clientWidth },
  }: UIEvent<HTMLDivElement, globalThis.UIEvent>) => {
    const indicator = indicatorRef.current;
    const scrollableArea = scrollWidth - clientWidth;
    const progress = `${Math.round((scrollLeft / scrollableArea) * 100)}%`;

    if (indicator) {
      indicator.style.setProperty("--progress", progress);
    }
  };

  return !movies.length ? (
    <p>{`${title} 정보가 없습니다. 😥`}</p>
  ) : (
    <section className={section}>
      <MoviesHeader title={title} ref={indicatorRef} />
      <Slider onScroll={handleScroll}>
        {movies.map((movie: MovieData) => {
          const { id, poster_path, backdrop_path } = movie;
          if (!poster_path || !backdrop_path) {
            return null;
          }
          return <Movie key={id} movie={movie} />;
        })}
      </Slider>
    </section>
  );
}
