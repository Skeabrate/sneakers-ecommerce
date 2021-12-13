import styled from "styled-components"

export const Wrapper = styled.article`
   padding: 60px 0px 130px 30px;
   opacity: 0;
   transform: translateY(50px);

   @media (max-width: 1550px){
      padding: 60px 0px 80px 30px;
   }

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      padding: 40px 0px 60px 30px;
   }
`

export const StyledTitle = styled.h2`
   font-size: ${({theme}) => theme.fontSize.l};
   font-style: italic;
   position: relative;
   width: fit-content;
   padding-bottom: 5px;

   &::after{
      position: absolute;
      content: '';
      width: 105%;
      height: 3px;
      background-color: ${({theme}) => theme.colors.orange};
      bottom: 0;
      left: 0;
      border-radius: 100%;
   }
`

export const StyledContent = styled.div`
   display: grid;
   grid-template-columns: ${({count}) => `repeat(${count}, 1fr)`};

   div{
      margin-right: 30px;
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

      h3{
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

   @media (max-width: 800px) {
      grid-template-columns: ${({isDesc, isHigh}) => {
         if(isDesc) return '1fr'
         if(isHigh) return '1fr 1fr'
         else return '1fr'
      }};

      img{
         margin-top: 30px;
      }
   }

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      grid-template-columns: 1fr;

      div{
         p{
            line-height: 1.3;
         }
      }
   }
`