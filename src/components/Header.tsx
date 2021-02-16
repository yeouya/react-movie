import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import style from "./Header.module.css";

const { wrapper, container, heading } = style;

export default function Header() {
  return (
    <header className={wrapper}>
      <div className={container}>
        <h1 className={heading}>
          <Link to="/">React Movie</Link>
        </h1>
        <SearchForm />
      </div>
    </header>
  );
}
