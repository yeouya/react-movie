import { Dispatch, SetStateAction, ChangeEvent } from "react";

export type UseInput = [
  string,
  Dispatch<SetStateAction<string>>,
  {
    value: string;
    onChange: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
  }
];
