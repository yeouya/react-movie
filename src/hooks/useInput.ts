import { useState, Dispatch, SetStateAction, ChangeEvent } from "react";

type UseInput = [
  string,
  Dispatch<SetStateAction<string>>,
  {
    value: string;
    onChange: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
  }
];

export default function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  const bindValue = { value, onChange: handleChange };

  return [value, setValue, bindValue] as UseInput;
}
