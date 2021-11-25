import React from 'react';
import styled from 'styled-components';
import ClipLoader from "react-spinners/ClipLoader";

const Wrapper = styled.div`
   position: fixed;
   bottom: 0;
   left: 0;
   width: 100vw;
   height: calc(100vh - 100px);
   display: flex;
   justify-content: center;
   align-items: center;
`

const LoadingScreen = () => {
   return (
      <Wrapper>
         <ClipLoader color={'#fe7901'} />
      </Wrapper>
   );
};

export default LoadingScreen;