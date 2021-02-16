import { FormEvent } from "react";
import { useHistory } from "react-router-dom";
import useInput from "../hooks/useInput";
import { FcSearch } from "react-icons/fc";
import { MdClose } from "react-icons/md";
import style from "./SearchForm.module.css";

const { form, input, icon } = style;

export default function SearchForm() {
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
    <form className={form} onSubmit={handleSubmit}>
      <span className={icon}>
        <FcSearch />
      </span>
      <input className={input} type="search" title="검색" {...bindQuery} />
      <span className={icon} onClick={handleClick}>
        <MdClose />
      </span>
    </form>
  );
}
