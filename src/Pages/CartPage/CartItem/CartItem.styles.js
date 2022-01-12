import styled from "styled-components"

export const Wrapper = styled.div`
   display: flex;
   border-top: 1px solid ${({theme}) => theme.colors.grey};
   padding-top: 20px;
   position: relative;

   h4{
      font-style: italic;
      margin-bottom: 10px;
   }

   img{
      width: 140px;
   }
`

export const StyledRemoveButton = styled.button`
   border: none;
   background: transparent;
   position: absolute;
   top: 0;
   right: 0;

   svg{
      fill: ${({theme}) => theme.colors.lightGrey};
      width: 16px;
      height: 16px;
   }
`

export const StyledInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding: 16px;
   width: 100%;

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      padding: 10px;
   }
`

export const StyledAmount = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`
