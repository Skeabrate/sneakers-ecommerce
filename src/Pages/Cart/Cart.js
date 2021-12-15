import { useContext, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useStoreLength } from '../../hooks/useStoreLength';
import CartItem from "./CartItem/CartItem"
import { OpenCartContext } from "../../Context/openCartContext"
import {
   StyledCart,
   StyledBackground,
   StyledTitle,
   StyledContent,
   StyledTotal,
} from "./Cart.styles"
import StyledButton from '../../Components/StyledButton/StyledButton';

const Cart = () => {
   const [totalAmount, setTotalAmount] = useState(0)

   const cart = useSelector((state) => state.cart)
   const dispatch = useDispatch()
   const length = useStoreLength(cart)
   const {isCartOpen, setIsCartOpen} = useContext(OpenCartContext)

   useEffect(() => {
      let totalAmount = 0
      for(const key in cart) totalAmount += cart[key].amount * cart[key].price

      setTotalAmount(totalAmount)
   }, [cart])

   return (
      <aside>
         <StyledBackground isCartOpen={isCartOpen} onClick={() => setIsCartOpen(false)} ></StyledBackground>

         <StyledCart isCartOpen={isCartOpen}>
            <StyledTitle>
               <h1>Your bag</h1>
               <button onClick={() => setIsCartOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></button>
            </StyledTitle>

            <StyledContent>
               {length ? (
                  <>
                  {cart.map((item, index) => (
                     <CartItem 
                        item={item} 
                        key={index} 
                        dispatch={dispatch}
                        isCartOpen={isCartOpen}
                     />
                  ))}
                  </>
               ) : null}
               <h4>Add a note</h4>
               <textarea />
            </StyledContent>

            <StyledTotal>
               <div>
                  <h3>Total : <span>[ {length} ]</span></h3>
                  <p>${totalAmount}</p>
               </div>
               <StyledButton label="Check out" actionHandler={() => console.log('go to checkout')} isCheckout/>
            </StyledTotal>
         </StyledCart>
      </aside>
   );
};

export default Cart;