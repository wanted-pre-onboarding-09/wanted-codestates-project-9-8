import React from 'react';
import styled from 'styled-components';

const listCard = ({ id, name, address, phone, handleModal }) => {
  // const modal = (event) => {
  //   console.log(event.target.id);
  // };

  return (
    <CardBox id={id} onClick={handleModal}>
      <ul>
        <li>{name}</li>
        <li>{address}</li>
        <li>{phone}</li>
      </ul>
    </CardBox>
  );
};

export default listCard;

const CardBox = styled.div`
  margin: 20px auto;
  padding: 3%;
  width: 90%;

  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 8px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: all 200ms ease-in;
  li {
    text-align: center;
  }
  li:first-child {
    margin-bottom: 15px;
    font-weight: bold;
    color: green;
    font-size: 20px;
  }
  :hover {
    box-shadow: -2px -2px 5px 1px rgba(0, 0, 0, 0.1);
  }
`;
