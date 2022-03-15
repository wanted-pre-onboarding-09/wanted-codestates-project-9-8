import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Pagination({ total, page, setPage, limit }) {
  const numPages = Math.ceil(total / limit);
  const [pageCnt, setPageCnt] = useState(1);
  const [pageRange] = useState(5);

  const prev = () => {
    if ((page - 1) % 5 === 0) setPageCnt(pageCnt - pageRange);
    setPage(page - 1);
  };

  const next = () => {
    if (page % 5 === 0) setPageCnt(pageCnt + pageRange);
    setPage(page + 1);
  };

  const pageArr = [];
  for (let i = 0; i <= numPages; i += 1) pageArr.push(i);
  return (
    <StyledPageWrap>
      <StyledPageButton onClick={prev} disabled={page === 1}>
        &lt;
      </StyledPageButton>
      {pageArr.slice(pageCnt, pageCnt + pageRange).map((num) => (
        <StyledPageButton
          key={num}
          onClick={() => setPage(num)}
          className={page === num ? 'active' : null}
        >
          {num}
        </StyledPageButton>
      ))}
      <StyledPageButton onClick={next} disabled={page === numPages}>
        &gt;
      </StyledPageButton>
    </StyledPageWrap>
  );
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
};

const StyledPageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const StyledPageButton = styled.button`
  color: black;
  margin-right: 10px;
  cursor: pointer;
  font-size: 16px;
  &.active {
    font-weight: bold;
    color: #ff6666;
  }
`;

export default Pagination;
