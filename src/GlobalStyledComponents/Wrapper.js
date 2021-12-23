import styled from "styled-components"

export const Wrapper = styled.section`
   color: ${({theme}) => theme.colors.white};
   margin-top: 80px;
   min-height: calc(100vh - 80px);
   padding: 3vw;
   position: relative;

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      margin-top: 60px;
      min-height: calc(100vh - 60px);
   }
`