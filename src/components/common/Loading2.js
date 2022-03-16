import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
.card {  
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 5px 5px 8px 1px rgba(0, 0, 0, 0.1);
 
}
.skeleton2 {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(lightgrey 80px, transparent 0);
  background-position: 5px 10px;
  background-size: 97% 100px;
  background-repeat: repeat-y;
  animation: skeleton2 1.3s infinite;
}
@keyframes skeleton2 {
to {
  background-image: linear-gradient(#E6E6E6 80px, transparent 0); 
`;

function Loading2() {
  return (
    <LoadingContainer>
      <div className="card skeleton" />
    </LoadingContainer>
  );
}

export default Loading2;
