import {HTMLInputTypeAttribute} from "react";

type Props = {
  value: string | string[] | boolean;
  name: string;
  inFocus: boolean;
  inputType: HTMLInputTypeAttribute;
}

export const DefaultCell = ({value, inFocus, inputType}: Props) => {
  if (inFocus) {
    return <input type={inputType} value={String(value)}/>
  }

  return <span>{String(value)}</span>;
}