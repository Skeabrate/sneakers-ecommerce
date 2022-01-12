import React, { useEffect, useState } from 'react';
import { StyledTitle } from '../../GlobalStyledComponents/StyledTitle';
import { Wrapper } from '../../GlobalStyledComponents/Wrapper';
import { useSelector, useDispatch } from 'react-redux'
import { useStoreLength } from "../../hooks/useStoreLength"
import CartItem from "./CartItem/CartItem"
import {
    StyledContent,
} from "./CartPage.styles"

const CartPage = () => {
    const [totalAmount, setTotalAmount] = useState(0)
    const [textareaValue, setTextareaValue] = useState('')

    const cart = useSelector((state) => state.cart)
    const length = useStoreLength(cart)

    useEffect(() => {
        let totalAmount = 0
  
        if(length) {
           /* for(const key in cart) totalAmount += cart[key].amount * cart[key].price */
           cart.map(({ amount, price }) => totalAmount += amount * price)
        }
  
        setTotalAmount(totalAmount)
     }, [cart])

    return (
        <Wrapper>
            <StyledTitle>
                your bag
            </StyledTitle>

            <StyledContent>
                <div>
                    {length ? (
                        <>
                        {cart.map((item, index) => (
                            <CartItem 
                                item={item} 
                                key={index} 
                            />
                        ))}
                        <h4>Add a note</h4>
                        <textarea value={textareaValue} onChange={(e) => setTextareaValue(e.currentTarget.value)}/>
                        </>
                    ) : <h3>Your bag is empty</h3>}
                </div>
            </StyledContent>
        </Wrapper>
    );
};

export default CartPage;