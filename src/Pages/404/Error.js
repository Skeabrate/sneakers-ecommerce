import React from 'react';
import styled from "styled-components"

const StyledError = styled.div`
   height: calc(100vh - 80px);
   display: grid;
   align-content: center;
   text-align: center;

   h1, h2{
      font-style: italic;
      color: ${({theme}) => theme.colors.lightGrey};
   }
   
   h1{
      font-size: ${({theme}) => theme.fontSize.error};
      color: ${({theme}) => theme.colors.grey};
   }
`

const Error = ({label}) => {
   return (
      <StyledError>
         <h1>404</h1>
         <h2>{`Sorry, we couldn't find a ${label ? label : 'page'} you are looking for :C`}</h2>
      </StyledError>
   );
};

export default Error;