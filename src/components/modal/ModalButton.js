import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ModalButton({ text, color, disabled, handleClick }) {
  return (
    <StyledButton onClick={handleClick} color={color} disabled={disabled}>
      {text}
    </StyledButton>
  );
}

ModalButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
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
  :disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
