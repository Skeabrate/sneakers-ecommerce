import ReactModal from "react-modal";
import styled from "styled-components";

export const ModalWrapper = styled(ReactModal)`
   position: fixed;
   padding: 20px;
   top: 55%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 70%;
   height: 80%;
   background-color: ${({theme}) => theme.colors.black};;
   border-radius: 10px;
   color: ${({theme}) => theme.colors.white};
`

export const Wrapper = styled.div`
   display: flex;
   gap: 30px;
   position: relative;
`

export const StyledImage = styled.div`
   width: 50%;
   position: ${({isLoaded}) => isLoaded ? 'relative': 'absolute'};

   img{
      width: 100%;
   }
`

export const StyledPlaceHolder = styled.div`
   width: 50%;

   img{
      width: 100%;
   }
`

export const StyledContent = styled.div`
   max-width: 40%;
`

export const StyledButton = styled.button`
   border: none;
   background-color: transparent;
   position: absolute;
   top: 0;
   right: 0;
   width: 20px;
   height: 20px;
   cursor: pointer;
   transition: transform .2s;

   img{
      width: 100%;
   }

   &:hover{
      transform: scale(1.2);
   }
`

export const StyledTitle = styled.h3`

`

export const StyledCategory = styled.p`
   color: ${({theme}) => theme.colors.lightGrey};
`

export const StyledDescription = styled.p`
   
`

export const StyledPrice = styled.p`
   
`

export const StyledStatus = styled.div`

   span{
      color: green;
   }
`

export const StyledCart = styled.div`

`
