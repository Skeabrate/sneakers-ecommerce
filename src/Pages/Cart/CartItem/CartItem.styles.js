import styled from "styled-components"

export const Wrapper = styled.div`
   display: flex;
   margin-bottom: 20px;
   border-bottom: 1px solid ${({theme}) => theme.colors.grey};
   padding-bottom: 20px;
   position: relative;

   h4{
      font-style: italic;
      line-height: 1.6;
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
      width: 10px;
      height: 10px;
   }
`

export const StyledInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding: 16px;
   width: 100%;
`

export const StyledAmount = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`
