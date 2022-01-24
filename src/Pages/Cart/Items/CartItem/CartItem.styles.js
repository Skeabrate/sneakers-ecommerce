import styled from "styled-components"

export const StyledMoveToWishBtn = styled.button`
   width: fit-content;
   background: none;
   text-decoration: underline;
   border: none;
   font-size: ${({theme}) => theme.fontSize.xs};
   font-style: italic;
`

export const Wrapper = styled.article`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-top: 1px solid ${({theme}) => theme.colors.grey};
   padding: 20px 0 20px 30px;

   img{
      width: 180px;
   }
`

export const StyledRemoveButton = styled.button`
   border: none;
   background: transparent;
   position: absolute;
   top: 50%;
   left: 0;
   transform: translateY(-50%);

   svg{
      fill: ${({theme}) => theme.colors.grey};
      width: 16px;
      height: 16px;
   }
`

export const StyledInfo = styled.div`
   display: flex;
   width: 480px;
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

export const StyledAmount = styled.div`
   display: flex;
   align-items: center;
   column-gap: 50px;

   input {
      color: ${({theme}) => theme.colors.black};

      &:focus{
         outline: 2px solid ${({theme}) => theme.colors.orange};
      }
   }

   button{
      &:focus{
         outline: 2px solid ${({theme}) => theme.colors.orange};
      }
   }
`

export const StyledTotal = styled.div`
   color: ${({theme}) => theme.colors.orange};
   width: 80px;
   text-align: right;

   @media(max-width: 1200px){
      position: absolute;
      top: 30px;
      right: 0;
   }
`

