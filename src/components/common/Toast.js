import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Toast({ type }) {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    switch (type) {
      case 'change':
        setMsg({ type: 'change', message: '수정이 완료되었습니다' });
        break;
      case 'add':
        setMsg({ type: 'add', message: '작성이 완료되었습니다' });
        break;
      case 'delete':
        setMsg({ type: 'delete', message: '삭제가 완료되었습니다' });
        break;
      case 'warning':
        setMsg({ type: 'warning', message: '내용을 입력해주세요' });
        break;

      default:
        throw new Error(`unknown Toast type:${type}`);
    }
  }, []);

  return <StyledToast msg={msg}>{msg.message}</StyledToast>;
}
const StyledToast = styled.div`
  position: fixed;
  top: 30px;
  left: 50%;
  padding: 0.7rem 1rem;
  width: fit-content;
  border-radius: 0.8rem;
  background-color: ${({ msg }) =>
    msg.type === 'delete' || msg.type === 'warning' ? '#ea3333' : '#268b63'};
  color: white;
  opacity: 0;
  animation-name: slide;
  animation-duration: 2s;
  animation-timing-function: slideIn;

  @keyframes slide {
    0% {
      opacity: 1;
      transform: translateX(100%);
    }
    50% {
      opacity: 1;
      transform: translateX(0%);
    }
    100% {
      opacity: 0;
      transform: translateX(100%);
    }
  }
`;

Toast.propTypes = {
  type: PropTypes.string.isRequired,
};
export default Toast;
