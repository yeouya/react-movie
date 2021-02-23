import { v4 as uuid } from "uuid";
import { FaRegStar } from "react-icons/fa";
import style from "./StarRating.module.css";

const { wrapper, icon } = style;

interface StarRatingProps {
  value: number;
}

export default function StarRating({ value }: StarRatingProps) {
  return (
    <span className={wrapper}>
      {Array.from(Array(5), (_, index) => {
        const starCount = index + 1;

        if (starCount <= value) {
          return (
            <span key={uuid()} className={icon}>
              <FaRegStar color="orange" />
            </span>
          );
        }
        return (
          <span key={uuid()} className={icon}>
            <FaRegStar />
          </span>
        );
      })}
    </span>
  );
}
