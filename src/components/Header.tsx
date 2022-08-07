import styled from "styled-components";
import {Logo} from "./Logo";

export const Header = () => {
  return (
    <Wrapper>
      <LeftContainer>
        <Logo/>
        {Array.from(Array(4).keys()).map((i, key) => <MenuItem key={key}>{`Menu item ${i + 1}`}</MenuItem>)}
      </LeftContainer>

      <RightContainer>
        Company name
        <Icon/>
      </RightContainer>
    </Wrapper>
  );
}

const MenuItem = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding-right: 30px;

  :not(:last-of-type) {
    border-right: 2px solid black;
  }
`;

const Icon = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 30px;
  background: #505050;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  margin-right: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;