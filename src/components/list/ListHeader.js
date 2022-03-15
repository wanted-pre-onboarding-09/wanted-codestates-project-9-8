import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

function ListHeader() {
  return (
    <StyeldHeader>
      <Link to="/">
        <button type="button">
          <IoIosArrowBack />
        </button>
      </Link>
    </StyeldHeader>
  );
}

const StyeldHeader = styled.header`
  button {
    font-size: 2.5rem;
    color: #ccc;
    transition: all 200ms ease;

    &:hover {
      color: #268b63;
    }
  }
`;

export default ListHeader;
