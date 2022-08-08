import styled from "styled-components";
import {Add, DeleteOutline} from '@mui/icons-material';

type Props = {
  addNewRow: () => void;
}

export const ActionBar = ({addNewRow}: Props) => {
  return (
    <Wrapper>
      <FlexBox>
        <input type="checkbox" checked/>
        <div>Show active points of sale</div>
      </FlexBox>
      <FlexBox>
        <Action>
          <DeleteOutline/>
          <div>Delete selected</div>
        </Action>
        <Action onClick={addNewRow}>
          <Add/>
          <div>Add new</div>
        </Action>
      </FlexBox>
    </Wrapper>
  )
}

const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #4B00FF;
  cursor: pointer;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
`;