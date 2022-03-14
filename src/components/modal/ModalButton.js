import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ModalButton({ text, color, handleClick }) {
  return (
    <StyledButton onClick={handleClick} color={color}>
      {text}
    </StyledButton>
  );
}

ModalButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ModalButton;

const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  color: #fff;
  font-weight: 500;
`;
