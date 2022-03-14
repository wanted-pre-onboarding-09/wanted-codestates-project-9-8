import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Modal from '../modal/Modal';

function FormList() {
  const dataList = useSelector((state) => state.listSlice.data);
  const { selected, keyword } = useSelector((state) => state.filterSlice);

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
      {dataList
        .filter((el) => el[selected].includes(keyword))
        .map((data) => {
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
