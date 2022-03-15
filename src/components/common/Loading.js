import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  .card {
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    overflow: hidden;
    margin: 0 1rem 1rem 0;
  }
  .skeleton {
    width: 300px;
    height: 400px;
    background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 40%,
        rgba(255, 255, 255, 0) 70%
      ),
      /* highlight */ linear-gradient(lightgrey 100px, transparent 0);
    background-position: 5px 10px, 5px 10px;
    background-size: 100px 100px, 285px 120px;
    background-repeat: repeat-y;
    animation: skeleton 1s infinite;
  }
  @keyframes skeleton {
  to {
    background-position:
      100% 10px,
      5px 10px
`;

function Loading() {
  return (
    <LoadingContainer>
      <div className="card skeleton" />
    </LoadingContainer>
  );
}

export default Loading;
