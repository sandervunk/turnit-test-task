import {Check, Close, Edit} from "@mui/icons-material";
import styled from "styled-components";
import {useForm} from "react-final-form";

type Props = {
  inFocus: boolean;
  onStartEdit: () => void;
  onEndEdit: () => void;
}

export const ActionCell = ({ inFocus, onStartEdit, onEndEdit }: Props) => {
  const { submit } = useForm();

  if (inFocus) {
    return (
      <FlexBox>
        <Check
          onClick={() => {
            submit();
            onEndEdit();
          }}
          fontSize="small"
        />
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

