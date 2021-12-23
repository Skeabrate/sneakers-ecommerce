import React, { useState, useEffect } from 'react';
import StyledInput from '../../../GlobalStyledComponents/StyledInput';
import { changeAmount, removeFromCart } from "../../../Redux/addToCartSlice"
import { Link } from "react-router-dom"
import {
   Wrapper,
   StyledInfo,
   StyledAmount,
   StyledRemoveButton,
} from './CartItem.styles';

const CartItem = ({ item, dispatch, isCartOpen, setIsCartOpen }) => {
   const [inputValue, setInputValue] = useState('')

   useEffect(() =>{
      setInputValue(item.amount)
   }, [item.amount])

   const removeHanlder = () => dispatch(removeFromCart({ id: item.id, size: item.size }))
   const changeHandler = (value) => dispatch(changeAmount({ id: item.id, size: item.size, amount: value }))

   const changeAmountHandler = (option) => {
      if(option === "decrease") item.amount === 1 ? removeHanlder() : changeHandler(-1)
      else if(option === "increase") changeHandler(1)
   }

   return (
      <>
         {item ? (
            <Wrapper isCartOpen={isCartOpen}>
               <StyledRemoveButton onClick={removeHanlder}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></StyledRemoveButton>
               <Link to={`/product/${item.id}`} onClick={() => setIsCartOpen(false)}>
                  <img src={item.image} alt="shoeIcon" />
               </Link>
               <StyledInfo>
                  <div>
                     <h4>{item.title}</h4>
                     <div style={{display: 'flex', columnGap: '50px'}}>
                        <p>size: <strong>{item.size}</strong></p>
                        <p>$<strong>{item.price * item.amount}</strong></p>
                     </div>
                  </div>

                  <StyledAmount>
                     <StyledInput
                        isCart
                        minusHandler={() => changeAmountHandler("decrease")}
                        plusHandler={() => changeAmountHandler("increase")}
                        value={inputValue}
                     />
                  </StyledAmount>
               </StyledInfo>
            </Wrapper>
         ) : null}
      </>
   );
};

export default CartItem;