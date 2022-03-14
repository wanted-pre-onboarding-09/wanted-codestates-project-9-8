import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { addForm } from '../../store/reducers/listSlice';
import Modal from '../modal/Modal';

function FormList() {
  const dataList = useSelector((state) => state.listSlice.data);
  const dispatch = useDispatch();
  const click = () => {
    dispatch(
      addForm({
        id: 4,
        title: '문성자연휴양림',
        address: '충청북도 충주시 노은면 우성1길 191',
        officeNumber: '032-834-2111',
        memo: '해위',
      }),
    );
  };
  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState();

  const handleModal = (data) => {
    setIsModal(!isModal);
    setModalData(data);
  };

  const handleClose = () => {
    setIsModal(false);
  };

  return (
    <StyledFormList>
      {dataList.map((data) => {
        const { id, title, address, officeNumber, memo } = data;
        return (
          <li
            key={id}
            onClick={() => handleModal(data)}
            onKeyDown={() => handleModal(data)}
            role="presentation"
          >
            <p className="title">{title}</p>
            <p className="addrees">{address}</p>
            <p className="officeNumber">{officeNumber}</p>
            <p className="memo">{memo}</p>
          </li>
        );
      })}
      <button onClick={click} type="button">
        버튼임
      </button>
      {isModal && (
        <Modal
          id={modalData.id}
          title={modalData.title}
          address={modalData.address}
          officeNumber={modalData.officeNumber}
          memo={modalData.memo}
          handleClose={handleClose}
          mode="edit"
        />
      )}
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
