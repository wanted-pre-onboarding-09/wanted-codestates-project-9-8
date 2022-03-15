import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <StyledHeader>
      <Link to="/">Chungbuk foreset</Link>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.p`
  font-weight: bold;
  font-family: SEBANG_Gothic_Bold;
  font-size: 30px;
  margin-bottom: 20px;
  cursor: pointer;
  text-align: center;
  a {
    color: #268b63;
  }
`;
