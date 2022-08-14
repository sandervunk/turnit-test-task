import {Checkbox, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";
import styled from "styled-components";
import {useField} from "react-final-form";
import {FieldType} from "../../../types/FieldType";

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

type Props = {
  nameKey: string;
  value: string | string[] | boolean;
  type: FieldType;
}

export const WritableCell = ({ nameKey, value, type }: Props) => {
  const { input } = useField(`data${nameKey}`);

  switch (type) {
    case FieldType.Checkbox:
      return <CustomCheckbox onChange={input.onChange} defaultChecked={!!value}/>;
    case FieldType.Text:
      return <CustomTextField onChange={input.onChange} defaultValue={value}/>;
    case FieldType.Select:
      return (
        <CustomSelect onChange={input.onChange} defaultValue={value}>
          {names.map((name, key) => <MenuItem value={name} key={key}>{name}</MenuItem>)}
        </CustomSelect>
      );
    case FieldType.MultiSelect:
      return (
        <CustomSelect
          multiple
          onChange={input.onChange}
          input={<OutlinedInput/>}
          defaultValue={value}
        >
          {names.map((name) => (<MenuItem key={name} value={name}>{name}</MenuItem>))}
        </CustomSelect>
      );
  }
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