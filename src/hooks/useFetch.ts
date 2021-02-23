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

export default function useFetch(url: string) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        dispatch({ type: ActionType.SUCCESS, data });
      } catch (error) {
        dispatch({ type: ActionType.FAILURE, error });
      } finally {
        dispatch({ type: ActionType.COMPLETE });
      }
    })();
  }, [url]);

  return state;
}
