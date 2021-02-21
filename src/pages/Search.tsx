import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import Failure from "../components/Failure";
import Main from "../components/Main";
import MessageCard from "../components/MessageCard";
import SearchResult from "../components/SearchResult";

export default function Search() {
  const { query } = useParams<{ query: string }>();
  const { loading, error, data } = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&include_adult=true&language=ko-KR`
  );

  return loading ? (
    <Loading />
  ) : error ? (
    <Failure error={error} />
  ) : !data.results.length ? (
    <Main center>
      <MessageCard title={`"${query}"`} text="검색 결과를 찾지 못했습니다." />
    </Main>
  ) : (
    <Main>
      <SearchResult title={`"${query}" 검색 결과`} movies={data.results} />
    </Main>
  );
}
