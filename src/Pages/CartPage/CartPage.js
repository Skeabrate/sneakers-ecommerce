import React, { useEffect, useState, useRef } from 'react';
import { StyledTitle } from '../../GlobalStyledComponents/StyledTitle';
import { Wrapper } from '../../GlobalStyledComponents/Wrapper';
import { useSelector } from 'react-redux'
import { useStoreLength } from "../../hooks/useStoreLength"
import CartItem from "./CartItem/CartItem"
import {
    StyledContent,
} from "./CartPage.styles"
import gsap from "gsap"

const CartPage = () => {
    const [totalAmount, setTotalAmount] = useState(0)
    const [textareaValue, setTextareaValue] = useState('')

    const cart = useSelector((state) => state.cart)
    const length = useStoreLength(cart)

    const tl = useRef(null)
    const contentRef = useRef(null)
    const contentLengthRef = useRef(null)

    React.useEffect(() => {
        tl.current = gsap.timeline()

        if(tl.current){
            tl.current
                .to(contentRef.current, {
                    opacity: 1,
                    duration: .6,
                }, "+=0.2s")
                .to(contentLengthRef.current, {
                    opacity: 1,
                    duration: .6,
                }, "-=0.6s")
        }
    }, [])

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
                <span ref={contentLengthRef}>[ { length } ]</span>
            </StyledTitle>

            <StyledContent ref={contentRef}>
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