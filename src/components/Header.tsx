import { FormEvent } from "react";
import { useHistory, Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { MdClose } from "react-icons/md";
import useInput from "../hooks/useInput";
import style from "./Header.module.css";

const { header, container, heading, form, input, icon } = style;

export default function Header() {
  const [query, setQuery, bindQuery] = useInput();
  const { push } = useHistory();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }
    push(`/search/${query}`);
    setQuery("");
  };

  const handleClick = () => {
    setQuery("");
  };

  return (
    <header className={header}>
      <div className={container}>
        <h1 className={heading}>
          <Link to="/">react movie</Link>
        </h1>
        <form className={form} onSubmit={handleSubmit}>
          <span className={icon}>
            <FcSearch />
          </span>
          <input className={input} type="search" title="검색" {...bindQuery} />
          <span className={icon} onClick={handleClick}>
            <MdClose />
          </span>
        </form>
      </div>
    </header>
  );
}
