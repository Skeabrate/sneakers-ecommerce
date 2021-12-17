import React from 'react';
import styled from "styled-components"

const StyledList = styled.ul`
   list-style: none;
   display: flex;
   column-gap: 10px;
   justify-content: left;
   max-width: 250px;
   width: fit-content;
   margin: 0 auto;
   overflow-x: auto;
   overflow-y: hidden;
   padding: 10px 0;
`

const StyledButton = styled.button`
   width: 40px;
   height: 40px;
   background-color: ${({theme, currentPage}) => currentPage ? theme.colors.orange : theme.colors.white};
   border: none;
   color: ${({theme, currentPage}) => currentPage ? theme.colors.white : theme.colors.black};
   font-weight: bold;
   font-size: ${({theme}) => theme.fontSize.xxs};
   position: relative;

   transition: color .1s ease-in-out;

   &::after{
      position: absolute;
      content: '';
      width: 100%;
      height: 2px;
      background-color: ${({theme}) => theme.colors.orange};
      bottom: -4px;
      left: 0;
      opacity: ${({currentPage}) => currentPage ? 1 : 0};

      transition: opacity .2s ease-in-out;
   }

   &:hover::after{
      opacity: 1;
   }

   &:hover{
      color: ${({theme, currentPage}) => !currentPage && theme.colors.orange};
   }
`

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
   const pageNumber = []
   
   for(let i=1; i<=Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumber.push(i)
   }

   return (
      <nav>
         <StyledList>
            {pageNumber.map(item => (
               <li key={item}>
                  <StyledButton currentPage={currentPage===item} onClick={() => paginate(item, false)}>{item}</StyledButton>
               </li>
            ))}
         </StyledList>
      </nav>
   );
};

export default Pagination;