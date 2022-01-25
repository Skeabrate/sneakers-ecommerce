import styled from "styled-components"

export const StyledMoveToWishBtn = styled.button`
   width: fit-content;
   background: none;
   text-decoration: underline;
   border: none;
   font-size: ${({theme}) => theme.fontSize.xs};
   font-style: italic;

   @media(max-width: ${({theme}) => theme.screenSize.mobile}){
      font-size: ${({theme}) => theme.fontSize.s};
   }
`

export const Wrapper = styled.article`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-top: 1px solid ${({theme}) => theme.colors.grey};
   border-bottom: ${({last, theme}) => last && `1px solid ${theme.colors.grey}`};
   padding: 20px 0 20px 30px;

   img{
      width: 180px;
   }

   h3{
      line-height: 1;
   }

   @media(max-width: ${({theme}) => theme.screenSize.mobile}){
      padding: 15px 25px 65px 5px;

      h3{
         font-size: ${({ theme }) => theme.fontSize.xs};
      }

      h4{
         font-size: ${({ theme }) => theme.fontSize.s};
      }

      img{
         width: 100px;
      }
   }
`

export const StyledRemoveButton = styled.button`
   border: none;
   background: transparent;
   position: absolute;
   top: 50%;
   left: 0;
   transform: translateY(-50%);
   width: 40px;
   height: 40px;
   display: flex;

   svg{
      fill: ${({theme}) => theme.colors.grey};
      width: 16px;
      height: 16px;
   }

   @media(max-width: ${({theme}) => theme.screenSize.mobile}){
      top: 35px;
      right: -20px;
      left: unset;

      svg{
         width: 14px;
         height: 14px;
      }
   }
`

export const StyledInfo = styled.div`
   display: flex;
   width: 480px;

   @media(max-width: 700px){
      width: 350px;
   }

   @media(max-width: ${({theme}) => theme.screenSize.mobile}){
      width: fit-content;
   }
`

export const StyledDetails = styled.div`
   display: flex;
   flex-direction: column;
   align-content: space-between;
   justify-content: space-between;
   padding: 10px;

   h4{
      margin-block: 5px;
      font-style: italic;
      font-weight: normal;

      span{
         margin-left: 5px;
         font-weight: bold;
         font-style: normal;
      }
   }

   @media(max-width: ${({theme}) => theme.screenSize.mobile}){
      padding: 0 0 5px 5px;

      h4{
         margin-block: 0px;

         span{
            margin-left: 5px;
            font-weight: bold;
            font-style: normal;
         }
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

   @media(max-width: ${({theme}) => theme.screenSize.mobile}){
      position: absolute;
      bottom: 15px;
      left: 5px;
   }
`

export const StyledTotal = styled.div`
   color: ${({theme}) => theme.colors.orange};
   width: 80px;
   text-align: right;
   position: relative;

   @media(max-width: 1200px){
      position: absolute;
      top: 30px;
      right: 0;
   }

   @media(max-width: ${({theme}) => theme.screenSize.mobile}){
      top: unset;
      bottom: 15px;
      right: 5px;
   }
`

