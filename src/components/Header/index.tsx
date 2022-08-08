import styled from "styled-components";
import {Logo} from "./Logo";
import {KeyboardArrowDownOutlined, PersonOutline} from "@mui/icons-material";

export const Header = () => {
  return (
    <Wrapper>
      <LeftContainer>
        <Logo/>
        {Array.from(Array(4).keys()).map((i, key) => <MenuItem key={key}>{`Menu item ${i + 1}`}</MenuItem>)}
      </LeftContainer>

      <RightContainer>
        <PersonOutline/>
        Company name
        <KeyboardArrowDownOutlined/>
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
  gap: 15px;
  margin-right: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;