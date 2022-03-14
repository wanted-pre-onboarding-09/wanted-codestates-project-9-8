import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListCard from './ListCard';

function List() {
  const [getData, setGetData] = useState([]);

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
          addres={item.fcAddr}
          phone={item.ref1}
        />
      ))}
    </div>
  );
}

export default List;
