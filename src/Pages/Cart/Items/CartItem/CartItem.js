import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { removeFromCart } from "../../../../Redux/addToCartSlice"
import { addToFavorite } from "../../../../Redux/addToFavoriteSlice"
import { useSelector, useDispatch } from 'react-redux';
import {
   Wrapper,
   StyledInfo,
   StyledAmount,
   StyledActionButtons,
   StyledDetails,
} from './CartItem.styles';
import AmountInput from '../../../../Components/AmountInput/AmountInput';
import { useInfoOpen } from "../../../../hooks/useInfoOpen"
import { ADDED_TO_WISHLIST, ALREADY_IN_WISHLIST } from '../../../../helpers/serverResponse';

const CartItem = ({ item }) => {
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
            <Wrapper>
               <StyledInfo>
                  <Link to={`/product/${item.id}`}>
                     <img src={item.image} alt="shoeIcon" />
                  </Link>

                  
                  <StyledDetails>
                     <h3>{item.title}</h3>
                     <div>
                        <p>Gender : <span>{item.gender}</span></p>
                        <p>Size : <span>{item.size}</span></p>
                        <p>Price : <span>${item.price}</span></p>
                     </div>

                     <StyledActionButtons>
                        <button onClick={handleMoveToWishlist}>Add to Wishlist</button>
                        <button onClick={removeHandler}>Remove</button>
                     </StyledActionButtons>
                  </StyledDetails>
               </StyledInfo>
                
               <StyledAmount>
                  <AmountInput
                     inputValue={inputValue}
                     setInputValue={setInputValue}
                     item={item}
                  />
                  <p><strong>${item.price * item.amount}</strong></p>
               </StyledAmount>
               
            </Wrapper>
         ) : null}
      </>
   );
};

export default CartItem;