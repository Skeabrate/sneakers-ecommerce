import styled from "styled-components"

export const Wrapper = styled.article`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-top: 2px solid ${({theme}) => theme.colors.lightGrey};
   padding-block: 20px;

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
   top: 10px;
   right: 10px;

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
   text-decoration: underline;
   border: none;
   font-size: ${({theme}) => theme.fontSize.xs};;
`

export const StyledAmount = styled.div`
   display: flex;
   align-items: center;
   column-gap: 50px;
   padding: 0 50px;

   div{
      border-color: ${({theme}) => theme.colors.lightGrey};
   }

   input {
      color: black;
   }

   input:focus{
      outline: 2px solid black;
   }
`
