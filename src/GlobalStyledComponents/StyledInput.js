import React from 'react';
import styled from "styled-components"

const Wrapper = styled.div`
   display: flex;
   border: 1px solid ${({theme}) => theme.colors.grey};
   height: ${({isCart}) => isCart ? '46px' : 'unset'};
   width: fit-content;
   margin: 15px 0 30px;

   input, div{
      width: ${({isCart}) => isCart ? '50px' : '40px'};
      text-align: center;
      background-color: transparent;
      border: none;
      font-weight: bold;
      font-size: ${({theme}) => theme.fontSize.xxs};
      color: ${({theme}) => theme.colors.white};
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;

      ::-webkit-inner-spin-button{
         -webkit-appearance: none; 
         margin: 0; 
      }
      ::-webkit-outer-spin-button{
         -webkit-appearance: none; 
         margin: 0; 
      }  

      &:focus{
         outline: 1px solid ${({theme}) => theme.colors.white};
      }
   }
`

const StyledPlusMinusBtn = styled.button`
   background: transparent;
   border: none;
   padding: ${({isCart}) => isCart ? '15px' : '11px'};
   display: flex;
   justify-content: center;
   align-items: center;
   transition: background .1s ease-in-out;

   svg{
      width: 12px;
      height: 12px;
      fill: ${({theme}) => theme.colors.orange};
      transition: fill .1s ease-in-out;
   }

   &:hover{
      background: ${({theme}) => theme.colors.grey};

      svg{
         fill: ${({theme}) => theme.colors.white};
      }
   }

   &:focus{
      outline: 1px solid ${({theme}) => theme.colors.white};
   }
`

const StyledInput = ({plusHandler, minusHandler, value, setValue ,setBlur, isCartPage, label }) => {
   return (
      <div>
         {label ? <label style={{fontWeight: 'bold'}}>{label}</label> : null}
         <Wrapper isCart={isCartPage}>
            <StyledPlusMinusBtn isCart={isCartPage} onClick={minusHandler}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z"/></svg></StyledPlusMinusBtn>
            {isCartPage ? (
               <input
                  type="number"
                  value={value} 
                  onChange={setValue}
                  onBlur={setBlur}
               />
            ) : <div>{value}</div> }
            <StyledPlusMinusBtn isCart={isCartPage} onClick={plusHandler}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg></StyledPlusMinusBtn>
         </Wrapper>
      </div>
   );
};

export default StyledInput;