import { useRef } from "react";
import { useParams } from "react-router-dom";
import useFetchAll from "../hooks/useFetchAll";
import { getDetailUrls } from "../urls";
import Loading from "../components/Loading";
import Failure from "../components/Failure";
import DetailHead from "../components/DetailHead";
import DetailBody from "../components/DetailBody";

export default function Detail() {
  const { id } = useParams<{ id: string }>();
  const urls = useRef(getDetailUrls(id));
  const { loading, error, data } = useFetchAll(urls.current);

  return loading ? (
    <Loading />
  ) : error ? (
    <Failure error={error} />
  ) : (
    <main>
      <DetailHead movie={data[0]} />
      <DetailBody
        movie={data[0]}
        movies={data[1].results}
        trailer={data[2].results[0]}
      />
    </main>
  );
}
