import styled from "styled-components"

export const Wrapper = styled.article`
   padding: 90px 0px 90px 30px;
   opacity: 0;
   transform: translateY(50px);
`

export const StyledTitle = styled.h2`
   font-size: 30px;
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
         line-height: 1.5;
      }
   }

   h3{
      padding: 30px 0;
      padding-bottom: ${({isDesc}) => isDesc ? '30px' : '10px'};
      font-size: 20px;
      font-style: italic;
      line-height: 1;
   }
`