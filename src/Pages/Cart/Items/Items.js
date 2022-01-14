import React from 'react';
import {
    Wrapper,
    StyledEnding,
} from "./Items.styles"
import CartItem from "./CartItem/CartItem"

const Items = ({ cart }) => {
    return (
        <Wrapper>
            {cart.map((item, index) => (
                <CartItem 
                    item={item} 
                    key={index} 
                />
            ))}
            
            <StyledEnding />            
        </Wrapper>
    );
};

export default Items;