import React from 'react';
import styled from 'styled-components';

function FormList() {
  const mock = [
    {
      id: 1,
      title: '문성자연휴양림',
      addrees: '충청북도 충주시 노은면 우성1길 191',
      officeNumber: '032-834-2111',
      memo: 'ㅋㅋㅋㅋ',
    },
    {
      id: 2,
      title: '문성자연휴양림',
      addrees: '충청북도 충주시 노은면 우성1길 191',
      officeNumber: '032-834-2111',
      memo: 'ㅋㅋㅋㅋ',
    },
    {
      id: 3,
      title: '문성자연휴양림',
      addrees: '충청북도 충주시 노은면 우성1길 191',
      officeNumber: '032-834-2111',
      memo: 'ㅋㅋㅋㅋ',
    },
  ];
  window.localStorage.setItem('formList', JSON.stringify(mock));
  const dataList = JSON.parse(window.localStorage.getItem('formList'));
  return (
    <StyledFormList>
      {dataList.map((data) => {
        const { id, title, addrees, officeNumber, memo } = data;
        return (
          <li key={id}>
            <p className="title">{title}</p>
            <p className="addrees">{addrees}</p>
            <p className="officeNumber">{officeNumber}</p>
            <p className="memo">{memo}</p>
          </li>
        );
      })}
    </StyledFormList>
  );
}

export default FormList;

const StyledFormList = styled.ul`
  margin-top: 20px;
  li {
    border: 2px solid #c0c0c0;
    border-radius: 5px;
    padding: 20px 30px;
    margin-top: 20px;
    &:hover {
      cursor: pointer;
      box-shadow: 3px 3px 3px #c0c0c0;
    }
  }
  p {
    margin-top: 5px;
  }
  p:first-child {
    margin-top: 0;
  }
  .title {
    color: green;
    font-weight: bold;
    font-size: 24px;
  }
  .address {
  }
  .officeNumber {
    color: red;
  }
`;
