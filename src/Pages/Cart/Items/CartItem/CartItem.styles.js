import styled from "styled-components"

export const Wrapper = styled.tr`
   border-top: 1px solid ${({theme}) => theme.colors.grey};
   position: relative;

   h4{
      font-style: italic;
      margin-bottom: 10px;
   }

   img{
      width: 180px;
   }
`

export const StyledRemoveButton = styled.button`
   border: none;
   background: transparent;
   position: absolute;
   top: 20px;
   right: 0px;

   svg{
      fill: ${({theme}) => theme.colors.lightGrey};
      width: 16px;
      height: 16px;
   }
`

export const StyledInfo = styled.div`
   display: flex;
`

export const StyledDetails = styled.div`
   display: flex;
   flex-direction: column;
   align-content: space-between;
   justify-content: space-between;
   padding: 10px;

   p{
      margin-block: 5px;
      font-style: italic;

      span{
         margin-left: 5px;
         font-weight: bold;
         font-style: normal;
      }
   }
`

export const StyledMoveToWishBtn = styled.button`
   width: fit-content;
   background: none;
   color: ${({theme}) => theme.colors.white};
   text-decoration: underline;
   border: none;
   font-size: ${({theme}) => theme.fontSize.xs};;
`

export const StyledAmount = styled.div`
   
`
