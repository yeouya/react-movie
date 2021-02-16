import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import style from "./Header.module.css";

const { header, container, heading } = style;

export default function Header() {
  return (
    <header className={header}>
      <div className={container}>
        <h1 className={heading}>
          <Link to="/">React Movie</Link>
        </h1>
        <SearchForm />
      </div>
    </header>
  );
}
