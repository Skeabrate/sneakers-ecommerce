import styled from "styled-components"

export const Wrapper = styled.article`
   padding: 60px 0px 60px 30px;
   opacity: 0;
   transform: translateY(50px);

   @media (max-width: 1000px){
      padding: 40px 0px 40px 30px;
   }
`

export const StyledTitle = styled.h2`
   font-size: ${({theme}) => theme.fontSize.l};

`

export const StyledContent = styled.div`
   display: grid;
   grid-template-columns: ${({count}) => `repeat(${count}, 1fr)`};

   div{
      margin-right: 3.3vw;
      display: flex;
      flex-direction: column;
      justify-content: ${({isDesc}) => isDesc ? 'center' : null};

      img{
         width: 100%;
      }

      p{
         line-height: 1.6;
         font-size: ${({theme}) => theme.fontSize.xs};
      }
   }

   h3{
      padding: 30px 0;
      padding-bottom: ${({isDesc}) => isDesc ? '30px' : '10px'};
      font-size: ${({theme}) => theme.fontSize.xxs};
      font-style: italic;
      line-height: 1;
   }

   @media (max-width: 1300px){
      h3{
         font-size: ${({theme}) => theme.fontSize.xs};
      }
   }
`