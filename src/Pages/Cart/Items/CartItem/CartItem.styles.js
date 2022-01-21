import styled from "styled-components"

export const Wrapper = styled.article`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-top: 1px solid ${({theme}) => theme.colors.lightGrey};
   padding: 20px 3vw;

   h4{
      font-style: italic;
      margin-bottom: 10px;
   }

   img{
      width: 180px;
   }

   @media(max-width: 700px){
      flex-direction: column;
      align-items: flex-start;
      row-gap: 10px;
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

export const StyledActionButtons = styled.div`

   button{
      width: fit-content;
      background: none;
      text-decoration: underline;
      border: none;
      font-size: ${({theme}) => theme.fontSize.xs};;
      font-style: italic;
      margin-right: 20px;
   }
`

export const StyledAmount = styled.div`
   display: flex;
   align-items: center;
   column-gap: 50px;

   p{
      color: ${({theme}) => theme.colors.orange};
   }

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
