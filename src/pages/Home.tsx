import { v4 as uuid } from "uuid";
import { useHomeContext } from "../contexts/HomeContext";
import { homeUrls } from "../urls";
import Loading from "../components/Loading";
import Failure from "../components/Failure";
import Main from "../components/Main";
import Movies from "../components/Movies";
import { Data } from "../types";

const titles = homeUrls.map(({ title }) => title);

export default function Home() {
  const { loading, error, data } = useHomeContext();

  return loading ? (
    <Loading />
  ) : error ? (
    <Failure error={error} />
  ) : (
    <Main>
      {data.map(({ results: movies }: Data, index: number) => (
        <Movies key={uuid()} title={titles[index]} movies={movies} />
      ))}
    </Main>
  );
}
