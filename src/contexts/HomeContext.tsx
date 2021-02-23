import { createContext, useContext } from "react";
import useFetchAll from "../hooks/useFetchAll";
import { homeUrls } from "../urls";
import { Data, Props } from "../types";

interface DefaultValue {
  loading: boolean;
  error: Error | null;
  data: Data[];
}

const urls = homeUrls.map(({ url }) => url);

const HomeContext = createContext<DefaultValue | null>(null);

export default function HomeProvider({ children }: Props) {
  const state = useFetchAll(urls);

  return <HomeContext.Provider value={state}>{children}</HomeContext.Provider>;
}

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new ReferenceError("HomeProvider 컴포넌트를 찾을 수 없습니다.");
  }
  return context;
};
