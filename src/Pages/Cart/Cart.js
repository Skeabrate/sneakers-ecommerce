import React, { useEffect, useState, useRef } from 'react';
import { StyledTitle } from '../../GlobalStyledComponents/StyledTitle';
import { useSelector } from 'react-redux'
import { useStoreLength } from "../../hooks/useStoreLength"
import {
    Wrapper
} from "./Cart.styles"
import gsap from "gsap"
import Items from "./Items/Items"
import Summary from "./Summary/Summary"

const Cart = () => {
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
    }, [length])

    return (
        <Wrapper ref={contentRef}>
            <div>
            <header>
                            <StyledTitle>
                                your bag
                                <span ref={contentLengthRef}>[ { length } ]</span>
                            </StyledTitle>
                        </header>
                    <Items cart={cart} length={length} />
            </div>
    
                    <Summary 
                        totalAmount={totalAmount}
                        textareaValue={textareaValue}
                        setTextareaValue={setTextareaValue}
                    />
        </Wrapper>
    );
};

export default Cart;