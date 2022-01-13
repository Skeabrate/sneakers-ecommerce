import styled from "styled-components"

export const Wrapper = styled.div`
   display: flex;
   border-top: 1px solid ${({theme}) => theme.colors.grey};
   border-bottom: 1px solid ${({theme}) => theme.colors.grey};
   padding: 15px 15px 15px 0;
   position: relative;
   margin-block: 15px; 

   h4{
      font-style: italic;
      margin-bottom: 10px;
   }

   img{
      width: 200px;
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
   display: grid;
   grid-template-columns: 50% 40% 10%;
   
   padding: 16px;
   width: 100%;

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      padding: 10px;
   }
`

export const StyledDetails = styled.div`
   display: flex;
   flex-direction: column;
   align-content: space-between;
   justify-content: space-between;

   p{
      margin-block: 8px;
      font-style: italic;

      span{
         margin-left: 8px;
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
   display: flex;
   align-items: center;
   justify-content: space-between;
`
