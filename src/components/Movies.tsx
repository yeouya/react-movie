import { useRef, UIEvent, MouseEvent } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Indicator from "../common/Indicator";
import Movie from "./Movie";
import { MovieData } from "../types";
import style from "./Movies.module.css";

interface MoviesProps {
  title: string;
  movies: MovieData[];
}

const { section, header, heading, sliderContainer, slider, button } = style;

export default function Movies({ title, movies }: MoviesProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const handleClick = ({
    currentTarget: {
      dataset: { direction },
    },
  }: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    const slider = sliderRef.current;

    if (slider) {
      const { clientWidth } = slider;
      const sliderGap = parseInt(getComputedStyle(slider).gap);
      const movement = clientWidth + sliderGap;

      switch (direction) {
        case "left":
          slider.scrollLeft -= movement;
          break;
        case "right":
          slider.scrollLeft += movement;
          break;
      }
    }
  };

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
      <header className={header}>
        <h1 className={heading}>{title}</h1>
        <Indicator ref={indicatorRef} />
      </header>
      <div className={sliderContainer}>
        <button
          className={button}
          type="button"
          data-direction="left"
          onClick={handleClick}
        >
          <MdKeyboardArrowLeft />
        </button>
        <div className={slider} ref={sliderRef} onScroll={handleScroll}>
          {movies.map((movie: MovieData) => {
            const { id, poster_path, backdrop_path } = movie;
            if (!poster_path || !backdrop_path) {
              return null;
            }
            return <Movie key={id} movie={movie} />;
          })}
        </div>
        <button
          className={button}
          type="button"
          data-direction="right"
          onClick={handleClick}
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </section>
  );
}
