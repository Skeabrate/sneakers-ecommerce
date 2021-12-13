import styled from "styled-components"

export const StyledCart = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

   p{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 40px;
   }

   button{
      display: flex;
      justify-content: center;
      align-items: center;
      border: none; 
      gap: 10px;  
   }

   @media (max-width: 1350px) {
      flex-direction: column;
      row-gap: 20px;
   }

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      margin: 30px 0;
      flex-direction: row;
      justify-content: flex-start;
      column-gap: 30px;
   }
`