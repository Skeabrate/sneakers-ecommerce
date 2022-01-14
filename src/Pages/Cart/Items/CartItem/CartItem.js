import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { removeFromCart } from "../../../../Redux/addToCartSlice"
import { useDispatch } from 'react-redux';
import {
   Wrapper,
   StyledInfo,
   StyledAmount,
   StyledRemoveButton,
   StyledDetails,
   StyledMoveToWishBtn
} from './CartItem.styles';
import AmountInput from '../../../../Components/AmountInput/AmountInput';

const CartItem = ({ item }) => {
   const [inputValue, setInputValue] = useState(item.amount)

   const dispatch = useDispatch()
   const removeHandler = () => dispatch(removeFromCart({ id: item.id, size: item.size }))

   return (
      <>
         {item ? (
            <Wrapper>
               <StyledRemoveButton onClick={removeHandler}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></StyledRemoveButton>
               <Link to={`/product/${item.id}`}>
                  <img src={item.image} alt="shoeIcon" />
               </Link>

               <StyledInfo>
                  <StyledDetails>
                     <h3>{item.title}</h3>
                     <div>
                        <p>Gender : <span>{item.gender}</span></p>
                        <p>Size : <span>{item.size}</span></p>
                        <p>Item Price : <span>${item.price}</span></p>
                     </div>
                     <StyledMoveToWishBtn>Move to Wishlist</StyledMoveToWishBtn>
                  </StyledDetails>

                  <StyledAmount>
                     <AmountInput
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        item={item}
                     />
                  </StyledAmount>

                  <p style={{display: 'flex', alignItems: 'center'}}><strong>${item.price * item.amount}</strong></p>
               </StyledInfo>
            </Wrapper>
         ) : null}
      </>
   );
};

export default CartItem;