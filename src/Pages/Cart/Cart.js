import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useStoreLength } from "../../hooks/useStoreLength"
import {
    Wrapper,
} from "./Cart.styles"
import Items from "./Items/Items"
import Summary from "./Summary/Summary"
import Helmet from '../../helpers/Helmet';

const Cart = () => {
    const [totalAmount, setTotalAmount] = useState(0)
    const [textareaValue, setTextareaValue] = useState('')

    const cart = useSelector((state) => state.cart)
    const length = useStoreLength(cart)

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
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
        <Wrapper>
            <Helmet title="Sneakers Journey - Cart" />

            <Items cart={cart} length={length} />

            <Summary 
                totalAmount={totalAmount}
                textareaValue={textareaValue}
                setTextareaValue={setTextareaValue}
                length={length}
            />
        </Wrapper>
    );
};

export default Cart;