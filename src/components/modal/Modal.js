import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalButton from './ModalButton';

function Modal({ handleModal }) {
  const handleBackground = (e) => {
    if (e.target === e.currentTarget) {
      handleModal();
    }
  };

  return (
    <Background onClick={handleBackground}>
      <ModalContainer>
        <CloseBtn onClick={handleModal}>&times;</CloseBtn>
        <ModalBox>
          <StyledText color="#797979">이름</StyledText>
          <StyledText>속리산숲체험휴양마을</StyledText>
        </ModalBox>
        <ModalBox>
          <StyledText color="#797979">주소</StyledText>
          <StyledText>충청북도 보은군 속리산면 속리산로 596</StyledText>
        </ModalBox>
        <ModalBox>
          <StyledText color="#797979">연락처</StyledText>
          <StyledText>043-540-3220</StyledText>
        </ModalBox>
        <ModalBox>
          <StyledText color="#797979">메모</StyledText>
          <StyledInput placeholder="내용을 입력해주세요" />
        </ModalBox>
        <ButtonBox>
          {/* <ModalButton text="삭제" color="#ea3333" />
          <ModalButton text="수정" color="#268b63" /> */}
          <ModalButton text="저장" color="#268b63" />
        </ButtonBox>
      </ModalContainer>
    </Background>
  );
}

Modal.propTypes = {
  handleModal: PropTypes.func.isRequired,
};

export default Modal;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ModalContainer = styled.div`
  width: 400px;

  padding: 60px 30px 30px 30px;
  background-color: white;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  text-align: center;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 14px;
  display: flex;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: transparent;
  font-size: 24px;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const StyledText = styled.p`
  text-align: left;
  color: ${(props) => props.color};
  font-size: 16px;
  margin: 4px 0;
`;

const StyledInput = styled.textarea`
  height: 120px;
  border: 1px solid #797979;
  border-radius: 4px;
  margin: 4px 0;
  padding: 4px;
  :focus {
    outline: 1px solid #268b63;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  column-gap: 10px;
`;

// const [isModal, setIsModal] = useState(false);

// const handleModal = () => {
//   setIsModal(!isModal);
// };
// <button type="button" onClick={handleModal}>
//   modall
// </button>;
// {
//   isModal && <Modal handleModal={handleModal} />;
// }
