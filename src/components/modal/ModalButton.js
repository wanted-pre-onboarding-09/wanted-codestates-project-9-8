import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ModalButton({ text, color, isNull, handleClick }) {
  return (
    <StyledButton onClick={handleClick} color={color} isNull={isNull}>
      {text}
    </StyledButton>
  );
}

ModalButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isNull: PropTypes.bool.isRequired,
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
  opacity: ${(props) => props.isNull && 0.4};
  /* :disabled {
    opacity: 0.4;
  } */
`;
