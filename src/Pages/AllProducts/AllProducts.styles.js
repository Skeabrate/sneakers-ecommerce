import styled from "styled-components"

export const Wrapper = styled.section`
   color: ${({theme}) => theme.colors.white};
   margin-top: 80px;
   padding: 3vw;

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      margin-top: 60px;
   }
`

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

   h1{
      font-size: ${({theme}) => theme.fontSize.xxl};
      font-display: optional
   }

   span{
      font-size: ${({theme}) => theme.fontSize.s};
      opacity: 0;
      padding: 10px 20px;
   }

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      h1{
         font-size: ${({theme}) => theme.fontSize.xl};
      }

      span{
         padding: 8px 20px;
      }
   }

   @media (max-width: 750px){
      h1{
         font-size: ${({theme}) => theme.fontSize.l};
      }

      span{
         font-size: ${({theme}) => theme.fontSize.micro};
         padding: 5px 15px;
      }
   }
`

export const StyledContent = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 20px;
   opacity: 0;

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
   }

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      grid-template-columns: 1fr 1fr;
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