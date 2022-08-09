import {Check, Close, Edit} from "@mui/icons-material";
import styled from "styled-components";

type Props = {
  inFocus: boolean;
  onSave: () => void;
  onStartEdit: () => void;
  onEndEdit: () => void;
}

export const ActionCell = ({inFocus, onSave, onStartEdit, onEndEdit}: Props) => {
  if(inFocus) {
    return (
      <FlexBox>
        <Check onClick={onSave} fontSize="small"/>
        <Close onClick={onEndEdit} fontSize="small"/>
      </FlexBox>
    )
  }

  return (
    <Edit onClick={onStartEdit} fontSize="small"/>
  );
}

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

