import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/home/Home';
import List from './components/list/List';

function App() {
  return (
    <StyledContainer>
      <StyledWrap>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </StyledWrap>
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled.main`
  padding: 20px 0;
`;

const StyledWrap = styled.div`
  width: 380px;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
`;
