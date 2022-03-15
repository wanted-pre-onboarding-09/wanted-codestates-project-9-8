import React from 'react';
import styled from 'styled-components';

const listCard = ({ id, name, address, phone, handleModal }) => {
  return (
    <CardBox id={id} onClick={handleModal}>
      <ul>
        <li>{!name ? '데이터를 불러올 수 없습니다.' : name}</li>
        <li>{address}</li>
        <li>{phone}</li>
      </ul>
    </CardBox>
  );
};

export default listCard;

const CardBox = styled.div`
  margin: 20px auto;
  padding: 20px 30px;
  width: 100%;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 8px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 200ms ease-in;

  li {
    text-align: center;
    margin-bottom: 5px;
  }

  li:first-child {
    margin-bottom: 15px;
    font-weight: bold;
    color: #268b63;
    font-size: 24px;
  }

  :hover {
    box-shadow: -2px -2px 5px 1px rgba(0, 0, 0, 0.1);
    background-color: #deefd0;
  }
`;
