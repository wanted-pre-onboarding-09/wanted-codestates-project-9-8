import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ListCard from './ListCard';
import Modal from '../modal/Modal';
import ListHeader from './ListHeader';
import Toast from '../common/Toast';
import Loading from '../common/Loading';
import { onModal } from '../../store/reducers/modalSlice';
import { onReset } from '../../store/reducers/toastSlice';

function List() {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState([]);
  const { isModal } = useSelector((state) => state.modalSlice);
  const { isToast } = useSelector((state) => state.toastSlice);
  const [checkError, setCheckError] = useState(true);
  const [dataIndex, setDataIndex] = useState(1);
  const targetRef = useRef(null);
  axios.defaults.timeout = 10000;

  const handleModal = (data) => {
    const modalData = {
      id: data.fcNo,
      title: data.fcNm,
      address: data.fcAddr,
      officeNumber: data.ref1,
    };
    dispatch(onModal(modalData));
  };

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    if (isToast.add === false && isToast.warning === false) {
      return;
    }
    const timer = setTimeout(() => {
      dispatch(onReset());
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [isToast.add, isToast.warning]);

  useEffect(async () => {
    try {
      const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
      const { data } = await axios.get(
        `${PROXY}/openapi-json/pubdata/pubMapForest.do?pageNo=${dataIndex}`,
      );
      setGetData(getData.concat(JSON.parse(data).response));
    } catch {
      setCheckError(!checkError);
    }
  }, [dataIndex]);

  const handleIntersect = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && target.intersectionRect.y > 100) {
      setDataIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <ListHeader />
      {!checkError ? <ListCard /> : null}
      <ListContainer checkError={checkError}>
        {isToast.add && <Toast type="add" isFade={isToast.add} />}
        {getData.length === 0 ? (
          <Loading />
        ) : (
          getData.map((item, index) => (
            <ListCard
              key={index}
              id={item.fcNo}
              name={item.fcNm}
              address={item.fcAddr}
              phone={item.ref1}
              handleModal={() => handleModal(item)}
            />
          ))
        )}

        {isModal && <Modal mode="create" />}
        <LastBox hide={dataIndex} getData={getData.length} ref={targetRef}>
          ...
        </LastBox>
      </ListContainer>
    </div>
  );
}

export default List;

const ListContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: ${({ checkError }) => {
    return !checkError ? 'none' : 'block';
  }};
`;

const LastBox = styled.div`
  display: ${({ hide, getData }) => {
    return hide > 4 || getData === 0 ? 'none' : 'block';
  }};
  margin: 20px auto;
  padding: 0px 30px 20px 30px;
  width: 100%;
  border: none;
  color: #268b63;
  font-size: 40px;
  text-align: center;
`;
