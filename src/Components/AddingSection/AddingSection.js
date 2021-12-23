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
               check = true
            }
            return check
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

   React.useEffect(() =>{
      if(amount > 10) setAmount(10)
   }, [amount])

   return (
      <StyledCart>
         <StyledInput
            label="Amount:"
            isCartPage
            minusHandler={() => amount !== 1 ? setAmount(amount - 1) : null}
            plusHandler={() => setAmount(amount + 1)}
            value={amount}
            setValue={(e) => setAmount(parseInt(e.currentTarget.value))}
            setBlur={(e) => !parseInt(e.currentTarget.value) && setAmount(1)}
         />

         <StyledButtonContainer>
            <AddToFavouriteButton 
               id={id}
               title={title}
               price={price}
               image={images[0].url}
               isCartPage
            />
            
            <StyledButton label="Add to cart" actionHandler={addToCartHandler} isClicked={isClicked} loading={loading}/>
         </StyledButtonContainer>
      </StyledCart>
   )
};

export default AddingSection;