import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/home/Home';
import List from './components/list/List';

function App() {
  return (
    <StyledWrap>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </StyledWrap>
  );
}

export default App;

const StyledWrap = styled.div`
  width: 380px;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px 0;
`;
