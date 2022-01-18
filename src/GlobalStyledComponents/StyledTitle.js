import styled from "styled-components"

export const StyledTitle = styled.h1`
   font-size: ${({ theme }) => theme.fontSize.xxl};
   font-display: optional;
   font-style: italic;
   margin: 0 0 40px 0;
   text-transform: uppercase;
   position: relative;
   z-index: 1;
   color: ${({ color, theme }) => {
      if(color){
         switch(color) {
            case "green":
               return theme.colors.green
         }
      }
   }};

   span{
      font-size: ${({theme}) => theme.fontSize.s};
      padding: 10px 20px;
      font-weight: normal;
      opacity: 0;
   }

   button{
      display: block;
      background-color: transparent;
      border: none;
      font-size: ${({ theme }) => theme.fontSize.xxs};
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.white};
      text-decoration: underline;
      margin-top: 10px;
      font-weight: normal;
      text-align: left;
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

      button{
         font-size: ${({ theme }) => theme.fontSize.xs};
      }
   }
`