import styled from "styled-components"

export const Wrapper = styled.div`
   position: relative;
   z-index: 1;
`

export const StyledOptionBtn = styled.button`
   text-transform: uppercase;
   border: none;
   background-color: ${({isOpen, theme}) => isOpen ? `${theme.colors.black}` : 'transparent'};
   color: ${({theme}) => theme.colors.white}; 
   font-size: ${({theme}) => theme.fontSize.s};
   position: relative;
   border: 1px solid ${({isOpen, theme}) => isOpen ? theme.colors.orange : 'transparent'};
   border-bottom: ${({isOpen}) => isOpen ? `none` : null};
   height: 40px;
   width: fit-content;
   padding: 10px 30px 10px 12px;
   text-align: left;

   span{
      position: absolute;
      right: 10px;
      transform: ${({isOpen}) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}  scale(0.8);
   }

   &:hover{
      border: 1px solid ${({theme}) => theme.colors.orange};
      border-bottom: ${({isOpen, theme}) => isOpen ? `none` : `1px solid ${theme.colors.orange}`};
   }

   &:focus{
      outline: none;
      border: 1px solid ${({theme}) => theme.colors.orange};
   }
`

export const StyledList = styled.ul`
   list-style: none;
   position: absolute;
   width: 250px;
   max-height: 180px;
   overflow-y: auto;
   scroll-behavior: smooth;
   right: 0;
   left: ${({isPrice}) => isPrice ? 'unset' : '0'};
   top: 99%;
   border: 1px solid ${({theme}) => theme.colors.orange};
   background-color: ${({theme}) => theme.colors.black};
   z-index: -1;
   visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};
   box-shadow: 0px 0px 26px -11px rgba(0, 0, 0, 1);

   ::-webkit-scrollbar {
      width: 8px;
   }

   ::-webkit-scrollbar-track {
      background-color: black;
   }

   ::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #D0368A 0%, ${({theme}) => theme.colors.orange} 99%);
      border-radius: 100px;
   }

   li{
      padding: 20px 15px;
   }

   &:focus{
      outline: none;
      border: 1px solid ${({theme}) => theme.colors.orange};
   }
`