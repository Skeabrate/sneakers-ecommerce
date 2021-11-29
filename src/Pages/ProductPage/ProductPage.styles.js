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

/* STYLED CONTENT */

export const Wrapper = styled.div`
   
`