import ReactModal from "react-modal";
import styled from "styled-components";

export const ModalWrapper = styled(ReactModal)`
   position: fixed;
   z-index: 99999;
   display: flex;
   padding: 30px;
   top: 57%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 70%;
   background-color: ${({theme}) => theme.colors.black};
   border-radius: 20px;
   color: ${({theme}) => theme.colors.white};

   &:focus{
      outline: none;
   }

   @media (max-width: 1400px) {
      width: 90%;
   }
`

export const Wrapper = styled.div`
   display: grid;
   grid-template-columns: 1.3fr 0.7fr;
   align-items: center;
   position: relative;
   gap: 30px;
`

/* CONTENT */
export const StyledContent = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
`

export const StyledButton = styled.button`
   border: none;
   background-color: transparent;
   position: absolute;
   top: 0;
   right: 0;
   transition: transform .2s;

   svg{
      fill: ${({theme}) => theme.colors.white};
      height: 18px;
      width: 18px;
   }

   &:hover{
      transform: scale(1.2);
   }
`

export const StyledTitle = styled.h3`
   font-size: 2.2rem;
`

export const StyledCategory = styled.p`
   color: ${({theme}) => theme.colors.orange};
   font-style: italic;
   font-weight: bold;
`

export const StyledDescription = styled.p`
   color: ${({theme}) => theme.colors.lightGrey};
   margin-top: 3vw;
`

export const StyledInfo = styled.div`
   display: flex;
   align-items: center;
`

export const StyledPrice = styled.p`
   font-size: 2rem;
`

export const StyledStatus = styled.div`
   margin: 1vw 0;

   span{
      background-color: #59b605;
      margin-left: 10px;
      padding: 4px 10px;
      font-size: 12px;
      font-weight: bold;
      border-radius: 8px;
      color: ${({theme}) => theme.colors.black};
   }
`

export const StyledSize = styled.div`
   display: flex;
   align-items: center;
   margin-left: 10vw;

   select{
      margin-left: 10px;
      font-size: 1rem;
      background-color:transparent;
      border: 1px solid ${({theme}) => theme.colors.white};
      color: ${({theme}) => theme.colors.white};
      padding: 3px 10px;

      &:focus{
         outline: none;
         border: 1px solid ${({theme}) => theme.colors.orange}
      }
   }

   option{
      background-color: black;
      font-size: 1rem;
   }
`
