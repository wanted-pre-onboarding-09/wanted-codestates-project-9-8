import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styled from 'styled-components';
import Header from './Header';
import FormList from './FormList';
// import axios from 'axios';

function Home() {
  return (
    <>
      <Header />
      <FormList />
      <StyledPulsBtn>
        <AiOutlinePlusCircle size={50} fill="#fa4646" cursor="pointer" />
      </StyledPulsBtn>
    </>
  );
}

export default Home;

const StyledPulsBtn = styled.div`
  text-align: center;
  margin-top: 30px;
`;
