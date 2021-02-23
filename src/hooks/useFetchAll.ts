import { useReducer, useEffect } from "react";

interface State {
  data: any;
  error: Error | null;
  loading: boolean;
}

enum ActionType {
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
  COMPLETE = "COMPLETE",
}

type Action =
  | { type: ActionType.SUCCESS; data: any }
  | { type: ActionType.FAILURE; error: Error }
  | { type: ActionType.COMPLETE };

const initialState = {
  data: null,
  error: null,
  loading: true,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.SUCCESS:
      return { ...state, data: action.data };
    case ActionType.FAILURE:
      return { ...state, error: action.error };
    case ActionType.COMPLETE:
      return { ...state, loading: false };
    default:
      throw new SyntaxError("유효하지 않은 액션 타입입니다.");
  }
};

export default function useFetchAll(urls: string[]) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const requests = urls.map((url) => fetch(url));
        const results = await Promise.allSettled(requests);
        const data = await Promise.all(
          results.map(async (result) => {
            try {
              const { status } = result;
              if (status === "fulfilled") {
                return await (result as PromiseFulfilledResult<Response>).value.json();
              } else {
                return (result as PromiseRejectedResult).reason;
              }
            } catch (error) {
              throw error;
            }
          })
        );
        dispatch({ type: ActionType.SUCCESS, data });
      } catch (error) {
        console.error(error);
        dispatch({ type: ActionType.FAILURE, error });
      } finally {
        dispatch({ type: ActionType.COMPLETE });
      }
    })();
  }, [urls]);

  return state;
}
