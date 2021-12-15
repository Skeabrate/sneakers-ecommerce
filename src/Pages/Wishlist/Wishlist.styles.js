import styled from "styled-components"

export const Wrapper = styled.section`
   color: ${({theme}) => theme.colors.white};
   margin-top: 80px;
   min-height: calc(100vh - 80px);
   padding: 3vw;

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      margin-top: 60px;
      min-height: calc(100vh - 60px);
   }
`

export const StyledTitle = styled.h1`
   font-size: ${({ theme }) => theme.fontSize.xxl};
   font-display: optional;
   font-style: italic;

   span{
      font-size: ${({theme}) => theme.fontSize.s};
      padding: 10px 20px;
      font-weight: normal;
   }

   @media (max-width: ${({ theme }) => theme.screenSize.medium}) {
      font-size: ${({ theme }) => theme.fontSize.xl};

      span{
         padding: 8px 20px;
      }
   }

   @media (max-width: 750px) {
      font-size: ${({ theme }) => theme.fontSize.l};

      span{
         font-size: ${({theme}) => theme.fontSize.micro};
         padding: 5px 15px;
      }
   }
`

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