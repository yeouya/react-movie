import { useState } from "react";
import { getImageUrl } from "../urls";
import Modal from "../common/Modal";
import Trailer from "../components/Trailer";
import Movies from "../components/Movies";
import { MovieData } from "../types";
import style from "./DetailBody.module.css";

interface DetailBodyProps {
  movie: MovieData;
  movies: MovieData[];
  trailer: { key: string };
}

const { wrapper, container, figure, img, synopsis, button } = style;

export default function DetailBody({
  movie: { poster_path, title, overview },
  movies,
  trailer,
}: DetailBodyProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const src = getImageUrl(500, poster_path);

  return (
    <div className={wrapper}>
      <div className={container}>
        <figure className={figure}>
          <img className={img} src={src} alt={title} />
          <figcaption
            style={{
              display: "grid",
              alignContent: "space-between",
              gap: "2rem",
            }}
          >
            <div style={{ display: "grid", gap: "0.5rem" }}>
              <p className={synopsis}>synopsis</p>
              {overview ? overview : "데이터가 존재하지 않습니다. 😥"}
            </div>
            {trailer && (
              <>
                <button className={button} type="button" onClick={handleClick}>
                  예고편 미리보기
                </button>
                <Modal
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  target="#modal-root"
                >
                  <Trailer videoId={trailer.key} />
                </Modal>
              </>
            )}
          </figcaption>
        </figure>
        <Movies title="비슷한 영화" movies={movies} />
      </div>
    </div>
  );
}
