import React from 'react';
import styled from "styled-components"

const Wrapper = styled.div`
   font-size: 13px;
   background-color: ${({theme}) => theme.colors.orange};
   padding: 10px;
   display: flex;
   width: fit-content;
   justify-content: center;
   align-items: center;
   margin-right: 15px;

   button {
      margin-left: 5px;
      background-color: transparent;
      border: none;
   }

   svg{
      fill: ${({theme}) => theme.colors.white};
      width: 10px;
      height: 10px;
   }
`

const StyledPhrase = ({label, resetHandler}) => {
   return (
      <Wrapper>
         {label}
         <button onClick={resetHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
         </button>
      </Wrapper>
   );
};

export default StyledPhrase;