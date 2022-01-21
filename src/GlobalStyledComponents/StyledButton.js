import React from 'react';
import styled from "styled-components"

const StyledAddBtn = styled.button`
   background-color: ${({theme}) => theme.colors.orange};
   color: ${({theme}) => theme.colors.white};
   padding: 15px;
   font-weight: bold;
   border: none; 
   transition: all .3s ease-in-out;
   text-decoration: none;
   font-size: 1rem;
   width: 100%;

   span{
      position: relative;
      z-index: 1;
   }

   svg{
      opacity: 1;
      position: absolute;
      right: -15px;
      transform: rotateY(180deg);
      z-index: -1;

      transition: opacity .2s ease-in-out, 
                  transform .2s ease-in-out;
   }

   path{
      fill: ${({theme}) => theme.colors.orange};
   }

   &:hover{
      background-color: ${({theme}) => theme.colors.white};
      color: ${({theme}) => theme.colors.orange};

      svg{
         opacity: 1;
         transform: translateX(18px) rotateY(180deg);
      }
   }

   &:focus{
      outline: 1px solid ${({theme}) => theme.colors.white};
   }
`

const StyledButton = ({ label, actionHandler, as, to, isClicked = false, isCheckout = false, loading = true }) => {
   return (
      <StyledAddBtn as={as} to={to} onClick={actionHandler} disabled={isClicked || !loading} isCheckout={isCheckout}>  
         <span>
            {isCheckout ? (
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 2h-14c-1.104 0-2 .896-2 2v4h16v3.5c0 .276-.224.5-.5.5h-1.5v2h2c1.104 0 2-.896 2-2v-8c0-1.104-.896-2-2-2zm0 3h-14v-.5c0-.276.224-.5.5-.5h13c.276 0 .5.224.5.5v.5zm-6 5h-14c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-8c0-1.104-.896-2-2-2zm-7.844 8.333h-.997c-.092 0-.164-.077-.159-.168.017-.288.183-1.231.76-4.939.02-.131.13-.226.259-.226h1.836c.982 0 1.708.577 1.508 1.61-.206 1.075-.862 1.598-2.006 1.598h-.565c-.232.001-.317.088-.346.295l-.29 1.83zm3.802-2.486c-.212 1.105-.937 1.486-1.862 1.486h-.143c-.113 0-.209.083-.227.197l-.201 1.273c-.018.114-.114.197-.227.197h-.684c-.097 0-.172-.087-.157-.183l.346-2.22.016-.014h.539c1.309 0 2.127-.654 2.368-1.892.203.204.274.469.274.749 0 .134-.016.271-.042.407z"/></svg>
            ) : (
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-10.563-5l-2.937-7h16.812l-1.977 7h-11.898zm11.233-5h-11.162l1.259 3h9.056l.847-3zm5.635-5l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            )}
            {label}
         </span>
      </StyledAddBtn>
   );
};


export default StyledButton;