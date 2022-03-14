import React, { useState } from 'react';
import styled from 'styled-components';

function Header() {
  const OPTIONS = [
    { value: 'title', name: '이름' },
    { value: 'addrees', name: '주소' },
    { value: 'memo', name: '메모' },
  ];

  const [selected, setSelected] = useState('title');
  const [input, setInput] = useState('');

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <StyledHeaderWrap>
      <select onChange={handleSelect} value={selected}>
        {OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <input type="text" value={input} onChange={handleChange} />
    </StyledHeaderWrap>
  );
}

export default Header;
const StyledHeaderWrap = styled.div`
  display: flex;
  select {
    padding: 5px 10px;
    border: 1px solid #c0c0c0;
    border-radius: 5px;
  }
  input {
    width: 100%;
    margin-left: 25px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #c0c0c0;
    &:focus {
      outline: 1px solid #c0c0c0;
    }
  }
`;
