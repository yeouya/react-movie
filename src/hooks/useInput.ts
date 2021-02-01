import { useState, ChangeEvent } from "react";
import { UseInput } from "../types";

export default function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  const bindValue = { value, onChange: handleChange };

  const result: UseInput = [value, setValue, bindValue];

  return result;
}
