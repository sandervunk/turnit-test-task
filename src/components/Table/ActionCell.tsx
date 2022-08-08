import {Check, Close, Edit} from "@mui/icons-material";
import styled from "styled-components";

type Props = {
  rowId: string;
  inFocus: boolean;
  onSave: (id: string) => void;
  onStartEdit: (id: string) => void;
  onEndEdit: () => void;
}

export const ActionCell = ({rowId, inFocus, onSave, onStartEdit, onEndEdit}: Props) => {
  if(inFocus) {
    return (
      <FlexBox>
        <Check onClick={() => onSave(rowId)} fontSize="small"/>
        <Close onClick={onEndEdit} fontSize="small"/>
      </FlexBox>
    )
  }

  return (
    <Edit onClick={() => onStartEdit(rowId)} fontSize="small"/>
  );
}

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

