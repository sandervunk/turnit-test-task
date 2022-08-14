import {WritableCell} from "./WritableCell";
import {ReadOnlyCell} from "./ReadOnlyCell";
import {FieldType} from "../../../types/FieldType";

type Props = {
  nameKey: string;
  value: string | string[] | boolean;
  inFocus: boolean;
  type: FieldType;
}

export const Cell = ({ nameKey, value, inFocus, type }: Props) => {
  return (
    inFocus ? <WritableCell nameKey={nameKey} value={value} type={type}/> : <ReadOnlyCell value={value} type={type}/>
  );
}