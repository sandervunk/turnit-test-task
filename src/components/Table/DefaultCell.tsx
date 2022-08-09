import {useState} from "react";
import {Checkbox, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";
import styled from "styled-components";

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export enum FieldType {
  Checkbox,
  Text,
  Select,
  MultiSelect
}

type Props = {
  value: string | string[] | boolean;
  inFocus: boolean;
  fieldType: FieldType;
}

export const DefaultCell = ({ value, inFocus, fieldType }: Props) => {
  const [selectState, setSelectState] = useState<string>(names[0]);
  const [multiSelectState, setMultiSelectState] = useState<string[]>([names[0]]);

  if (inFocus) {
    switch (fieldType) {
      case FieldType.Checkbox:
        return <CustomCheckbox/>;
      case FieldType.Text:
        return <CustomTextField/>;
      case FieldType.Select:
        return (
          <CustomSelect value={selectState} onChange={(e) => setSelectState(e.target.value as string)}>
            {names.map((name, key) => <MenuItem value={name} key={key}>{name}</MenuItem>)}
          </CustomSelect>
        );
      case FieldType.MultiSelect:
        return (
          <CustomSelect
            multiple
            value={multiSelectState}
            onChange={(e) => setMultiSelectState(e.target.value as string[])}
            input={<OutlinedInput/>}
          >
            {names.map((name) => (<MenuItem key={name} value={name}>{name}</MenuItem>))}
          </CustomSelect>
        );
    }
  }


  if (fieldType === FieldType.Checkbox) {
    return <CustomCheckbox checked={Boolean(value)}/>;
  }

  return <span>{String(value)}</span>;
}

const CustomCheckbox = styled(Checkbox)`
  span {
    padding: 0;
  }
`;

const CustomTextField = styled(TextField)`
  input {
    padding: 2px 10px;
  }
`;

const CustomSelect = styled(Select)`
  .MuiSelect-select {
    padding: 2px 30px 2px 10px;
  }
`;