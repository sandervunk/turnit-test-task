import styled from "styled-components";

export const Logo = () => {
  return (
    <Wrapper>
      <div>
        <WhiteBlock/>
        <WhiteBlock/>
      </div>
      <div>
        <WhiteBlock/>
        <WhiteBlock/>
      </div>
    </Wrapper>
  )
}

const WhiteBlock = styled.div`
  height: 4px;
  width: 4px;
  margin: 2px 1px;
  border: 1px solid white;
`;

const Wrapper = styled.div`
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4B00FF;
`;