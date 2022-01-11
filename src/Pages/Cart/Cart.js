import { useContext, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useStoreLength } from '../../hooks/useStoreLength';
import CartItem from "./CartItem/CartItem"
import { ModalsContext } from "../../Context/ModalsContext"
import {
   StyledCart,
   StyledTitle,
   StyledContent,
   StyledTotal,
} from "./Cart.styles"
import StyledButton from '../../GlobalStyledComponents/StyledButton';
import ModalBackground from '../../Components/ModalBackground/ModalBackground';
import { Link } from 'react-router-dom';

const Cart = () => {
   const [totalAmount, setTotalAmount] = useState(0)
   const [textareaValue, setTextareaValue] = useState('')

   const cart = useSelector((state) => state.cart)
   const dispatch = useDispatch()
   const length = useStoreLength(cart)

   const {isCartOpen, setIsCartOpen} = useContext(ModalsContext)

   useEffect(() => {
      let totalAmount = 0
      for(const key in cart) totalAmount += cart[key].amount * cart[key].price

      setTotalAmount(totalAmount)
   }, [cart])

   return (
      <section>
         <ModalBackground isModalOpen={isCartOpen} setIsModalOpen={() => setIsCartOpen(false)} />

         <StyledCart isCartOpen={isCartOpen}>
            <StyledTitle>
               <h1>YOUR BAG</h1>
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
                        setIsCartOpen={setIsCartOpen}
                     />
                  ))}
                  <h4>Add a note</h4>
                  <textarea value={textareaValue} onChange={(e) => setTextareaValue(e.currentTarget.value)}/>
                  </>
               ) : <h3>Your bag is empty</h3>}
            </StyledContent>

            <StyledTotal>
               <div>
                  <h3>Total : <span>[ {length} ]</span></h3>
                  <p>${totalAmount}</p>
               </div>
               <StyledButton as={Link} to="/cart" label="Check out" actionHandler={() => setIsCartOpen(false)} isCheckout />
            </StyledTotal>
         </StyledCart>
      </section>
   );
};

export default Cart;