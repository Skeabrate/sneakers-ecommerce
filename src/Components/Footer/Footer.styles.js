import styled from "styled-components"

export const StyledFooter = styled.footer`
   color: ${({theme}) => theme.colors.white};
   background-color: black;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   row-gap: 15px;
   padding: 40px;

   h1{
      font-family: 'Shadows Into Light', cursive;
      font-weight: bold;
      font-size: ${({theme}) => theme.fontSize.xl};
      cursor: pointer;
   }

   ul{
      display: flex;
      list-style: none;
      justify-content: center;
      align-items: center;
      column-gap: 15px;
   }

   p{
      font-size: ${({theme}) => theme.fontSize.xs};
      text-align: center;
   }

   svg{
      fill: ${({theme}) => theme.colors.white};
   }

   li:nth-child(3){
      svg{
         width: 50px;
         height: 50px;
         transition: all .1s ease-in-out;
      }

      svg:hover{
         fill: ${({theme}) => theme.colors.orange};
         transform: scale(1.1);
      }
   }

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      h1{
         font-size: ${({theme}) => theme.fontSize.l};
      }

      p{
         font-size: ${({theme}) => theme.fontSize.s};
      }
   }
`