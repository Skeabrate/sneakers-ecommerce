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
   background-color: black;
   border-radius: 10px;
   color: ${({theme}) => theme.colors.white};
`

export const Wrapper = styled.div`
   display: flex;
   
`

export const StyledImage = styled.div`
   width: 50%;
   opacity: ${({isLoaded}) => isLoaded ? '1' : '0'};
   position: ${({isLoaded}) => isLoaded ? 'relative': 'absolute'};
   transition: opacity .4s;

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