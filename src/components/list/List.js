import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ListCard from './ListCard';
import Modal from '../modal/Modal';
import ListHeader from './ListHeader';

function List() {
  const [getData, setGetData] = useState([]);

  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState();

  const handleModal = (data) => {
    setIsModal(!isModal);
    setModalData(data);
  };

  const handleClose = () => {
    setIsModal(false);
  };

  const targetRef = useRef(null);
  const dateIndex = useRef(10);
  useEffect(async () => {
    const { data } = await axios.get(
      '/openapi-json/pubdata/pubMapForest.do?numOfRows=50',
    );
    setGetData(JSON.parse(data).response);
  }, [getData]);

  const handleIntersect = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && target.intersectionRect.y > 100) {
      dateIndex.current += 10;
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
  }, [handleIntersect]);

  return (
    <div>
      <ListHeader />
      <ListContainer>
        {getData.slice(0, dateIndex.current).map((item, index) => (
          <ListCard
            key={index}
            id={item.fcNo}
            name={item.fcNm}
            address={item.fcAddr}
            phone={item.ref1}
            handleModal={() => handleModal(item)}
          />
        ))}
        {isModal && (
          <Modal
            id={modalData.fcNo}
            title={modalData.fcNm}
            address={modalData.fcAddr}
            officeNumber={modalData.ref1}
            handleClose={handleClose}
            mode="create"
          />
        )}
        <LastBox ref={targetRef}>{}</LastBox>
      </ListContainer>
    </div>
  );
}

export default List;

const ListContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const LastBox = styled.div`
  height: 1px;
`;
