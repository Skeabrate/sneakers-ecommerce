import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { removeFromCart } from "../../../../Redux/addToCartSlice"
import { addToFavorite } from "../../../../Redux/addToFavoriteSlice"
import { useSelector, useDispatch } from 'react-redux';
import {
   Wrapper,
   StyledInfo,
   StyledAmount,
   StyledRemoveButton,
   StyledDetails,
   StyledMoveToWishBtn,
   StyledTotal
} from './CartItem.styles';
import AmountInput from '../../../../Components/AmountInput/AmountInput';
import { useInfoOpen } from "../../../../hooks/useInfoOpen"
import { ADDED_TO_WISHLIST, ALREADY_IN_WISHLIST } from '../../../../helpers/serverResponse';

const CartItem = ({ item, last }) => {
   const [inputValue, setInputValue] = useState(item.amount)

   const favorite = useSelector((state) => state.favorite)
   const resolveInfoOpen = useInfoOpen()

   const dispatch = useDispatch()
   const removeHandler = () => dispatch(removeFromCart({ id: item.id, size: item.size }))

   const handleMoveToWishlist = () => {
      if(favorite.find(val => val.id === item.id)) resolveInfoOpen(ALREADY_IN_WISHLIST, false)

      else {
         dispatch(addToFavorite({
            id: item.id, 
            title: item.title, 
            price: item.price,
            image: item.image,
            amount: 1,
         }))

         resolveInfoOpen(ADDED_TO_WISHLIST, true)
      }
   }

   return (
      <>
         {item ? (
            <Wrapper last={last}>
               <StyledInfo>
                  <StyledRemoveButton onClick={removeHandler}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></StyledRemoveButton>
                  <Link to={`/product/${item.id}`}>
                     <img src={item.image} alt="shoeIcon" />
                  </Link>

                  
                  <StyledDetails>
                     <h3>{item.title}</h3>
                     <div>
                        <h4>Gender : <span>{item.gender}</span></h4>
                        <h4>Size : <span>{item.size}</span></h4>
                        <h4>Price : <span>${item.price}</span></h4>
                     </div>
                     <StyledMoveToWishBtn onClick={handleMoveToWishlist}>Add to Wishlist</StyledMoveToWishBtn>
                  </StyledDetails>
               </StyledInfo>
                
               <StyledAmount>
                  <AmountInput
                     inputValue={inputValue}
                     setInputValue={setInputValue}
                     item={item}
                  />
               </StyledAmount>
               
               <StyledTotal><h3>${item.price * item.amount}</h3></StyledTotal>
            </Wrapper>
         ) : null}
      </>
   );
};

export default CartItem;