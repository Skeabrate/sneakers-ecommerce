import styled from "styled-components"

export const StyledTitle = styled.h1`
   font-size: ${({ theme }) => theme.fontSize.xxl};
   font-display: optional;
   font-style: italic;
   margin: 0 0 40px 0;

   span{
      font-size: ${({theme}) => theme.fontSize.s};
      padding: 10px 20px;
      font-weight: normal;
      opacity: 0;
   }

   @media (max-width: ${({ theme }) => theme.screenSize.medium}) {
      font-size: ${({ theme }) => theme.fontSize.xl};
      margin: 30px 0 40px;

      span{
         padding: 8px 20px;
      }
   }

   @media (max-width: 750px) {
      font-size: ${({ theme }) => theme.fontSize.l};
      margin: 20px 0 40px;

      span{
         font-size: ${({theme}) => theme.fontSize.micro};
         padding: 5px 15px;
      }
   }
`