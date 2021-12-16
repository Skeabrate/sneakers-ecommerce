import styled from "styled-components"

export const StyledContent = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 20px;
   opacity: 0;

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
   }

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      grid-template-columns: 1fr 1fr;
   }
`