import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Pagination from '../common/Pagination';
import Modal from '../modal/Modal';
import Toast from '../common/Toast';

function FormList() {
  const dataList = useSelector((state) => state.listSlice.data);
  const { selected, keyword } = useSelector((state) => state.filterSlice);

  const [isModal, setIsModal] = useState(false);
  const [isToast, setIsToast] = useState({
    change: false,
    delete: false,
    warning: false,
  });
  const [modalData, setModalData] = useState();

  const handleModal = (data) => {
    setIsModal(!isModal);
    setModalData(data);
  };

  const handleClose = () => {
    setIsModal(false);
  };

  const handleToast = (type) => {
    setIsToast({ ...isToast, [type]: !isToast.type });
  };

  useEffect(() => {
    if (isToast.change || isToast.delete || isToast.warning) {
      const timer = setTimeout(() => {
        setIsToast({ change: false, delete: false, warning: false });
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isToast.change, isToast.delete, isToast.warning]);

  const [page, setPage] = useState(1);
  const limit = 4;
  const offset = (page - 1) * limit;
  return (
    <StyledFormList>
      {isToast.change && <Toast type="change" />}
      {isToast.delete && <Toast type="delete" />}
      {dataList.filter((data) => data[selected].includes(keyword)).length ? (
        <>
          {dataList
            .filter((data) => data[selected].includes(keyword))
            .slice(offset, offset + limit)
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
          <Pagination
            total={
              dataList.filter((data) => data[selected].includes(keyword)).length
            }
            page={page}
            setPage={setPage}
            limit={limit}
          />
        </>
      ) : (
        <p>데이터가 없습니다.</p>
      )}
      {isModal && (
        <Modal
          id={modalData.id}
          title={modalData.title}
          address={modalData.address}
          officeNumber={modalData.officeNumber}
          memo={modalData.memo}
          isToast={isToast}
          handleClose={handleClose}
          handleToast={handleToast}
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
    color: #268b63;
    font-weight: bold;
    font-size: 24px;
  }
  .address {
  }
  .officeNumber {
    color: #ff6666;
    font-weight: bold;
  }
`;
