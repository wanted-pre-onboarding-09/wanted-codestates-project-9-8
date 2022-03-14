import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from './Header';
import FormList from './FormList';

function Home() {
  return (
    <>
      <Header />
      <FormList />

      <StyledPulsBtn>
        <Link to="/list">
          <AiOutlinePlusCircle size={50} fill="#fa4646" cursor="pointer" />
        </Link>
      </StyledPulsBtn>
    </>
  );
}

export default Home;

const StyledPulsBtn = styled.div`
  text-align: center;
  margin-top: 30px;
`;
