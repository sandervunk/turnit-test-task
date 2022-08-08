import React from 'react';
import {Header} from './components/Header';
import styled from "styled-components";
import {Tabs} from "./components/Tabs";

function App() {
  return (
    <>
      <Header/>
      <Body>
        <Tabs/>
      </Body>
    </>
  );
}

const Body = styled.div`
  margin: 24px;
`;

export default App;
