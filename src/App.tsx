import React from 'react';
import {Header} from './components/Header';
import styled from "styled-components";
import {Grid} from "./components/Grid";

function App() {
  return (
    <>
      <Header/>
      <Body>
        <Grid/>
      </Body>
    </>
  );
}

const Body = styled.div`
  margin: 24px;
`;

export default App;
