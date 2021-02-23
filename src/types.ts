import { ReactNode } from "react";

export interface Props {
  children?: ReactNode;
}

export interface MovieData {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  genres: { name: string }[];
  runtime: string;
}

export interface Data {
  results: MovieData[];
}
