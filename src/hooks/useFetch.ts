import { useReducer, useEffect } from "react";

const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";
const COMPLETE = "COMPLETE";

const success = (payload: any) => ({ type: SUCCESS, payload });
const failure = (payload: any) => ({ type: FAILURE, payload });
const complete = () => ({ type: COMPLETE });

const initialState = {
  data: null,
  error: null,
  loading: true,
};

const reducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case SUCCESS:
      return { ...state, data: payload };
    case FAILURE:
      return { ...state, error: payload };
    case COMPLETE:
      return { ...state, loading: false };
  }
};

export default function useFetch(url: string) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(success(data)))
      .catch((err) => dispatch(failure(err)))
      .finally(() => dispatch(complete()));
  }, [url]);

  return state;
}
