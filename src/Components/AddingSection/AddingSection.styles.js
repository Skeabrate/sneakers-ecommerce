import styled from "styled-components"

export const StyledCart = styled.div`
   display: flex;
   justify-content: space-between;
   flex-direction: column;

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      flex-direction: row;
      align-items: center;

      div{
         width: 100%;
      }
   }

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 10px;
   }
`

export const StyledButtonContainer = styled.div`
   display: flex;
   column-gap: 10px;
`