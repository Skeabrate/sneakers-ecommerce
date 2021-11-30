import styled from "styled-components"


export const StyledContent = styled.div`
   background-color: ${({theme}) => theme.colors.grey};
   height: 300vh;
   width: 100%;
`

export const StyledSlider = styled.div`
   width: 70%;
   background-color: ${({theme}) => theme.colors.white};

   div{
      position: relative;

      &:nth-child(3){
         transform: translateX(-100%);
      }

      img{
         position: absolute;
      }
   }
`