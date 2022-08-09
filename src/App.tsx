import React from 'react';
import {NavBar} from './components/NavBar';
import styled from "styled-components";
import {Tabs} from "./components/Tabs";

function App() {
  return (
    <>
      <NavBar/>
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
