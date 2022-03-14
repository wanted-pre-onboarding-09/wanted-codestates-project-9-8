import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListCard from './ListCard';
import Modal from '../modal/Modal';

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

  useEffect(async () => {
    const { data } = await axios.get(
      '/openapi-json/pubdata/pubMapForest.do?pageNo=1',
    );
    setGetData(...getData, JSON.parse(data).response);
    console.log(getData);
  }, []);

  return (
    <div>
      {getData.map((item) => (
        <ListCard
          id={item.fcNo}
          name={item.fcNm}
          address={item.fcAddr}
          phone={item.ref1}
          handleModal={() => handleModal(item)}
        />
      ))}
      {isModal && <Modal handleClose={handleClose} data={modalData} />}
    </div>
  );
}

export default List;
