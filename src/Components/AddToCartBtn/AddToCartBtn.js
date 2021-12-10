import React, { useState } from 'react';
import plus from "../../Assets/Images/icon-plus.svg"
import minus from "../../Assets/Images/icon-minus.svg"
import { useSelector, useDispatch } from "react-redux";
import { addToCart, reset, increaseAmount } from "../../Redux/addToCartSlice"
import { 
   StyledCart, 
   StyledPlusMinusBtn, 
   StyledAddBtn } from "./AddToCartBtn.styles"

const AddToCartBtn = ({ size, product, setError, isClicked, setIsClicked }) => {
   const [amount, setAmount] = useState(1)

   const cart = useSelector((state) => state.cart)
   const dispatch = useDispatch()

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
         dispatch(reset())
         /* for(const key in cart){
            if(cart[key].title === product.title && cart[key].size === size) {
               console.log(cart[key].id)
               dispatch(increaseAmount({ id: cart[key].id, amount}))
               check = true
               break;
            }
         } */
         cart.find(item => {
            if(item.id === product.id && item.size === size) {
               dispatch(increaseAmount({ 
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
               amount, 
               size
            }))
         }
         setAmount(1)
      }
   }

   React.useEffect(() => {
      console.log(cart)
      /* console.log(localStorage.getItem('cart', JSON.stringify({id: product.id})))
      console.log(product.id) */
   }, [cart])

   return (
      <StyledCart>
         <StyledPlusMinusBtn onClick={lowerAmount}>
            <img src={minus} alt="minus"/>
         </StyledPlusMinusBtn>

         <p style={{fontWeight: 'bold'}}>{amount}</p>

         <StyledPlusMinusBtn onClick={() => setAmount(amount + 1)}>
            <img src={plus} alt="plus" />
         </StyledPlusMinusBtn>

         <StyledAddBtn onClick={addToCartHandler} disabled={isClicked}>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-10.563-5l-2.937-7h16.812l-1.977 7h-11.898zm11.233-5h-11.162l1.259 3h9.056l.847-3zm5.635-5l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            Add to cart
         </StyledAddBtn>
      </StyledCart>
   )
};

export default AddToCartBtn;