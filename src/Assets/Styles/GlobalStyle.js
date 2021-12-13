import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   html{
      box-sizing: border-box;
      background-color: #1a1a1a;
   }

   *, *::after, *::before{
      box-sizing: inherit;
      margin: 0;
      padding: 0;
   }

   body, a, button {
      font-family: 'Montserrat', sans-serif;
      scroll-behavior: smooth;
   }

   body{
      overflow-x: hidden;
   }
`