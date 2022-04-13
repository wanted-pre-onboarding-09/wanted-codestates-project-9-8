import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../common/Pagination';
import Modal from '../modal/Modal';
import Toast from '../common/Toast';
import { onModal } from '../../store/reducers/modalSlice';
import { onReset } from '../../store/reducers/toastSlice';

function FormList() {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.listSlice.data);
  const { selected, keyword } = useSelector((state) => state.filterSlice);
  const { isModal } = useSelector((state) => state.modalSlice);
  const { isToast } = useSelector((state) => state.toastSlice);

  useEffect(() => {
    if (
      isToast.change === false &&
      isToast.delete === false &&
      isToast.warning === false
    ) {
      return;
    }
    const timer = setTimeout(() => {
      dispatch(onReset());
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
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
                  onClick={() => dispatch(onModal(data))}
                  onKeyDown={() => dispatch(onModal(data))}
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
        <StyledNotData>저장된 휴양림 데이터가 없습니다.</StyledNotData>
      )}
      {isModal && <Modal mode="edit" />}
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
  p + p {
    margin-top: 5px;
  }
  // p:first-child {
  //   margin-top: 0;
  // }
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
  .not-data {
    margin: 30px 0;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }
`;

const StyledNotData = styled.p`
  margin: 30px 0;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;
