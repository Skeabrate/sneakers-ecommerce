import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, changeAmount } from "../../Redux/addToCartSlice"
import { OpenCartContext } from '../../Context/openCartContext';
import StyledButton from '../../GlobalStyledComponents/StyledButton';
import StyledInput from '../../GlobalStyledComponents/StyledInput';
import AddToFavouriteButton from "../AddToFavouriteButton/AddToFavouriteButton"
import { 
   StyledCart,
   StyledButtonContainer,
} from "./AddingSection.styles"

const AddingSection = ({ loading, size, setError, isClicked, setIsClicked, product: {id, title, price, images = [{url: ""}]} }) => {
   const [amount, setAmount] = useState(1)

   const cart = useSelector((state) => state.cart)
   const dispatch = useDispatch()
   const { setIsCartOpen } = useContext(OpenCartContext)

   const lowerAmount = () => amount !== 1 ? setAmount(amount - 1) : null

   const addToCartHandler = () => {
      let check = false
      if(!size) {
         setError(true)
         setIsClicked(true)
         setTimeout(() => {
            setIsClicked(false)
         }, 250)
      }
      else {
         cart.find(item => item.id === 0 && dispatch(removeFromCart({ id: 0 }))) 
         cart.find(item => {
            if(item.id === id && item.size === size) {
               dispatch(changeAmount({ 
                  id: item.id, 
                  size: size,
                  amount
               }))
               return check = true
            }
         })

         if(!check) {
            dispatch(addToCart({ 
               id: id, 
               title: title, 
               price: price,
               image: images[0].url,
               amount, 
               size
            }))
         }
         setAmount(1)
         setIsCartOpen(true)
      }
   }

   return (
      <StyledCart>
         <StyledInput
            label="Amount:"
            isCart
            minusHandler={lowerAmount}
            plusHandler={() => setAmount(amount + 1)}
            value={amount}
            setValue={(e) => setAmount(parseInt(e.currentTarget.value))}
            setBlur={() => {}}
         />

         <StyledButtonContainer>
            <AddToFavouriteButton 
               id={id}
               title={title}
               price={price}
               image={images[0].url}
               isCart
            />
            
            <StyledButton label="Add to cart" actionHandler={addToCartHandler} isClicked={isClicked} loading={loading}/>
         </StyledButtonContainer>
      </StyledCart>
   )
};

export default AddingSection;