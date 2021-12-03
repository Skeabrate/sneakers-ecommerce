import styled from 'styled-components'

export const StyledError = styled.div`
   height: calc(100vh - 100px);
   display: grid;
   align-content: center;
   text-align: center;

   h1, h2{
      font-style: italic;
      color: ${({theme}) => theme.colors.lightGrey};
   }
   
   h1{
      font-size: ${({theme}) => theme.fontSize.error};
      color: ${({theme}) => theme.colors.grey};
   }
`

export const LoadingWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: calc(100vh - 100px);
   width: 100%;
`

/* STYLED CONTENT */
export const Wrapper = styled.div`
   display: grid;
   grid-template-columns: 1.45fr 0.55fr;
   position: relative;
   margin-top: 0;
`