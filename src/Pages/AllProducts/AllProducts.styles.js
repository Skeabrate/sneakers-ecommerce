import styled from "styled-components"

export const StyledTitle = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 0 0 40px 0;

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      margin: 30px 0;
   }

   @media (max-width: 750px){
      margin: 20px 0;
   }

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      flex-direction: column;
      align-items: start;
   }
`

export const StyledTitleWrapper = styled.div`
   display: flex;
   align-items: flex-end;
   justify-content: center;
   font-style: italic;
   position: relative;

   h1{
      font-size: ${({theme}) => theme.fontSize.xxl};
      font-display: optional
   }

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      h1{
         font-size: ${({theme}) => theme.fontSize.xl};
      }

      /* span{
         padding: 8px 20px;
      } */
   }

   @media (max-width: 750px){
      h1{
         font-size: ${({theme}) => theme.fontSize.l};
      }

      /* span{
         font-size: ${({theme}) => theme.fontSize.micro};
         padding: 5px 15px;
      } */
   }
`

export const StyledTitleInfo = styled.div`
   display: flex;
   flex-direction: column;
   opacity: 0;

   div{
      position: absolute;
      left: 0;
      bottom: -20px;
      display: flex;
      
      p{
         color: ${({theme}) => theme.colors.orange};
         font-weight: bold;
         margin-left: 10px;
      }
   }

   span{
      font-size: ${({theme}) => theme.fontSize.s};
      padding: 10px 20px;
   }

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      span{
         padding: 8px 20px;
      }
   }

   @media (max-width: 750px){
      div{
         font-size: ${({theme}) => theme.fontSize.micro};
         bottom: -12px;

         p{
            margin-left: 5px;
         }
      }

      span{
         font-size: ${({theme}) => theme.fontSize.micro};
         padding: 5px 15px;
      }
   }
`

export const StyledError = styled.div`
   height: 30vh;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;

   h1{
      font-style: italic;
      font-size: ${({theme}) => theme.fontSize.error};
      color: ${({theme}) => theme.colors.lightGrey};
   }

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      h1{
         font-size: ${({theme}) => theme.fontSize.xl};
      }
   }
`

export const StyledLoading = styled.div`
   height: calc(100vh - 282px - 6vw);
   display: flex;
   justify-content: center;
   align-items: center;
`