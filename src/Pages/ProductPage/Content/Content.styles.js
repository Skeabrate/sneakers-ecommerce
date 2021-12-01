import styled from "styled-components"


export const StyledContent = styled.div`
   background-color: ${({theme}) => theme.colors.grey};
   height: 350vh;
`

export const StyledSlider = styled.div`
   /* background-color: #EBEEEF; */
   height: 85vh;
   position: relative;

   button{
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      padding: 10px 20px;
      border: 2px solid ${({theme}) => theme.colors.grey};
      z-index: 1;
   }

   

   &::after{
      content: 'RECYCLED MATERIALS';
      font-weight: bold;
      position: absolute;
      background-color: white;
      color: ${({theme}) => theme.colors.lightGrey};
      padding: 5px 8px;
      font-size: 14px;
      right: -85px;
      top: 140px;
      transform: rotate(-90deg);
      letter-spacing: 3px;
      z-index: 0;
   }
`

export const StyledImage = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);

   img{
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`

export const StyledBtnPrev = styled.button`
   left: 30px;
`

export const StyledBtnNext = styled.button`
   right: 30px;
`