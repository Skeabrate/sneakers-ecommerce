import styled from "styled-components"

export const Wrapper = styled.section`
   color: ${({theme}) => theme.colors.white};
   margin-top: 100px;
   padding: 6vw;
`

export const StyledTitle = styled.h1`
   font-size: ${({theme}) => theme.fontSize.xl};
   font-style: italic;
   display: block;
   margin-bottom: 40px;
   overflow: hidden;

   span{
      display: block;
      transform: translateY(100%);
   }
`

export const StyledContent = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 20px;
   opacity: 0;

   @media (max-width: 1400px){
      grid-template-columns: repeat(2, 1fr);
   }

   @media (max-width: 1100px){
      grid-template-columns: 1fr 1fr;
   }

   @media (max-width: 650px){
      grid-template-columns: 1fr;
   }
`

export const StyledItem = styled.div`
   display: block;
   margin-bottom: 60px;
   cursor: pointer;
`

export const StyledImage = styled.div`
   position: relative;
   display: flex;
   overflow: hidden;
   border-left: 5px solid ${({theme}) => theme.colors.orange};
   margin-bottom: 15px;

   img{
      width: 100%;
      
      transition: transform 0.2s ease-in-out;
   }

   span{
      position: absolute;
      top: 15px;
      width: 80px;
      height: 80px;
      background-color: ${({theme}) => theme.colors.black};
      right: 10px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      line-height: 1rem;
      font-size: ${({theme}) => theme.fontSize.l};
      opacity: 0;

      transition: transform .2s ease-in-out, opacity .1s ease-in-out;
   }

   div{
      font-size: 1.6rem;
      position: absolute;
      background-color: ${({theme}) => theme.colors.black};
      bottom: 0;
      left: 10px;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;

      transition: transform .3s ease-in-out;
   }

   &:hover div{
      transform: translateY(-10px);
   }

   &:hover span{
      opacity: 1;
      transform: translateY(-5px);
   }

   span:hover{
      transform: translateY(-5px) scale(1.1);
   }

   &:hover img{
      transform: scale(1.1);
   }
`

export const StyledItemTitle = styled.h3`
   font-size: ${({theme}) => theme.fontSize.l}
`

export const StyledCategory = styled.h4`
   color: ${({theme}) => theme.colors.lightGrey}
`