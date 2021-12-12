import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useCartLenght } from '../../hooks/useCartLenght';
import CartItem from "./CartItem"
import {
   Wrapper,
   StyledCart,
   StyledBackground,
} from "./Cart.styles"

const Cart = ({ setIsCartOpen, isCartOpen }) => {
   const cart = useSelector((state) =>state.cart)
   const dispatch = useDispatch()
   const length = useCartLenght()

   useEffect(() => {
      console.log(length)
   }, [length])

   return (
      <aside>
         <StyledBackground isCartOpen={isCartOpen} onClick={() => setIsCartOpen(false)} ></StyledBackground>
         <StyledCart isCartOpen={isCartOpen}>
            Cart
            <button onClick={() => setIsCartOpen(false)}>close</button>

            {length ? (
               <div>
                  {cart.map(item => (
                     <CartItem item={item} key={item.size} dispatch={dispatch}/>
                  ))}
               </div>
            ) : null}
         </StyledCart>
      </aside>
   );
};

export default Cart;