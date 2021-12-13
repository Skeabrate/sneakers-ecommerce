import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addToCart, reset, changeAmount } from "../../Redux/addToCartSlice"
import { OpenCartContext } from '../../Context/openCartContext';
import { 
   StyledCart, 
} from "./AddToCartBtn.styles"
import StyledButton from '../StyledButton/StyledButton';
import StyledInput from '../StyledInput/StyledInput';

const AddToCartBtn = ({ size, product, setError, isClicked, setIsClicked }) => {
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
         cart.find(item => item.id === 0 && dispatch(reset())) 
         cart.find(item => {
            if(item.id === product.id && item.size === size) {
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
               id: product.id, 
               title: product.title, 
               price: product.price,
               image: product.images[0].url,
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
            isCart
            minusHandler={lowerAmount}
            plusHandler={() => setAmount(amount + 1)}
            value={amount}
            setValue={(e) => setAmount(parseInt(e.currentTarget.value))}
            setBlur={() => {}}
         />
         <StyledButton label="Add to cart" actionHandler={addToCartHandler} isClicked={isClicked}/>
      </StyledCart>
   )
};

export default AddToCartBtn;