import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ModalButton from './ModalButton';
import Toast from '../common/Toast';
import {
  createData,
  deleteData,
  updateData,
} from '../../store/reducers/listSlice';
import { onClose } from '../../store/reducers/modalSlice';
import { onToast } from '../../store/reducers/toastSlice';

function Modal({ mode }) {
  const dispatch = useDispatch();

  const { selectedData } = useSelector((state) => state.modalSlice);
  const { id, title, address, officeNumber, memo } = selectedData;
  const { isToast } = useSelector((state) => state.toastSlice);

  const [textarea, setTextarea] = useState(mode === 'edit' ? memo : '');
  const [isNull, setIsNull] = useState(mode !== 'edit');

  const handleClose = () => {
    dispatch(onClose());
  };

  const handleBackground = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleMemo = (e) => {
    const { value } = e.target;
    setTextarea(value);
    if (value.length === 0) {
      setIsNull(true);
    } else {
      setIsNull(false);
    }
  };

  const onCreate = () => {
    if (isNull) {
      dispatch(onToast('warning'));
      return;
    }
    const settingData = {
      id: Date.now(),
      title,
      address,
      officeNumber,
    };
    const newData = { ...settingData, memo: textarea };
    dispatch(createData(newData));
    handleClose();
    dispatch(onToast('add'));
  };

  const onUpdate = (dataId) => {
    if (isNull) {
      dispatch(onToast('warning'));
      return;
    }
    dispatch(updateData({ id: dataId, memo: textarea }));
    handleClose();
    dispatch(onToast('change'));
  };

  const onDelete = (dataId) => {
    dispatch(deleteData(dataId));
    handleClose();
    dispatch(onToast('delete'));
  };

  return (
    <Background onClick={handleBackground}>
      {isToast.warning && <Toast type="warning" />}
      <ModalContainer>
        <CloseBtn onClick={handleClose}>&times;</CloseBtn>
        <ModalBox>
          <StyledText color="#797979">??????</StyledText>
          <StyledText>{title}</StyledText>
        </ModalBox>
        <ModalBox>
          <StyledText color="#797979">??????</StyledText>
          <StyledText>{address}</StyledText>
        </ModalBox>
        <ModalBox>
          <StyledText color="#797979">?????????</StyledText>
          <StyledText>{officeNumber}</StyledText>
        </ModalBox>
        <ModalBox>
          <StyledText color="#797979">??????</StyledText>
          <StyledInput
            placeholder="????????? ??????????????????"
            value={textarea}
            onChange={handleMemo}
          />
        </ModalBox>
        <ButtonBox>
          {mode === 'edit' ? (
            <>
              <ModalButton
                text="??????"
                color="#ea3333"
                isNull={isNull}
                handleClick={() => onDelete(id)}
              />
              <ModalButton
                text="??????"
                color="#268b63"
                isNull={isNull}
                handleClick={() => onUpdate(id)}
              />
            </>
          ) : (
            <ModalButton
              text="??????"
              color="#268b63"
              isNull={isNull}
              handleClick={onCreate}
            />
          )}
        </ButtonBox>
      </ModalContainer>
    </Background>
  );
}

Modal.propTypes = {
  mode: PropTypes.string.isRequired,
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
  font-weight: 500;
  font-size: 16px;
  margin: 4px 0;
`;

const StyledInput = styled.textarea`
  height: 120px;
  border: 1px solid #797979;
  border-radius: 4px;
  margin: 4px 0;
  padding: 4px;
  resize: none;
  :focus {
    outline: none;
    border: 1px solid #000;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  column-gap: 10px;
`;
