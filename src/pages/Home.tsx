import { v4 as uuid } from "uuid";
import useFetchAll from "../hooks/useFetchAll";
import { homeUrls } from "../urls";
import Loading from "../common/Loading";
import Failure from "../common/Failure";
import Movies from "../components/Movies";
import { Data } from "../types";
import style from "./Home.module.css";

const urls = homeUrls.map(({ url }) => url);
const titles = homeUrls.map(({ title }) => title);

const { main, container } = style;

export default function Home() {
  const { loading, error, data } = useFetchAll(urls);

  return loading ? (
    <Loading />
  ) : error ? (
    <Failure error={error} />
  ) : (
    <main className={main}>
      <div className={container}>
        {data.map(({ results: movies }: Data, index: number) => (
          <Movies key={uuid()} title={titles[index]} movies={movies} />
        ))}
      </div>
    </main>
  );
}
