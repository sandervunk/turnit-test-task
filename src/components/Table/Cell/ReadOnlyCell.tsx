import styled from "styled-components";
import {Checkbox} from "@mui/material";
import {FieldType} from "../../../types/FieldType";

type Props = {
  value: string | string[] | boolean;
  type: FieldType;
}

export const ReadOnlyCell = ({ value, type }: Props) => {
  switch (type) {
    case FieldType.Checkbox:
      return <CustomCheckbox checked={Boolean(value)}/>;
    case FieldType.Text:
    case FieldType.Select:
    case FieldType.MultiSelect:
      return <span>{String(value)}</span>;
  }
}

const CustomCheckbox = styled(Checkbox)`
  span {
    padding: 0;
  }
`;