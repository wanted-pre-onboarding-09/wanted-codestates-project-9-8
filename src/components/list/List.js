import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ListCard from './ListCard';
import Modal from '../modal/Modal';
import ListHeader from './ListHeader';
import Toast from '../common/Toast';
import Loading from '../common/Loading';

function List() {
  const [getData, setGetData] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [isToast, setIsToast] = useState({ add: false, warning: false });
  const [checkError, setCheckError] = useState(true);
  const [modalData, setModalData] = useState();
  const [dataIndex, setDataIndex] = useState(1);
  const targetRef = useRef(null);

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
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    if (isToast.add || isToast.warning) {
      const timer = setTimeout(() => {
        setIsToast({ add: false, warning: false });
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isToast.add, isToast.warning]);

  // console.log(isToast);
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
        {isToast.add && <Toast type="add" />}
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

        {isModal && (
          <Modal
            id={modalData.fcNo}
            title={modalData.fcNm}
            address={modalData.fcAddr}
            officeNumber={modalData.ref1}
            isToast={isToast}
            handleClose={handleClose}
            handleToast={handleToast}
            mode="create"
          />
        )}
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
